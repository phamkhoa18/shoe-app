export interface Size{
    size : Number ;
    active: boolean ;
    stock : Number
}

export class product {
    _id : Number = 0 ;
    id : Number = 0 ;
    title : String = '' ;
    price : Number = 0 ;
    image : [] = [] ;
    quantity : Number = 0 ;
    trademark : String = '' ;
    type : String = '';
    size : Size[] = [
        {size : 0 , stock : 0 , active : false}
    ] ;

}
