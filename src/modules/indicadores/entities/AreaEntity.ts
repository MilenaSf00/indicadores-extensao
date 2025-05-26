export class AreaEntity {
  public id_area: number;
  public area_conhecimento?: string;
  public area_tematica?: string;
  public linha_tematica?: string;

  constructor(props: AreaEntity) {
    this.id_area = props.id_area;
    this.area_conhecimento = props.area_conhecimento;
    this.area_tematica = props.area_tematica;
    this.linha_tematica = props.linha_tematica;
  }
}
export default AreaEntity;
