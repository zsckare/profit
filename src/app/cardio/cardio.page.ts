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
      img:''
    },
    {
      name:'Elevacion de rodillas',
      img:''
    },
    {
      name:'Salto con cuerda',
      img:''
    },
    {
      name:'Burpee',
      img:''
    },
    {
      name:'Escaladas',
      img:''
    },
    {
      name:'Saltos laterales',
      img:''
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
