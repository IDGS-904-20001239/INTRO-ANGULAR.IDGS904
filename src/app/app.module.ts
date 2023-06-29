import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { ievnComponent } from './IEVN/ievn.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './escuela/formularios/operas/operas.module';
import { AlumnosFilterPipe } from './esscuela/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './escuela/calificacion-alum/calificacion-alum.component';
import { AlumnoReactiveComponent } from './escuela/formularios/alumno-reactive/alumno-reactive.component';




@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent,
    AlumnoReactiveComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
