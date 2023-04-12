import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ProductComponent } from './client/product/product.component';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { CheckoutGuard } from './guard/checkout.guard';
import { DeloycheckoutGuard } from './guard/deloycheckout.guard';
import { IntroduceComponent } from './client/introduce/introduce.component';
import { BlogComponent } from './client/blog/blog.component';
import { ContactComponent } from './client/contact/contact.component';
import { RegisterComponent } from './client/account/register/register.component';
import { LoginComponent } from './client/account/login/login.component';




const routes: Routes = [
  {path : 'home' , component : HomeComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'introduce' , component : IntroduceComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'blog' , component : BlogComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'contact' , component : ContactComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'product' , component : ProductComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'register' , component : RegisterComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'login' , component : LoginComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'product/:id' , component : ProductDetailComponent , canActivate : [DeloycheckoutGuard]},
  {path : 'checkout' , component : CheckoutComponent , canActivate : [CheckoutGuard] },
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
