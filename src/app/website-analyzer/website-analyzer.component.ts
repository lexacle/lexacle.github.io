import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-website-analyzer',
  templateUrl: './website-analyzer.component.html',
  styleUrls: ['./website-analyzer.component.css'],
  providers: [HttpService]
})
export class WebsiteAnalyzerComponent implements OnInit {
  res:any = {}
  analyzerForm: FormGroup;
  isSubmitted = false;
  isLoggedin:boolean = false;
  user:any = {};
  showModal:boolean = false;
  closeModal:string;
  wadomain:string;
  constructor(private httpService: HttpService, public formBuilder: FormBuilder, public authService: AuthService, public auth: AngularFireAuth, private fbase: FirebaseService, private afs: AngularFirestore, private modalService: NgbModal) { 
    this.analyzerForm = this.formBuilder.group({
      domain: ['', [Validators.required]],
    })
  }
  triggerModal(content) {
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop : 'static', keyboard : false}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.showModal = true;
    this.auth.authState.subscribe(data => {
      if (data) {
        this.isLoggedin = true;
        this.user = data;
        console.log(data)
      } else {
        this.isLoggedin = false;
      }
    })
    this.websiteSampleAnalyzer();
  }
  get errorControl() {
  return this.analyzerForm.controls;
  }
  async websiteAnalyzer(){
      this.isSubmitted = true;
      if (!this.analyzerForm.valid) {
        console.log('false')
      } else {
        let domain = this.analyzerForm.value.domain;        
        await this.httpService.analyzeWebsite(domain).subscribe(data =>{
          this.res = data;
          this.wadomain = domain;
          console.log(this.res)
          this.fbase.NewWebsiteAnalyzer(this.user, this.res)
          //triggerModal('#modalData')
        });
      }
    }   
    async websiteSampleAnalyzer(){      
        await this.httpService.analyzeSampleWebsite().subscribe(data =>{
          this.res = data;
          this.wadomain = this.res.id;
          console.log(this.res)
        });
    }  

}
