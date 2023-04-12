import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { account } from 'src/app/models/account.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user : account = new account ;
  isValid : Boolean = false ;

  constructor ( private dataservice : DataService , private router : Router) {

  }

 async submit(data : NgForm) {
  this.isValid = true ;
    if(data.valid) {
         this.postaccount('/register');
    }
  }

  async postaccount(path : any) {

    let flag = false ;
     return   (await this.dataservice.post(path , this.user)).subscribe((v) => {
          if(v) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              text: `Đăng ký tài khoản thành công`,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.router.navigate(['/login']);
            })
          }
      } , (err) => {
          if(err) {
            Swal.fire({
              icon: 'error',
              title: 'Tài khoản gmail này đã tồn tại',
              text: 'Bạn hãy đăng ký tài khoản khác !!!'
            }).then(() => {
              this.router.navigate(['/register']);
            })

          }
      })
  }

}
