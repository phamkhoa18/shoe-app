import { Injectable } from '@angular/core';
// import { data } from '../data/data';
import { product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  user : any ;
  isSearch : String = '';
  products : any = [] ;
  // đường dẫn lấy dữ liệu từ database
  URL_HOST : any = 'https://shoe-app.onrender.com' ;
  // ischeckout_router
  isShowHeaderFooter : boolean = true ;

  constructor(private http : HttpClient) {

  }

  // phương thức hiển thị tất cả sản phẩm
  async getAll() {
      return this.products = await this.http.get( this.URL_HOST +  '/listProduct' , httpOptions);
  }
  // phương thức hiển thị 1 sản phẩm bằng id
  async getOneProduct(id:Number)  {
    return await this.http.get( this.URL_HOST + '/listProduct/' + id).toPromise();
  }

  // phương thức get
  async get(path : any ) {
    return await this.http.get(this.URL_HOST + path , httpOptions) ;
  }

  // phương thức post
  async post(path : any , body : any) {
    return await this.http.post(this.URL_HOST + path , body , httpOptions);
  }

  // các phương thức xử lý giỏ hàng

  // giỏ hàng
  cart:Cart[] = [] ;
  cartlength : Number = 0 ;
  addcart(v : any , size : Number) {
    console.log(v);
      const itemcart:Cart = {
        _id : v._id ,
        id_cart : this.cart.length + 1 ,
        id : v.id ,
        title : v.title ,
        price : v.price ,
        image : v.image[0] ,
        quantity : v.quantity ,
        trademark : v.trademark ,
        type : v.type ,
        size : size
      }
      if(this.checkcart(itemcart) == true ) {
          // trùng sp và trùng size (đã xử lý)
      }
      else {
          this.cart.push(itemcart) ;
      }

  }
  checkcart(itemcart:any ) {
      var flag = false ;
      // kiểm tra có trùng size với sp ko
      this.cart.forEach((e : any) => {
          if(itemcart._id == e._id && itemcart.size == e.size) {
              e.quantity ++ ;
              flag = true ;
          }
      })
      return flag ;
  }


  getSearch(v : String) {
    this.isSearch = v ;
  }

  getAllSearch() {
    return this.isSearch ;
  }

  getallcart() {
    return this.cart ;
  }

  setUser(v: any) {
    this.user = v ;
    localStorage.setItem('user' , JSON.stringify(v));
  }

  getUser() {
    if(!this.user) {
      this.user = JSON.parse(localStorage.getItem('user') ?? '{}');
    }
    return this.user ;
  }

  removeUser() {
    this.user = {} ;
    localStorage.removeItem('user');
  }

  // CSS - LOADING




}
