import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './common/app.component';
import { HomeComponent } from './client/home/home.component';
import { ProductComponent } from './client/product/product.component';
import { DataService } from './services/data.service';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { CartComponent } from './client/cart/cart.component';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterByTrademarkPipe } from './pipes/filter-by-trademark.pipe';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FilterBySearchPipe } from './pipes/filter-by-search.pipe';
import { CssLoadingComponent } from './client/css-loading/css-loading.component';
import { IntroduceComponent } from './client/introduce/introduce.component';
import { BlogComponent } from './client/blog/blog.component';
import { ContactComponent } from './client/contact/contact.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { LoadingService } from './services/loading.service';
import { RegisterComponent } from './client/account/register/register.component';
import { LoginComponent } from './client/account/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent ,
    ProductDetailComponent,
    CartComponent ,
    CurrencyFormatPipe,
    FilterByTrademarkPipe,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    FilterBySearchPipe,
    FilterBySearchPipe,
    CssLoadingComponent,
    IntroduceComponent,
    BlogComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),

  ],
  providers: [
    DataService ,
    LoadingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
