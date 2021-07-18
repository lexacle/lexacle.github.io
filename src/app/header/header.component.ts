import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user:any = {}
  public signedin:boolean = false;
  constructor(public authService: AuthService, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(data => {
      if (data) {
        this.user = data;
        this.signedin = true;
      } else {
        this.signedin = false;
      }
    })
  }

}
