import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DomainsAndHostingComponent } from './domains-and-hosting/domains-and-hosting.component';
import { WebsiteAnalyzerComponent } from './website-analyzer/website-analyzer.component';
import { SitemapGeneratorComponent } from './sitemap-generator/sitemap-generator.component';
import { DeveloperTeamComponent } from './about/developer-team/developer-team.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { TermsOfUseComponent } from './about/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './about/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './about/refund-policy/refund-policy.component';
import { WebsiteMaintenanceComponent } from './website-maintenance/website-maintenance.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { SearchEngineOptimizationComponent } from './search-engine-optimization/search-engine-optimization.component';
import { SampleProjectsComponent } from './sample-projects/sample-projects.component';
import { SampleProjectDetailsComponent } from './sample-project-details/sample-project-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'domains-and-hosting', component: DomainsAndHostingComponent },
  { path: 'website-analyzer', component: WebsiteAnalyzerComponent },
  { path: 'sitemap-generator', component: SitemapGeneratorComponent },
  { path: 'about/developer-team', component: DeveloperTeamComponent},
  { path: 'about/company-profile', component: CompanyProfileComponent},
  { path: 'about/terms-of-use', component: TermsOfUseComponent},
  { path: 'about/privacy-policy', component: PrivacyPolicyComponent},
  { path: 'about/refund-policy', component: RefundPolicyComponent},
  { path: 'website-development', component: WebsiteDevelopmentComponent},
  { path: 'website-maintenance', component: WebsiteMaintenanceComponent},
  { path: 'mobile-app-development', component: MobileAppDevelopmentComponent},
  { path: 'search-engine-optimization', component: SearchEngineOptimizationComponent},
  { path: 'sample-projects', component: SampleProjectsComponent},
  { path: 'sample-projects/:projectId', component: SampleProjectDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
