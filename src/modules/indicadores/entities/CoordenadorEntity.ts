export class CoordenadorEntity {
  public id_coord: number;
  public nome_coord?: string;
  public email_coord?: string;

  constructor(props: CoordenadorEntity) {
    this.id_coord = props.id_coord;
    this.nome_coord = props.nome_coord;
    this.email_coord = props.email_coord;
  }
}
export default CoordenadorEntity;
