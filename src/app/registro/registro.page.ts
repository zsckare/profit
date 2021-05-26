import { Component, OnInit } from '@angular/core';
import { DbService } from './../services/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: '';
  genero: '';
  estatura: 0;
  peso: 0;
  constructor(private db: DbService,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  getMasaMuscular(){


    return '';
  }

  registrarse(){
    this.db.registrarUsuario(this.nombre,this.genero,this.estatura,this.peso).then((res)=>{
      localStorage.setItem('estatura',''+this.estatura)
      this.router.navigate(['entrenamientos'])
    })
  }
}
