import { IIndicadorRepository } from "../../indicadores/infra/repositories/IIndicadoresRepository";
import { prisma } from "../client";

export class IndicadorRepository implements IIndicadorRepository {
  async countProjetosFinalizadosAlegrete(): Promise<number> {
    const total = await prisma.projeto.count({
      where: {
        unidade_origem: "CAMPUS ALEGRETE",
        situacao: "Finalizado",
        modalidade: {
          in: ["Projeto de Extensão", "Programa de Extensão"],
        },
      },
    });

    return total;
  }

  async findProjetosPorAno(ano: number) {
    const inicioAno = new Date(ano, 0, 1); // 1 Jan do ano
    const fimAno = new Date(ano, 11, 31, 23, 59, 59); // 31 Dez do ano

    return prisma.projeto.findMany({
      where: {
        AND: [
          { data_fim_projeto: { gte: inicioAno } }, 
          { data_inicio_projeto: { lte: fimAno } }, 
        ],
      },
    });
  }

  async countAcoesEmExecucao(): Promise<number> {
    return prisma.projeto.count({
      where: {
        situacao: "Aberto",
      },
    });
  }

  async countProjetosFinalizados(): Promise<number> {
    const total = await prisma.projeto.count({
      where: {
        situacao: "Finalizado",
      },
    });

    return total;
  }

  async countProjetosPorCampi(): Promise<Record<string, number>> {
    const projetos = await prisma.projeto.groupBy({
      by: ["unidade_origem"],
      _count: { id_projeto: true },
    });

    const resultado: Record<string, number> = {};
    projetos.forEach((p) => {
      const unidade = p.unidade_origem || "Não Informado";
      resultado[unidade] = p._count.id_projeto;
    });

    return resultado;
  }

  async countEventosAcademicosPorAno(ano: number): Promise<number> {
    const inicioAno = new Date(ano, 0, 1); // 1 de janeiro do ano
    const fimAno = new Date(ano, 11, 31, 23, 59, 59); // 31 de dezembro do ano

    const total = await prisma.projeto.count({
      where: {
        modalidade: "Evento",
        situacao: {
          in: ["Registrado", "Finalizado"],
        },
        AND: [
          { data_inicio_projeto: { lte: fimAno } }, 
          { data_fim_projeto: { gte: inicioAno } }, 
        ],
      },
    });

    return total;
  }
  async countTecnicosEnvolvidosComExtensao(): Promise<number> {
    const tecnicos = await prisma.participanteProjeto.findMany({
      where: {
        tipo_participante: {
          equals: "tecnicos", 
          mode: "insensitive", 
        },
      },
      select: {
        nome_participante: true,
      },
    });

    
    const nomesUnicos = new Set(
      tecnicos.map((t) => t.nome_participante?.trim().toLowerCase())
    );

    return nomesUnicos.size;
  }

  async countDiscentesUnicosEnvolvidosComExtensao(): Promise<number> {
    const discentes = await prisma.participanteProjeto.findMany({
      where: {
        tipo_participante: {
          equals: "discentes",
          mode: "insensitive",
        },
      },
      select: {
        nome_participante: true,
      },
    });

    const nomesUnicos = new Set(
      discentes.map((d) => d.nome_participante?.trim().toLowerCase())
    );

    return nomesUnicos.size;
  }

  async getTotalAlunosDoCampusAlegrete(): Promise<number> {
    const result = await prisma.curso.aggregate({
      _sum: {
        numero_total_aluno: true,
      },
      where: {
        campus: "CAMPUS ALEGRETE", 
      },
    });

    return result._sum.numero_total_aluno ?? 0;
  }

  async countDocentesEnvolvidosComExtensao(): Promise<number> {
    const docentes = await prisma.participanteProjeto.findMany({
      where: {
        tipo_participante: {
          equals: "docentes",
          mode: "insensitive",
        },
        projeto: {
          modalidade: "Projeto de Extensão",
          unidade_origem: "CAMPUS ALEGRETE",
        },
      },
      select: {
        nome_participante: true,
      },
    });

    const nomesUnicos = new Set(
      docentes.map((d) => d.nome_participante?.trim().toLowerCase())
    );

    return nomesUnicos.size;
  }

  async countColaboradoresExternosEnvolvidosComExtensao(): Promise<number> {
    const colaboradores = await prisma.participanteProjeto.findMany({
      where: {
        tipo_participante: {
          equals: "colaboradores externos",
          mode: "insensitive",
        },
        projeto: {
          modalidade: "Projeto de Extensão",
          unidade_origem: "CAMPUS ALEGRETE",
        },
      },
      select: {
        nome_participante: true,
      },
    });

    const nomesUnicos = new Set(
      colaboradores.map((c) => c.nome_participante?.trim().toLowerCase())
    );

    return nomesUnicos.size;
  }
}
