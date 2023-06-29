import { Component } from '@angular/core';
import { IAlumnos } from '../alumnosIr';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle !: string;
  
  alumnosIric:IAlumnos[]=[
    {
    matricula:1234,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    pago:129.42,
    foto:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sandiegouniontribune.com%2Fen-espanol%2Fnoticias%2Fstory%2F2023-06-04%2Fleon-campeon-de-la-liga-de-campeones-concacaf-derrota-al-lafc&psig=AOvVaw2_fRGs7FoyKXNCxzHkKkFN&ust=1686797338455000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDg5_ffwf8CFQAAAAAdAAAAABAE",
    calificacion:3
    },

    {
     matricula:1235,
     nombre:'Yair',
     edad:20,
     correo:'yair@gmail.com',
     pago:129.42,
     foto:"https://es.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150f-150/2023/collections/equipments/21_426bh1d_v1_32.jpg",
     calificacion:6
    },
    {
    matricula:1236,
    nombre:'Jose',
    edad:20,
    correo:'jose@gmail.com',
    pago:129.42,
    foto:"https://dhqlmcogwd1an.cloudfront.net/images/phocagallery/Harley-Davidson/street-bob-2021/01-harley-davidson-street-bob-114-2021-estudio-naranja.jpeg",
    calificacion:8
    }     
          
  ]

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  onCalificaClick(message:string){
    this.alumnoTitle=`${message}` ;
  }
}
