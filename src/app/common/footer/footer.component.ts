import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  constructor (private dataservice : DataService){

  }

  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      

  }

  get ShowFooter() : Boolean {
    return this.dataservice.isShowHeaderFooter ;
  }
}
