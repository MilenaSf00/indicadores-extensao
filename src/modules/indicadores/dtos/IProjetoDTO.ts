/* eslint-disable @typescript-eslint/member-delimiter-style */

import { IAreaDTO } from "./IAreaDTO";
import { ICoordenadorDTO } from "./ICoordenadorDTO";
import { IParticipanteProjetoDTO } from "./IParticipanteDTO";


export interface IProjetoDTO {
  id_projeto: number;
  titulo_projeto?: string;
  modalidade?: string;
  unidade_origem?: string;
  id_area: number;
  id_coord: number;
  data_inicio_projeto?: Date;
  data_fim_projeto?: Date;
  situacao?: string;
  ultima_alteracao_projeto: Date;
  palavras_chave?: string;
  resumo?: string;
  parceria?: string;

  area?: IAreaDTO;
  coordenador?: ICoordenadorDTO;
  participantesProjeto?: IParticipanteProjetoDTO[];
}
