
import { NgxPermissionsService } from 'ngx-permissions';
import { LoadingService } from '../services/loading.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : String = 'Web shoe';
  isLoading$!: Observable<boolean>;
  constructor(private loadingservice : LoadingService) {}

  ngOnInit(): void {
    this.isLoading$ = this.loadingservice.isLoading$;
  }


}
