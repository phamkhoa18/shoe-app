import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


export class IPAService {

  HOST_API = "https://vapi.vnappmob.com/api/";
  header: HttpHeaders = new HttpHeaders()


  constructor(private http: HttpClient) {
    this.header.set('Content-Type', 'application/json');
  }

  get(path: string) {
    return new Promise((thanhcong, thatbai) => {
      try {
        this.http.get(this.HOST_API + path, { headers: this.header }).subscribe(
          (data) => {
            thanhcong(data);
          }
        )
      } catch (error) {
        thatbai(error)
      }
    })
  }

  post(path: string, body: any) {
    let urlAPI = this.HOST_API + path;
    return new Promise((reslove, reject) => {
      this.http
        .post(urlAPI, body, { headers: this.header })
        .pipe(catchError((err) => {
          reject(err);
          return throwError(() => err);
        }))
        .subscribe((res) => {
          reslove(res);
        })
    })
  }



}
