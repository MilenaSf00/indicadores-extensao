import { Router } from "express";
import IndicadorController from "../../modules/indicadores/infra/controller/IndicadorController";

const router = Router();
const indicadorController = new IndicadorController();

/*
 * Número anual de atividades de extensão por modalidade
 */
router.get(
  "/por-modalidade",
  indicadorController.getNumeroAnualPorModalidade.bind(indicadorController)
);

router.get(
  "/acoes-em-execucao",
  indicadorController.getNumeroAcoesEmExecucao.bind(indicadorController)
);

router.get("/acoes-executadas", indicadorController.getNumeroAcoesExecutadas);

router.get("/acoes-por-campi", indicadorController.getNumeroAcoesPorCampi);

router.get(
  "/numero-eventos-academicos",
  indicadorController.getNumeroEventosAcademicosPorAno.bind(indicadorController)
);
router.get(
  "/total-tecnicos",
  indicadorController.getTotalTecnicosEnvolvidos.bind(indicadorController)
);

router.get(
  "/colaboradores-externos-envolvidos",
  indicadorController.getTotalColaboradoresExternosEnvolvidos.bind(
    indicadorController
  )
);

router.get(
  "/percentual-discentes-extensao",
  indicadorController.getPercentualDiscentesComExtensao
);

router.get("/total-pessoas-envolvidas-extensao", (req, res) =>
  indicadorController.getTotalPessoasEnvolvidasComExtensao(req, res)
);

export { router as indicadorRoutes };
