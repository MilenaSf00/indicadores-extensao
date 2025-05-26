export class CursoEntity {
  public codigo_curso: string;
  public campus?: string;
  public nivel?: string;
  public turno?: string;
  public nome_curso?: string;
  public modalidade?: string;
  public tipo_curso?: string;
  public numero_total_aluno: number;

  constructor (props: CursoEntity){
    this.codigo_curso = props.codigo_curso;
    this.campus = props.campus;
    this.nivel = props.nivel;
    this.turno = props.turno;
    this.nome_curso = props.nome_curso;
    this.modalidade = props.modalidade;
    this.tipo_curso = props.tipo_curso;
    this.numero_total_aluno = props.numero_total_aluno;
  }
} export default CursoEntity;
