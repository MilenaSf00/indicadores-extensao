import { Request, Response, RequestHandler } from "express";
import { IndicadorService } from "../services/IndicadorService";

const indicadorService = new IndicadorService();

export class IndicadorController {
  getNumeroAnualPorModalidade: RequestHandler = async (req, res) => {
    try {
      const ano = parseInt(req.query.ano as string);

      if (isNaN(ano)) {
        res.status(400).json({ error: "Ano inválido." });
        return;
      }

      const resultado = await indicadorService.getNumeroAnualPorModalidade(ano);
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao gerar indicador." });
    }
  };

  getNumeroAcoesEmExecucao: RequestHandler = async (req, res) => {
    try {
      const total = await indicadorService.getNumeroAcoesEmExecucao();
      res.json({ totalAcoesEmExecucao: total });
      return; // retorna void, só para parar o fluxo
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao buscar número de ações em execução." });
      return; // retorna void
    }
  };

  getNumeroAcoesExecutadas: RequestHandler = async (req, res) => {
    try {
      const total = await indicadorService.getNumeroAcoesExecutadas();
      res.json({ totalAcoesExecutadas: total });
      return;
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao buscar número de ações executadas." });
      return;
    }
  };

  getNumeroAcoesPorCampi: RequestHandler = async (req, res) => {
    try {
      const resultado = await indicadorService.getNumeroAcoesPorCampi();
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao buscar número de ações por campi." });
    }
  };

  getNumeroEventosAcademicosPorAno: RequestHandler = async (req, res) => {
    try {
      const ano = parseInt(req.query.ano as string);
      console.log("Ano recebido:", ano);
      if (isNaN(ano)) {
        res.status(400).json({ error: "Ano inválido." });
        return;
      }

      const total = await indicadorService.getNumeroEventosAcademicosPorAno(
        ano
      );
      res.json({ totalEventos: total });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao obter número de eventos acadêmicos." });
    }
  };

  getTotalTecnicosEnvolvidos = async (req: Request, res: Response) => {
    try {
      const total = await indicadorService.getTotalTecnicosEnvolvidos();
      res.json({ totalTecnicos: total });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao buscar total de técnicos envolvidos." });
    }
  };

  getPercentualDiscentesComExtensao = async (req: Request, res: Response) => {
    try {
      const result = await indicadorService.getPercentualDiscentesComExtensao();
      res.json(result);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Erro ao calcular o percentual de discentes envolvidos.",
        });
    }
  };

  getTotalPessoasEnvolvidasComExtensao = async (
    req: Request,
    res: Response
  ) => {
    try {
      const resultado =
        await indicadorService.getTotalPessoasEnvolvidasComExtensao();
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Erro ao calcular o total de pessoas envolvidas com extensão.",
        });
    }
  };

  getTotalColaboradoresExternosEnvolvidos: RequestHandler = async (
    req,
    res
  ) => {
    try {
      const total =
        await indicadorService.getTotaColaboradoreExternosEnvolvidos();
      res.json({ totalColaboradoresExternosEnvolvidos: total });
    } catch (error) {
      console.error("Erro ao buscar colaboradores externos envolvidos:", error);
      res.status(500).json({ error: "Erro interno ao buscar dados." });
    }
  };
}

export default IndicadorController;
