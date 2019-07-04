import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpsClient:HttpClient) { }

  public getNewsletters(text:string){
    return this.httpsClient.post("https://gpcnew.com/larademy/laravel/magazine",text);
  }
}
