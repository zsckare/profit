import { Component } from '@angular/core';
import { DbService } from './../services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db: DbService,private router: Router) {

    
  }
  hayUsuario: any;
  ngOnInit() {

    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchSongs().subscribe(item => {      
        })
      }
    });     
    
    var getuser = localStorage.getItem('estatura');

    if(getuser){
      this.hayUsuario = 1;
    }
  }


  goto(){
    if(this.hayUsuario == 1){
      this.router.navigate(['entrenamientos'])
    }else{
      this.router.navigate(['registro'])
    }
  }
  

}
