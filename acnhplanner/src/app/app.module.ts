import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
    MatButtonModule
  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
