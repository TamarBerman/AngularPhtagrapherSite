import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './Components/add-review/add-review.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CustomerReviewsComponent } from './Components/customer-reviews/customer-reviews.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'my-services', component: MyServicesComponent, children: [
      {path: 'more-details/:title', component: MoreDetailsComponent}
    ]
  },
  {path:'contact-us',component:ContactUsComponent},
  {path:'customer-reviews',component:CustomerReviewsComponent,},
  {path:'add-review',component:AddReviewComponent,}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
