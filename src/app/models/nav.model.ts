interface subnav {
    _id : String ,
    title : String ,
    value : String
}

export class Nav {
  _id : String = '' ;
  title : String = '' ;
  bump : subnav[] = [
      {_id : '' , title : '' , value : ''}
   ] ;
  value : String = ''
}
