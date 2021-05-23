import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hombrosespalda',
  templateUrl: './hombrosespalda.page.html',
  styleUrls: ['./hombrosespalda.page.scss'],
})
export class HombrosespaldaPage implements OnInit {

 
  ejercicios = [
    {
      name:'Face bull',
      img:'../../assets/espalda/face bull.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento de cadera',
      img:'../../assets/espalda/levantamiento de cadera.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento laterales',
      img:'../../assets/espalda/levantamientos laterales.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Superman',
      img:'../../assets/espalda/superman.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Lat pulldown',
      img:'../../assets/espalda/lat pulldown.gif"',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Wall angels',
      img:'../../assets/espalda/wall angels.gif',
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
