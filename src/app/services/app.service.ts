import { Injectable } from '@angular/core';
import { HttpService } from './../services/http.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  lt_response:any = {}
  constructor(private httpService: HttpService) { }
  public scrollInit(el: HTMLElement){
    el.scrollIntoView();
  }
  public contactForm(userdata){
    this.httpService.contactForm(userdata).subscribe(response =>{
      this.lt_response = response;
      if (this.lt_response.status === 1) {
        console.log('success')
      } else {
        console.log('error')
      }
    })
  }
}
