import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//Login Form
import { LoginComponent } from './login/login.component';
//Tips 
import { HomeComponent } from './home/home.component';
//Company News
import { CompanynewsComponent } from './companynews/companynews.component';
import { AddcompanynewsComponent } from './addcompanynews/addcompanynews.component';
//Newsletters
import { NewslettersComponent } from './newsletters/newsletters.component';
import { AddnewslettersComponent } from './addnewsletters/addnewsletters.component';
//Secctor News
import { SectornewsComponent } from './sectornews/sectornews.component';
import { AddsectornewsComponent } from './addsectornews/addsectornews.component';
//Training
import { TrainingComponent } from './training/training.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
//HSE
import { HseComponent } from './hse/hse.component';
import { AddhseComponent } from './addhse/addhse.component';
//company news images
import { AddcompanynewsimagesComponent } from './addcompanynewsimages/addcompanynewsimages.component';
import { MenuComponent } from './menu/menu.component';

// import this module for navigation
import { RouterModule, Routes } from '@angular/router';

//fontawsome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddrecordComponent } from './addrecord/addrecord.component';

const appRoutes: Routes = [
  { path: 'companynews', component: CompanynewsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'sectornews', component: SectornewsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'hse', component: HseComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CompanynewsComponent,
    AddcompanynewsComponent,
    NewslettersComponent,
    AddnewslettersComponent,
    SectornewsComponent,
    AddsectornewsComponent,
    TrainingComponent,
    AddtrainingComponent,
    HseComponent,
    AddhseComponent,
    AddcompanynewsimagesComponent,
    MenuComponent,
    AddrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only)
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
