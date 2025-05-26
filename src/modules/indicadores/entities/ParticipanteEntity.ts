import { ProjetoEntity } from './ProjetoEntity';

export class ParticipanteProjetoEntity {
  public id_participante_projeto?: number;
  public id_projeto: number;
  public tipo_participante?: string;
  public nome_participante?: string;
  public numero_total_participante?: number;
  public projeto?: ProjetoEntity;

  constructor(props: {
    id_projeto: number;
    id_participante_projeto?: number;
    tipo_participante?: string;
    nome_participante?: string;
    numero_total_participante?: number;
    projeto?: ProjetoEntity;
  }) {
    this.id_participante_projeto = props.id_participante_projeto;
    this.id_projeto = props.id_projeto;
    this.tipo_participante = props.tipo_participante;
    this.nome_participante = props.nome_participante;
    this.numero_total_participante = props.numero_total_participante;
    this.projeto = props.projeto;
  }
}
