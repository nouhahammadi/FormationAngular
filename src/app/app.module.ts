import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    UiModule,
    LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
