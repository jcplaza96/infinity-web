import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderIndexComponent } from './components/slider-index/slider-index.component';
import { OfertasSliderComponent } from './components/ofertas-slider/ofertas-slider.component';

const routes: Routes = [
  { path: 'nosotros', component: ItemListComponent },
  { path: '', component: SliderIndexComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    NavBarComponent,
    ItemListComponent,
    FooterComponent,
    SliderIndexComponent,
    OfertasSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
