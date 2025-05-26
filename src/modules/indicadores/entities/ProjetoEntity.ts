/* eslint-disable @typescript-eslint/member-delimiter-style */
import { AreaEntity } from '../entities/AreaEntity';
import { CoordenadorEntity } from '../entities/CoordenadorEntity';
import { ParticipanteProjetoEntity } from '../entities/ParticipanteEntity';

export class ProjetoEntity {
  public id_projeto: number;
  public titulo_projeto?: string;
  public modalidade?: string;
  public unidade_origem?: string;
  public id_area: number;
  public id_coord: number;
  public data_inicio_projeto?: Date;
  public data_fim_projeto?: Date;
  public situacao?: string;
  public ultima_alteracao_projeto: Date;
  public palavras_chave?: string;
  public resumo?: string;
  public parceria?: string;

  public area?: AreaEntity;
  public coordenador?: CoordenadorEntity;
  public participantesProjeto?: ParticipanteProjetoEntity[];

  constructor(props: {
    id_projeto: number;
    id_area: number;
    id_coord: number;
    ultima_alteracao_projeto: Date;
    titulo_projeto?: string;
    modalidade?: string;
    unidade_origem?: string;
    data_inicio_projeto?: Date;
    data_fim_projeto?: Date;
    situacao?: string;
    palavras_chave?: string;
    resumo?: string;
    parceria?: string;
    area?: AreaEntity;
    coordenador?: CoordenadorEntity;
    participantesProjeto?: ParticipanteProjetoEntity[];
  }) {
    this.id_projeto = props.id_projeto;
    this.id_area = props.id_area;
    this.id_coord = props.id_coord;
    this.ultima_alteracao_projeto = props.ultima_alteracao_projeto;

    this.titulo_projeto = props.titulo_projeto;
    this.modalidade = props.modalidade;
    this.unidade_origem = props.unidade_origem;
    this.data_inicio_projeto = props.data_inicio_projeto;
    this.data_fim_projeto = props.data_fim_projeto;
    this.situacao = props.situacao;
    this.palavras_chave = props.palavras_chave;
    this.resumo = props.resumo;
    this.parceria = props.parceria;

    this.area = props.area;
    this.coordenador = props.coordenador;
    this.participantesProjeto = props.participantesProjeto;
  }
}

// eslint-disable-next-line eol-last
export default ProjetoEntity;