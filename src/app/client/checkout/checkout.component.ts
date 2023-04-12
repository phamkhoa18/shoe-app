import { Component } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { Province , District , Ward } from 'src/app/models/city.model';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  // biến xử lý khi select
  province: any ='';
  district : any = '';
  ward : any = '';
  listProvince : Province[] = [] ;
  listDistricts : District[] = [];
  listWard : Ward[] = [] ;
  checkout :any = [] ;
  isValid = false;
  isCheck = false ;
  user : user = new user(0,'','',0,'','','','','');

  constructor(private cityservice : CityService , private dataservice : DataService , private router : Router) {}

  ngOnInit(): void {
    this.getListProvince();
    this.getListDistrict();
    this.getListWard() ;
    this.getCartCheckout() ;
  }

  getListProvince() {
      this.cityservice.getListProvince().then((res : any) => {
          this.listProvince = res.results ;
      })
    }

  getListDistrict() {
    if(!this.province) {
      console.log('chưa chọn province');
      return ;
    }
    this.cityservice.getListDistricts(this.province).then((res : any) => {
        this.listDistricts = res.results ;
    })
  }
  getListWard() {
    if(!this.district) {
      console.log('chưa chọn district');
      return ;
    }
    this.cityservice.getListWard(this.district).then((res : any) => {
      this.listWard = res.results ;
    })
  }

  getCartCheckout() {
      this.checkout = this.dataservice.getallcart() ;
  }

  submit(dataForm : NgForm) {
    this.isValid = true ;
    if(dataForm.valid) { 
      this.listProvince.forEach((e) => {
          if(e.province_id == Number(this.user.province)) {
              this.user.province = e.province_name ;
          } 
      })
      this.listDistricts.forEach((e) => {
          if(e.district_id == Number(this.user.district)){
            this.user.district = e.district_name ;
          }
      })
      this.isCheck = true ;
      console.log(this.user);
      

    } else {
      console.log('lỗi rồi nè !');

    }
  }

  confirm() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      text: `Cảm ơn ${this.user.name} đã mua hàng !`,
      showConfirmButton: false,
      timer: 3000 
    }).then( () => {
      this.router.navigate(['/home']);
    })
  }

    // biến đổi kiểu dữ liệu
    Number(price : Number , quantity : Number) : any {
      return  Number(price) * Number(quantity) ;
    }

      // còn không thêm get thì là methods
  get totalcart() : Number {
    var S = 0

    this.checkout.forEach((e : any) => {
      S = S + e.price*e.quantity ;
    })
    return S ;
  }
  }

