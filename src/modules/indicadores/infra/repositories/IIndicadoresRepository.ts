export interface IIndicadorRepository {
  findProjetosPorAno( ano: number): Promise<{ id_projeto: number; modalidade: string | null }[]>;
  countAcoesEmExecucao(): Promise<number>;
  countProjetosFinalizados(): Promise<number>;
  countProjetosPorCampi(): Promise<Record<string, number>>;
  countEventosAcademicosPorAno(ano: number): Promise<number>;
  countTecnicosEnvolvidosComExtensao(): Promise<number>;
  countDiscentesUnicosEnvolvidosComExtensao(): Promise<number>;
  getTotalAlunosDoCampusAlegrete(): Promise<number>;
  countDocentesEnvolvidosComExtensao(): Promise<number>;
  countColaboradoresExternosEnvolvidosComExtensao(): Promise<number>;
}
