import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_KEY = 'AIzaSyCgCyVddmZrJkFdm3tt1qHpyGnPicLXco4';
  private API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  private APP_URL = 'https://localhost/lexacle/api/';
  private REG_URL = 'https://api.sandbox.namecheap.com/xml.response';
  private REG_KEY = 'c5c162b999784cad98d82a126ffee9e2';
  private REG_USER = 'Lexacle';
  private SERVER_URI = 'http://localhost:4020';
  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule) { }
  analyzeSampleWebsite(){
    return this.http.post(`${this.SERVER_URI}/api/grader/sample`,{app: 'lexacle'});
  }
  analyzeWebsite(domain) {
    return this.http.jsonp(`${this.API_URL}?url=${domain}&key=${this.API_KEY}`, 'callback');
  }
  registerDomain(domain, extension) {
    return this.http.get(`${this.REG_URL}?ApiUser=${this.REG_USER}&ApiKey=${this.REG_KEY}&UserName=${this.REG_USER}&Command=namecheap.domains.check&ClientIp=192.168.1.109&DomainName=${domain+extension}`);
  }
  sitemapGenerator(domain) {
    return this.http.jsonp(`${this.API_URL}?url=${domain}&key=${this.API_KEY}`, 'callback');
  }
  contactForm(userdata){
    return this.http.post(`${this.APP_URL}contact`,userdata)
  }
}
