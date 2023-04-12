import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  p = 1 ;
  isSearch : String = '';
  items : product[] = [];
  orderBy = 'giatangdan';
  selecttrademark: string[] = [];
  selecttradeprice = '';
  filteredProducts: product[] = [] ;
  isLoading : Boolean = true ;


  // lọc theo giá tăng , giảm , a-z,z-a
  options = [
    { name: 'Giá: Tăng dần', value: 'giatangdan'},
    { name: 'Giá: Giảm dần', value: 'giagiamdan'},
    { name: 'Tên: A-Z', value: 'a-z'},
    { name: 'Tên: Z-A', value: 'z-a'}
];
  // lọc theo trademark (thương hiệu)
  trademark = [
    {id : 1 , name : 'ADIDAS' , value : 'adidas'},
    {id : 2 , name : 'NIKE' , value : 'nike'},
    {id : 3 , name : 'MLB' , value : 'mlb'}
  ]
  // lọc theo giá (price)
  prices = [
    {id : 1 , name : 'Dưới 500,000đ' , value : 'duoi500' , active : false },
    {id : 2 , name : '500,000đ - 1,000,000đ' , value : '500-1000' , active : false},
    {id : 3 , name : '1,000,000đ - 2,000,000đ' , value : '1000-2000' , active : false},
    {id : 4 , name : 'Trên 2,000,000đ' , value : 'tren2000' , active : false},
  ]
  constructor(private dataservice : DataService , private loadingservice : LoadingService){}

  ngOnInit(): void {

    this.getAllFormService() ;
  }


  // hàm hiển thị tất cả sản phẩm
  async getAllFormService() {
    (await this.dataservice.getAll()).subscribe((v : any) => {
        this.items = v ;
        this.isLoading = false ;
    })
  }

  // lọc sản phẩm theo giá hoặc tên theo thứ tự đã được chọn
   sortList(product : any) {
    if (this.orderBy === 'giatangdan') {
      return product.sort((a : any,b : any) => parseFloat(a.price) - parseFloat(b.price));
    }
    if (this.orderBy === 'giagiamdan') {
      return product.sort((a : any,b : any) => parseFloat(b.price) - parseFloat(a.price));
    }
    if (this.orderBy === 'a-z') {
      return product.sort((a : any,b : any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    }
    if (this.orderBy === 'z-a') {
      return product.sort((a : any,b : any) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
    }
  }

  // xác định giá trị trademark
  onChangeBrand(event: any): void {
    const value = event.target.value;
    if (event.target.checked) {
      this.selecttrademark.push(value );
      console.log(this.selecttrademark);
    } else {
      const index = this.selecttrademark.indexOf(value);
      if (index !== -1) {
        this.selecttrademark.splice(index, 1);
      }
    }
  }

    // xác định giá trị trademark
    onChangePrice(event: any): void {
      const value = event.target.value;
      if (event.target.checked) {
        this.selecttradeprice = value;
        this.prices.forEach((e) => {
            if(e.value != value) {
                e.active = true ;
            }
        })
      } else {
        this.selecttradeprice = '';
        this.prices.forEach((e) => {
            e.active = false ;
        })
      }
    }


  // lọc theo thương hiệu
  filterTrademark(product : any) {
    if(this.selecttrademark && this.selecttrademark.length) {
      return product.filter((product : any) => this.selecttrademark.indexOf(product.trademark.title) !== -1) ;
    } else {
        return product;
    }
  }
  // lọc theo giá
  filterPrice(product : any) {
    if(this.selecttradeprice == 'duoi500' ){
      return product.filter((e : any) => {return e.price <= 500000});
    }
    if(this.selecttradeprice == '500-1000'){
      return product.filter((e : any) => {return e.price >= 500000 && e.price <= 1000000});
    }
    if(this.selecttradeprice == '1000-2000'){
      return product.filter((e:any) => {return e.price >= 1000000 && e.price <= 2000000});
    }
    if(this.selecttradeprice == 'tren2000'){
      return product.filter((e:any) => {return e.price >= 2000000});
    }
    if(!this.selecttradeprice) {
      return product = this.items ;
    }
  }

 get arraynew() : any {
    this.filteredProducts = this.filterTrademark(this.sortList(this.filterPrice(this.items)));
    if(!this.isSearch) {
      return this.filteredProducts ;
    }
    if(this.isSearch) {
      this.filteredProducts = this.filteredProducts.filter((e : any) => {
        if(e.title.toLowerCase().indexOf(this.isSearch)!==-1){
          return e ;
        }
      })
      return this.filteredProducts ;
    }
  }

  get filterSearch() : String {
    this.isSearch = this.dataservice.getAllSearch() ;
    return this.isSearch ;
  }
}
