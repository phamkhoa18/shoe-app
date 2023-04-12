import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { product } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @ViewChild('cart', { static: true }) cartRef!: ElementRef;
  cart : Cart[] = [] ;

  constructor(private dataservice : DataService , private router : Router) {}

  ngOnInit(): void {
    this.getcart() ;
  }

  // more quantity
  plusquantity(index : any) {
    this.cart[index].quantity = parseInt(this.cart[index].quantity.toString()) + 1  ;
  }
  // minus quantity
  minusquantity(index : any) {
    if( parseInt(this.cart[index].quantity.toString()) <= 1){
        // if product is less than 1 then delete
        this.removeitem(index);
    } else {
        this.cart[index].quantity = parseInt(this.cart[index].quantity.toString()) - 1  ;
    }
  }

  getcart() {
    this.cart = this.dataservice.getallcart() ;
  }

  buy() {
    if(sessionStorage.getItem('user')){
      this.router.navigate(['/checkout']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Vui lòng đăng nhập trước khi thanh toán',
        text: 'Bạn vui lòng đăng nhập'
      }).then(() => {
          this.router.navigate(['/login']).then(() => {
            this.closeCart();
          })
      })
    }
  }

  closeCart() {
    const cart = this.cartRef.nativeElement as HTMLElement;
    cart.classList.remove('uk-active');
  }

  // remove itemcart
  removeitem(index : any) {
      Swal.fire({
        title: 'Bạn chắc chắn muốn xóa sản phẩm này chứ ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Xóa thành công!',
            'Your file has been deleted.',
            'success'
          )
          this.cart.splice(index,1) ;
        }
      })
  }
  // computed thì thêm chữ get
  // còn không thêm get thì là methods
  get totalcart() : Number {
    var S = 0

    this.cart.forEach((e : any) => {
      S = S + e.price*e.quantity ;
    })
    return S ;
  }

  // biến đổi kiểu dữ liệu
  Number(price : Number , quantity : Number) : any {
    return  Number(price) * Number(quantity) ;
  }









}
