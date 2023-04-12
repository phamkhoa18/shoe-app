
export class Province{
  province_id : Number = 0 ;
  province_name : String = '' ;
  province_type : String = '';
}

export class District {
  district_id : Number = 0 ;
  district_name : String = '' ;
  district_type : String = '' ;
  lat : null = null ;
  lng : null = null ;
  province_id : String = '' ;
}

export class Ward {
  district_id : Number = 0 ;
  ward_id : Number = 0 ;
  ward_name : String = '' ;
  ward_type : String = '' ;
}
