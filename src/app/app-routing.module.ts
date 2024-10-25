import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PlansPricingComponent } from './plans-pricing/plans-pricing.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', redirectTo: '/home' , pathMatch: 'full'}, // redirect to home
  {path:'home', component: HomeComponent},
  {path:'solutions', component: SolutionsComponent},
  {path:'plans&pricing', component: PlansPricingComponent},
  {path:'why-us', component: WhyUsComponent},
  {path:'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
