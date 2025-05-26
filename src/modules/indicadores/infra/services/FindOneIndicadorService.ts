// src/modules/projetos/services/FindOneIndicadorService.ts
import { PrismaClient } from '@prisma/client';
import ProjetoEntity from '../entities/ProjetoEntity';

const prisma = new PrismaClient();

class FindOneIndicadorService {
  async execute(id: number): Promise<ProjetoEntity | null> {
    const projeto = await prisma.projeto.findUnique({
      where: { id_projeto: id },
    });

    if (!projeto) return null;

    return new ProjetoEntity(projeto);
  }
}

export default FindOneIndicadorService;
