import { Projects } from './data/projects';
import { Injectable } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Analyzer } from "../services/models/analyzer";
import { Contact } from "../services/models/contact";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import firebase from "firebase/app"
import "firebase/storage"
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  projectsRef: AngularFireList<any>;
  projectRef: AngularFireObject<any>;
  constructor(private httpService: HttpService, public afs: AngularFirestore, private db: AngularFireDatabase) { }
  NewWebsiteAnalyzer(user, data) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`analyzer/${user.uid}`);
    const AnalyzerData: Analyzer = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      website: data.lighthouseResult.finalUrl,
      version: data.lighthouseResult.lighthouseVersion,
      created: data.analysisUTCTimestamp
    }
    var jsonResults = JSON.stringify(data);
    var blobResults = new Blob([jsonResults], {type: "application/json"});
    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(`/lexacle/website-analyzer/${user.uid}.json`)
    fileRef.put(blobResults).then(function(snapshot) {
     return userRef.set(AnalyzerData, {
      merge: true
    })
    });
  }
  NewContact(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`contact/${user.email}`);
    const ContactData: Contact = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      subject: user.subject,
      message: user.message
    }
    return userRef.set(ContactData, {
      merge: false
    })
  }

}

