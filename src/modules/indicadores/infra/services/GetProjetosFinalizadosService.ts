import { prisma } from "@/modules/prisma/client";

class GetProjetosFinalizadosService {
  async execute() {
    const total = await prisma.projeto.count({
      where: {
        unidade_origem: "CAMPUS ALEGRETE",
        situacao: "Finalizado",
        modalidade: {
          in: ["Projeto de Extensão", "Programa de Extensão"]
        }
      }
    });

    return { totalProjetosFinalizadosAlegrete: total };
  }
}

export default GetProjetosFinalizadosService;
