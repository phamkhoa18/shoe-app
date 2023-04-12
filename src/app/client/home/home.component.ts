import { Component ,OnInit} from '@angular/core';
import { product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    items  : any = [];
    isLoading : Boolean = true ;
      constructor(private dataservice : DataService , private loadingservice : LoadingService ){

      }


      // hàm hiển thị tất cả sản phẩm
      async getAllFormService() {
       (await this.dataservice.getAll()).subscribe((v : any) => {
          this.items = v ;
          this.isLoading = false ;
       })
      }
      ngOnInit(): void {
          this.getAllFormService();

      }




}
