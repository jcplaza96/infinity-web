import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SliderIndexComponent } from './components/slider-index/slider-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    NavBarComponent,
    ItemListComponent,
    SliderIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
