import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { RecrutementsComponent } from './recrutements/recrutements.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProposComponent } from './propos/propos.component';
import { WebTvComponent } from './web-tv/web-tv.component';
import { WebRadioComponent } from './web-radio/web-radio.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { ImmoComponent } from './immo/immo.component';
import { AnnuairesComponent } from './annuaires/annuaires.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'interviews',
    component: InterviewsComponent
  },
  {
    path: 'podcasts',
    component: PodcastsComponent
  },
  {
    path: 'recrutements',
    component: RecrutementsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'propos',
    component: ProposComponent
  },
  {
    path: 'web-tv',
    component: WebTvComponent
  },
  {
    path: 'web-radio',
    component: WebRadioComponent
  },
  {
    path: "jackpot",
    component: JackpotComponent
  },
  {
    path: 'immo',
    component: ImmoComponent
  },
  {
    path: 'annuaires',
    component: AnnuairesComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
