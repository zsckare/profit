import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

 
  ejercicios = [
    {
      name:'Tijeras',
      img:'../../assets/abs/tijeras.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:' Bicicleta con cruce',
      img:'../../assets/abs/bicicleta con cruze.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Lagartijas con salto',
      img:'../../assets/abs/lagartijas con salto.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Laterales',
      img:'../../assets/abs/laterales.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento por tiempos',
      img:'../../assets/abs/levantamiento por tiempos.gif',
      descripcion:'3 Repeticiones 3 Series '
    },
    {
      name:'Levantamiento sincronizados',
      img:'../../assets/abs/levantamientos sincronizados.gif',
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
