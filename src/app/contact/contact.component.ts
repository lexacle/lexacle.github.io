import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { AppService } from './../services/app.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseService } from './../services/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [HttpService]
})
export class ContactComponent implements OnInit {
  user:any = {};
  signedin:boolean = false;
  contactForm: FormGroup;
  isSubmitted = false;
  constructor(public authService: AuthService, public auth: AngularFireAuth, private appService: AppService, private httpService: HttpService, public formBuilder: FormBuilder, private fbase: FirebaseService,) { 
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }
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
  get errorControl() {
  return this.contactForm.controls;
  }
  public sendMessage(){
  this.isSubmitted = true;
    if (!this.contactForm.valid) {
      console.log('Error validating contact form')
    } else {
      let userdata = this.contactForm.value;
      //this.appService.contactForm(userdata)
      this.fbase.NewContact(userdata)
    }
  }
}