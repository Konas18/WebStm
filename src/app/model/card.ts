export class Card {
  id: any;
  surname: any;
  name: any;
  middlename: any;
  postid: { postName: string; } = {
    postName: '',
  };
  specializationid: { specializationname: string; id:number } = {
    id:0,
    specializationname: '',
  };
  clinicid: { clinicName: string; address: string; } = {
    clinicName: "",
    address: "",
  }
  category: any;
  rating: any;
  type: any;
  photo: any;

}
