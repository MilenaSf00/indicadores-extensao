/* eslint-disable @typescript-eslint/member-delimiter-style */

import { IProjetoDTO } from "./IProjetoDTO";


export interface IParticipanteProjetoDTO {
  id_participante_projeto?: number;
  id_projeto: number;
  tipo_participante?: string;
  nome_participante?: string;
  numero_total_participante?: number;

  projeto?: IProjetoDTO;
}

// eslint-disable-next-line eol-last
