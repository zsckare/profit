import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-brazos',
  templateUrl: './brazos.page.html',
  styleUrls: ['./brazos.page.scss'],
})
export class BrazosPage implements OnInit {

  ejercicios = [
    {
      name:'Levantamiento Trasero',
      img:'../../assets/brazos/back lifting.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento frontal',
      img:'../../assets/brazos/front lifting.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Laterales Triceps',
      img:'../../assets/brazos/laterales para triceps.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento de mancuernas',
      img:'../../assets/brazos/levantamiento de mancuernas.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento completo',
      img:'../../assets/brazos/levantamiento completo.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Flexiones con movimeinto',
      img:'../../assets/brazos/move pushups.gif',
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
