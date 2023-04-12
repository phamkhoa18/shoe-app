import { Component } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { count } from 'rxjs';
import { Comments } from 'src/app/models/comment.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  issize : Number = 0 ;
  arrayrandom : product[] = [];
  isactive : Boolean = false ;
  oneitem : any = new product ;
  isLoading : Boolean = true ;
  text : String = '' ;
  // tổng số sản phẩm hiện có ;
  items : product[] = [];
  comments : Comments[] = [] ;
  URL_HOST : String = 'http://localhost:3000/'

  constructor (private dataservice : DataService , private route: ActivatedRoute , private router : Router) {}

  ngOnInit(): void {
    const myId = this.route.snapshot.paramMap.get('id');
    console.log(myId);
    this.getOneProduct(myId);
    this.getallcomment();
  }

  async getOneProduct(id : any) {
     this.oneitem = await this.dataservice.getOneProduct(id);
     console.log(this.oneitem);
     this.isLoading = false ;

  }

  async getallcomment() {
    const form = {
      productid : this.route.snapshot.paramMap.get('id')
    };
    (await this.dataservice.post('/util/list_comment' ,form)).subscribe((v : any) => {
        if(v) {
            this.comments = v ;
            console.log(v);

            console.log(this.comments);
        }
    })
  }


  addCart(v : any) {
    if(!v || this.isactive == false) {
        Swal.fire({
          icon: 'error',
          title: 'Vui lòng chọn size giày',
          text: 'Bạn hãy chọn size giày bên dưới !'
        })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: `Sản phẩm ${v.title} đã được thêm vào giỏ hàng!`,
        showConfirmButton: false,
        timer: 1500
      })
      this.dataservice.addcart(v, this.issize);
      this.reset() ;
    }

  }

  tooglesize(size:any) {
    if(size.active == false) {
         this.oneitem.size.forEach((e : any) => {
            e.active = false ;
         })
         size.active = true ;
         this.isactive = size.active ;
         this.issize = size.size_title ;
    }else {
        size.active = false ;
        this.isactive = size.active ;
        this.issize = 0 ;
    }
  }

  reset() {
    this.oneitem.size.forEach((e : any) => {
        if(e.active == true) {
            e.active = false ;
            this.isactive = e.active ;
            this.issize = 0 ;
        }
    })
  }



  async send() {
    if(sessionStorage.getItem('user')){
      const form = {
         author: JSON.parse(sessionStorage.getItem('user') || '{}').name,
         content : this.text ,
         productid : this.route.snapshot.paramMap.get('id')
      };
      console.log(form);

      (await this.dataservice.post('/util/insertcomment' , form)).subscribe((v) => {
          if(v) {
              this.text = '';
              Swal.fire({
                position: 'center',
                icon: 'success',
                text: `Cảm ơn ${form.author} đã bình luận về sản phẩm!`,
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                  this.getOneProduct(this.route.snapshot.paramMap.get('id'));
              })
          }
      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Vui lòng đăng nhập ',
        text: 'Bạn hãy đăng nhập trước khi đánh giá sản phẩm !!!'
      }).then( () => {
          this.router.navigate(['/login']);
      })
    }
  }



}
