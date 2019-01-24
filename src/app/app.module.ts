import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

/**
 * BBDD Imports
 */

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from './services/firebase.service';

/**
 * Custom components import
 */

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
import { JavierComponent } from './components/juegos/javier/javier.component';
import { FernandoComponent } from './components/juegos/fernando/fernando.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { JuanCarlosComponent } from './components/juegos/juan-carlos/juan-carlos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { AngelComponent } from './components/juegos/angel/angel.component';
import { RecursosListComponent } from './components/recursos/recursos-list/recursos-list.component';
import { RecursosItemComponent } from './components/recursos/recursos-item/recursos-item.component';
import { FirebaseStorageService } from './services/storage/firebase-storage.service';
import { FilesComponent } from './components/firebase/files/files.component';
import { LoginSignComponent } from './components/login-sign/login-sign.component';
import { FuncionesGlobalesService } from './services/funciones-globales.service';







const routes: Routes = [
  { path: 'contenido', component: PlantillaContenidoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'terminos_legales', component: RecursosComponent},
  { path: 'nuestras_instalaciones', component: NuestrasInstalacionesComponent },
  { path: 'javier', component: JavierComponent },
  { path: 'fgame', component: FernandoComponent },
  { path: 'jcgame', component: JuanCarlosComponent },
  { path: 'agame', component: AngelComponent },
  { path: 'login', component: LoginSignComponent },
  { path: 'admin', component: FirebaseComponent },
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
    NuestrasInstalacionesComponent,
    JavierComponent,
    FernandoComponent,
    FirebaseComponent,
    JuanCarlosComponent,
    CursosComponent,
    RecursosComponent,
    AngelComponent,
    RecursosListComponent,
    RecursosItemComponent,
    FilesComponent,
    LoginSignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ FirebaseService,FirebaseStorageService,FuncionesGlobalesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
