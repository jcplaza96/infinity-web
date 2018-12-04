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
import { PlantillaContenidoComponent } from './components/plantilla-contenido/plantilla-contenido.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NuestrasInstalacionesComponent } from './components/nuestras-instalaciones/nuestras-instalaciones.component';

const routes: Routes = [
  { path: 'contenido', component: PlantillaContenidoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'nuestras_instalaciones', component: NuestrasInstalacionesComponent },
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
    OfertasSliderComponent,
    PlantillaContenidoComponent,
    ContactoComponent,
    AlquilerComponent,
    TiendaComponent,
    NoticiasComponent,
    NuestrasInstalacionesComponent
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
