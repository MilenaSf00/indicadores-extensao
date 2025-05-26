import { Router } from "express";
import { indicadorRoutes } from "./indicador.routes";

const routes = Router();

routes.use("/indicadores", indicadorRoutes);

export { routes };
