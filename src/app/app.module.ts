import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CustomerReviewsComponent } from './Components/customer-reviews/customer-reviews.component';
import { AutofocusDirective } from './Directives/auto-focus.directive';
import { DaysAgoPipe } from './Pipes/days-ago.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LettersValidationDirective } from './Directives/letters-validation.directive';
import { HttpClientModule } from '@angular/common/http';
import { AddReviewComponent } from './Components/add-review/add-review.component';
import { ThreeDotsPipe } from './Pipes/three-dots.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyServicesComponent,
    MoreDetailsComponent,
    ContactUsComponent,
    CustomerReviewsComponent,
    AutofocusDirective,
    DaysAgoPipe,
    LettersValidationDirective,
    AddReviewComponent,
    ThreeDotsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule                      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';

// import {AppComponent} from './app.component';
// import {AutoFocusDirective} from './auto-focus.directive';

// @NgModule({

//     declarations: [
//         AppComponent,
//         AutoFocusDirective
//     ],
//     imports: [
//         BrowserModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]

// })
// export class AppModule {
// }