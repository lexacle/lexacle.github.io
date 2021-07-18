import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {app: string, icon: string, title: string, client: string, pretty: string, photo: string, description: string }

@Component({
  selector: 'app-sample-projects',
  templateUrl: './sample-projects.component.html',
  styleUrls: ['./sample-projects.component.css']
})
export class SampleProjectsComponent implements OnInit {
  public onlineData:boolean = false;
  public res:any = {}
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private firebaseService: FirebaseService, public toastr: ToastrService, private afs: AngularFirestore) {
    this.fetchSampleProjects();
   }
  ngOnInit(): void {
    this.showSuccess()
  }
  fetchSampleProjects(){
    this.itemsCollection = this.afs.collection<Item>('projects');
    this.items = this.itemsCollection.valueChanges();
    this.onlineData = true;
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',{
      closeButton: true,
      positionClass: 'toast-bottom-left',
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

}
