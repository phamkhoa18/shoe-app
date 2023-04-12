import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Nav } from 'src/app/models/nav.model';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart : Cart[] = [] ;
  nav : Nav[] = [] ;
  isShowHeader : boolean = true ;
  isSearch : String = '' ;
  user : any ;
  isUserLogin : any ;
  constructor(private dataservice : DataService , private router : Router ) {

  }

  ngOnInit(): void {
    this.isUserLogin = JSON.parse(sessionStorage.getItem('user') ?? 'false');
    console.log(this.isUserLogin);
    this.getCart();
    this.getNav();
  }
  getCart() {
    this.cart = this.dataservice.getallcart() ;
  }

 async getNav() {
    (await this.dataservice.get('/util/list')).subscribe  ((v : any) => {
        this.nav = v ;
        console.log(this.nav);

    })
  }

  submitSearch() {
    this.dataservice.getSearch(this.isSearch);
    this.router.navigate(['/product']);
  }

  get cartlength() : Number {
    let S = 0;
    this.cart.forEach((e ) => {
      S = S + Number(e.quantity) ;
    })
    return S ;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    })
  }

  get ShowHeader() : boolean {
    return this.dataservice.isShowHeaderFooter ;
  }

}
