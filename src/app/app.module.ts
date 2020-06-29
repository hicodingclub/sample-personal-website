import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { InterestsGardeningComponent } from './interests/interests-gardening/interests-gardening.component';
import { InterestsNatureComponent } from './interests/interests-nature/interests-nature.component';
import { InterestsAnimalsComponent } from './interests/interests-animals/interests-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    InterestsComponent,
    ContactComponent,
    InterestsGardeningComponent,
    InterestsNatureComponent,
    InterestsAnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
