import { Component, OnInit } from '@angular/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navbar:any = '';
  googleyolo:any;
  title = 'Lexacle Technologies Ltd';
  constructor() { }

  ngOnInit(): void {
  this.navbarScroll()
  /*
  const hintPromise = this.googleyolo.hint({
    supportedAuthMethods: [
     "https://accounts.google.com"
    ],
    supportedIdTokenProviders: [{
      uri: "https://accounts.google.com",
      clientId: "YOUR_GOOGLE_CLIENT_ID"
    }],
    context: "signUp"
  }).then((credential) => {
  }, (error)=> {
    console.log("Error occurred: ",error.type);
  });
  */
  }
  public navbarScroll(){
    if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $(".header_area").addClass("navbar_fixed").removeClass('fadeInUp').addClass('fadeNav');
                    $('.scroll-down').fadeOut();
                    $('.totop').addClass('totop-is-visible').removeClass('totop-is-visible totop-fade-out');
                } else {
                    $(".header_area").removeClass("navbar_fixed").removeClass('fadeNav').addClass('fadeInUp');
                    $('.scroll-down').fadeIn();
                    $('.totop').addClass('totop-fade-out');
                }
            });
        };
  }
}
