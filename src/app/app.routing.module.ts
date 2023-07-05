import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { IricComponent } from './escuela/iric/iric.component';
import { AlumnoReactiveComponent } from './escuela/formularios/alumno-reactive/alumno-reactive.component';
import { OperaBasComponent } from './escuela/formularios/opera-bas/opera-bas.component';

const routes: Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'IricComponent',component:IricComponent}
    {path: 'OperasBasComponent',component:OperaBasComponent}
    {path: 'AlumnosReactiveComponent',component:AlumnoReactiveComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}