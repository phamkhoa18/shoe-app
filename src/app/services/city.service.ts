import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPAService } from './baselPA.service';
@Injectable({
  providedIn: 'root'
})
export class CityService extends IPAService{


  constructor(http:HttpClient) {
      super(http);
   }

  getListProvince() {
    return this.get('province/');
  }

  getListDistricts(id_province : Number) {
    return this.get(`province/district/${id_province}`);
  }

  getListWard(id_district : Number) {
    return this.get(`province/ward/${id_district}`);
  }

}
