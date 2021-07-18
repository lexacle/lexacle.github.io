import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sitemap-generator',
  templateUrl: './sitemap-generator.component.html',
  styleUrls: ['./sitemap-generator.component.css'],
  providers: [HttpService]
})
export class SitemapGeneratorComponent implements OnInit {
  res:any = {}
  sitemapGeneratorForm: FormGroup;
  isSubmitted = false;
  constructor(private httpService: HttpService, public formBuilder: FormBuilder) { 
    this.sitemapGeneratorForm = this.formBuilder.group({
      domain: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {}
  get errorControl() {
  return this.sitemapGeneratorForm.controls;
  }
  async sitemapGenerator(){
      this.isSubmitted = true;
      if (!this.sitemapGeneratorForm.valid) {
        console.log('false')
      } else {
        let domain = this.sitemapGeneratorForm.value.domain;
        await this.httpService.sitemapGenerator(domain).subscribe(data =>{
          this.res = data;
          console.log(this.res)
        });
      }
    }

}
