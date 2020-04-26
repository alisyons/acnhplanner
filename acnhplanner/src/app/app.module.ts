import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { WishlistComponent } from './wishlist/wishlist.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy, Location} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import {config} from 'rxjs';

const firebaseConfig = {
  apiKey: 'AIzaSyBhlC_2ypcOw1_dSUTgrF_wlc92AXsAk90',
  authDomain: 'acnhplanner-db.firebaseapp.com',
  databaseURL: 'https://acnhplanner-db.firebaseio.com',
  projectId: 'acnhplanner-db',
  storageBucket: 'acnhplanner-db.appspot.com',
  messagingSenderId: '477909959516',
  appId: '1:477909959516:web:961e204c0fc43b7dc87799',
  measurementId: 'G-NN28BQ0GHY'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WishlistComponent,
    FooterComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private db: AngularFirestore) {
    const things = db.collection('test').valueChanges();
    things.subscribe(console.log);
  }
}


