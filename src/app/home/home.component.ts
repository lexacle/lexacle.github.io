import { HttpService } from './../services/http.service';
import { Title, Meta} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbar:any = '';
  constructor(public appService: AppService, private httpService: HttpService, private title: Title, private wowService: NgwWowService) {
    this.wowService.init({
            offset: 100,
            mobile: true
        });
   }

  ngOnInit(): void {}
  public scrollInit(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth', block: 'end'});
  }  
  public scrollUp(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
