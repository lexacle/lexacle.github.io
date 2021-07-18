import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HttpClientJsonpModule } from '@angular/common/http';
import { CountUpModule } from 'ngx-countup';
import { NgwWowModule } from 'ngx-wow';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DomainsAndHostingComponent } from './domains-and-hosting/domains-and-hosting.component';
import { WebsiteAnalyzerComponent } from './website-analyzer/website-analyzer.component';
import { DeveloperTeamComponent } from './about/developer-team/developer-team.component';
import { PrivacyPolicyComponent } from './about/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './about/terms-of-use/terms-of-use.component';
import { RefundPolicyComponent } from './about/refund-policy/refund-policy.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebsiteMaintenanceComponent } from './website-maintenance/website-maintenance.component';
import { SearchEngineOptimizationComponent } from './search-engine-optimization/search-engine-optimization.component';
import { SitemapGeneratorComponent } from './sitemap-generator/sitemap-generator.component';
import { SampleProjectsComponent } from './sample-projects/sample-projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SampleProjectDetailsComponent } from './sample-project-details/sample-project-details.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DomainsAndHostingComponent,
    WebsiteAnalyzerComponent,
    DeveloperTeamComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    RefundPolicyComponent,
    CompanyProfileComponent,
    WebsiteDevelopmentComponent,
    MobileAppDevelopmentComponent,
    WebsiteMaintenanceComponent,
    SearchEngineOptimizationComponent,
    SitemapGeneratorComponent,
    SampleProjectsComponent,
    FooterComponent,
    HeaderComponent,
    SampleProjectDetailsComponent,
    ScrolltopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    CountUpModule,
    NgwWowModule,
    ReactiveFormsModule,   
    ToastrModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [HttpService, AuthService, {
    provide: SETTINGS,
    useValue: environment.emulator ? {
      host: 'localhost:8080',
      ssl: false,
      merge: true
    } : undefined
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
