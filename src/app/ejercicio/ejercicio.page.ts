import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  
 
  data: any;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
        console.log("CARGANDO")
        console.log(this.data)
      }
    });

   
  }
  ngOnInit() {
  }

  
}
