import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  startLoading() {
    setTimeout(() => {
      this.isLoadingSubject.next(true);
    });
  }

  endLoading() {
    setTimeout(() => {
      this.isLoadingSubject.next(false);
    });
  }
}
