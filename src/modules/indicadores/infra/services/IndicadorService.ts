import { PrismaClient } from "@prisma/client"; // ✅ CERTO

import { IIndicadorRepository } from "../repositories/IIndicadoresRepository";

import { IndicadorRepository } from "../../../../modules/prisma/repositorie/IndicadorRepository";

const prisma = new PrismaClient();
export class IndicadorService {
  private indicadorRepository: IIndicadorRepository;

  constructor() {
    this.indicadorRepository = new IndicadorRepository();
  }

  async getNumeroAnualPorModalidade(ano: number) {
    const projetos = await this.indicadorRepository.findProjetosPorAno(ano);

    const resultado: Record<string, number> = {};

    for (const projeto of projetos) {
      const modalidade = projeto.modalidade ?? "Não Informada";
      resultado[modalidade] = (resultado[modalidade] ?? 0) + 1;
    }

    return resultado;
  }

  async getNumeroAcoesEmExecucao(): Promise<number> {
    return this.indicadorRepository.countAcoesEmExecucao();
  }

  async getNumeroAcoesExecutadas(): Promise<number> {
    return this.indicadorRepository.countProjetosFinalizados();
  }

  async getNumeroAcoesPorCampi(): Promise<Record<string, number>> {
    return this.indicadorRepository.countProjetosPorCampi();
  }

  async getNumeroEventosAcademicosPorAno(ano: number): Promise<number> {
    return this.indicadorRepository.countEventosAcademicosPorAno(ano);
  }

  async getTotalTecnicosEnvolvidos(): Promise<number> {
    return this.indicadorRepository.countTecnicosEnvolvidosComExtensao();
  }

  async getTotaColaboradoreExternosEnvolvidos(): Promise<number> {
    return this.indicadorRepository.countColaboradoresExternosEnvolvidosComExtensao();
  }

  async getPercentualDiscentesComExtensao(): Promise<{
    totalDiscentes: number;
    totalDiscentesEnvolvidos: number;
    percentual: number;
  }> {
    const totalDiscentes =
      await this.indicadorRepository.getTotalAlunosDoCampusAlegrete();
    const totalDiscentesEnvolvidos =
      await this.indicadorRepository.countDiscentesUnicosEnvolvidosComExtensao();

    const percentual =
      totalDiscentes > 0
        ? (totalDiscentesEnvolvidos / totalDiscentes) * 100
        : 0;

    return {
      totalDiscentes,
      totalDiscentesEnvolvidos,
      percentual: Number(percentual.toFixed(2)),
    };
  }

  async getTotalPessoasEnvolvidasComExtensao(): Promise<{
    tecnicos: number;
    docentes: number;
    discentes: number;
    colaboradoresExternos: number;
    total: number;
  }> {
    const [tecnicos, docentes, discentes, colaboradoresExternos] =
      await Promise.all([
        this.indicadorRepository.countTecnicosEnvolvidosComExtensao(),
        this.indicadorRepository.countDocentesEnvolvidosComExtensao(),
        this.indicadorRepository.countDiscentesUnicosEnvolvidosComExtensao(),
        this.indicadorRepository.countColaboradoresExternosEnvolvidosComExtensao(),
      ]);

    const total = tecnicos + docentes + discentes + colaboradoresExternos;

    return {
      tecnicos,
      docentes,
      discentes,
      colaboradoresExternos,
      total,
    };
  }
}
