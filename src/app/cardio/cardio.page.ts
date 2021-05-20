import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {

  ejercicios = [
    {
      name:'Salto de tijera',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Elevacion de rodillas',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Salto con cuerda',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Burpee',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Escaladas',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Saltos laterales',
      img:'../../assets/cardio/saltotijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openEjecicio(index) {
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.ejercicios[0])
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['ejercicio'], navigationExtras);
  }
}
