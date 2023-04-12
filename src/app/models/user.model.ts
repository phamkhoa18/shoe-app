export class user {
  id : Number = 0 ;
  name : String = '' ;
  email : String = '' ;
  phone : Number  ;
  province : String = '' ;
  district : String = '' ;
  ward : String = '' ;
  address : String = '';
  note : String = '' ;

    constructor (id : Number , name : String , email : String , phone : Number , province : String , district : String , ward : String , address : String , note : String ) {
      this.id = id ;
      this.name = name ;
      this.email = email ;
      this.phone = phone ;
      this.province = province ;
      this.district = district ;
      this.ward = ward ;
      this.address = address ;
      this.note = note ;
    }
}
