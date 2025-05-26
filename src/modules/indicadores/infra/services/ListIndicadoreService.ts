// src/modules/projetos/services/ListIndicadoresService.ts
import { PrismaClient } from '@prisma/client';
import ProjetoEntity from '../entities/ProjetoEntity';

const prisma = new PrismaClient();

class ListIndicadoresService {
  async execute(): Promise<ProjetoEntity[]> {
    const projetos = await prisma.projeto.findMany();

    return projetos.map((projeto) => new ProjetoEntity(projeto));
  }
}

export default ListIndicadoresService;
