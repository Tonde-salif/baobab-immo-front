import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { RecrutementsComponent } from './recrutements/recrutements.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProposComponent } from './propos/propos.component';
import { WebTvComponent } from './web-tv/web-tv.component';
import { WebRadioComponent } from './web-radio/web-radio.component';



@NgModule({
  declarations: [
    HomeComponent,
    InterviewsComponent,
    PodcastsComponent,
    RecrutementsComponent,
    ContactsComponent,
    ProposComponent,
    WebTvComponent,
    WebRadioComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
