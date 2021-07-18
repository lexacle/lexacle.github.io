import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from './../services/firebase.service';

@Component({
  selector: 'app-domains-and-hosting',
  templateUrl: './domains-and-hosting.component.html',
  styleUrls: ['./domains-and-hosting.component.css']
})
export class DomainsAndHostingComponent implements OnInit {
  res:any;
  isSubmitted = false;
  domainsForm: FormGroup;
  isLoggedin:boolean = false;
  user:any = {}
  constructor(private httpService: HttpService, public formBuilder: FormBuilder, public authService: AuthService, public auth: AngularFireAuth, private fbase: FirebaseService, private afs: AngularFirestore) { 
    this.domainsForm = this.formBuilder.group({
      domain: ['', [Validators.required]],
      extension: ['', [Validators.required]],
    })
  }
  get errorControl() {
  return this.domainsForm.controls;
  }

  async domainRegistry(){
      this.isSubmitted = true;
      if (!this.domainsForm.valid) {
        console.log('false')
      } else {
        let domain = this.domainsForm.value.domain; 
        let extension = this.domainsForm.value.extension;        
        await this.httpService.registerDomain(domain, extension).subscribe(data =>{
          this.res = data;
          console.log(this.res)
        });
      }
    }

  ngOnInit(): void {}

}
