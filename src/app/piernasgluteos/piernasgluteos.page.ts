import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-piernasgluteos',
  templateUrl: './piernasgluteos.page.html',
  styleUrls: ['./piernasgluteos.page.scss'],
})
export class PiernasgluteosPage implements OnInit {

  
  ejercicios = [
    {
      name:'Desplante con impulso',
      img:'../../assets/pierna/desplante con inpulso y peso.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Desplante simple',
      img:'../../assets/pierna/dezplante simple.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Kickback',
      img:'../../assets/pierna/kickback.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Salto de rana',
      img:'../../assets/pierna/saltos de rana completos.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Sentadilla simple',
      img:'../../assets/pierna/sentadilla simple.gif"',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Sentadilla sumo',
      img:'../../assets/pierna/sentadilla sumo.gif',
      descripcion:'3 Repeticiones 3 Series '
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openEjecicio(index) {
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.ejercicios[index])
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['ejercicio'], navigationExtras);
  }
}
