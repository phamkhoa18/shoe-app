import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { account } from 'src/app/models/account.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user : account = new account ;
  isValid : Boolean = false ;

  constructor(private dataservice : DataService , private router : Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  submit(data : NgForm) {
    this.isValid = true ;
    if(data.valid) {
      this.loginaccount('/login');
    }
  }

  async loginaccount(path : any) {
    (await this.dataservice.post(path , this.user)).subscribe((v) => {
        if(v) {
        sessionStorage.setItem('user', JSON.stringify(v));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        })
        }
    })
  }

}
