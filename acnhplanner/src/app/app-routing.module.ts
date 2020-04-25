import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [

  {
    path: '**', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }

];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
