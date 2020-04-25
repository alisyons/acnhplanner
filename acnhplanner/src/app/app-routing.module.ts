import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'test', component: HeaderComponent
  }

];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
