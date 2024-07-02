import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RepartidorModule } from './componentes/repartidor/repartidor.module';
import { AltaRepartidorComponent } from './componentes/repartidor/alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from './componentes/repartidor/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidoresComponent } from './componentes/repartidor/listado-repartidores/listado-repartidores.component';
import { DetallePaisComponent } from './componentes/paises/detalle-pais/detalle-pais.component';
import { HeladosModule } from './componentes/helados/helados.module';
import { PaisesModule } from './componentes/paises/paises.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidoComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"primerparcial-a7f77","appId":"1:561923166655:web:5dc12704d6b0750215d10a","storageBucket":"primerparcial-a7f77.appspot.com","apiKey":"AIzaSyCIMeODoenRR5awyNFb6NsGOitHi4O400g","authDomain":"primerparcial-a7f77.firebaseapp.com","messagingSenderId":"561923166655"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
