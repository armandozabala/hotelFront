import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'hotels', component: HotelsComponent
  },
  {
    path: 'hotel-detail/:id', component: HotelDetailComponent
   },
  {
    path: 'hotel/:id', component: HotelComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
