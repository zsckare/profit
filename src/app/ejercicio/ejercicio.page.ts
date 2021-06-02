import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  
 
  data: any;
  tiempo:number;
  repeticiones:string;
  series: string;
  restante: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("CARGANDO")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = JSON.parse(this.router.getCurrentNavigation().extras.state.special);
        
        console.log(this.data)
        console.log("CARGADO")
        this.setRepeticionesYSeries()

      }
    });

   
  }
  ngOnInit() {
  }

  setRepeticionesYSeries(){
    this.repeticiones = ""+Math.ceil(Math.random() * 10)
    this.series = Math.round(Math.random() * 10)+""
    this.tiempo = Math.floor(Math.random() * (300 - 60 + 1)) + 60 ;
  }

  startTimer(){
    let counter = this.tiempo;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    this.restante = counter+""
    if (counter < 0 ) {
      clearInterval(interval);
      console.log('Ding!');
    }
  }, 1000);
  }
}
