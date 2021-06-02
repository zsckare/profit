import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-progresos',
  templateUrl: './progresos.page.html',
  styleUrls: ['./progresos.page.scss'],
})
export class ProgresosPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = []
  info: any
  estatura: string;
  constructor(
    private db: DbService,
    private toast: ToastController,
    private router: Router,
    public _DomSanitizer: DomSanitizer,
    public alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.estatura = localStorage.getItem('estatura')
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchSongs().subscribe(item => {
          this.Data = item          
          this.info = JSON.parse(JSON.stringify(this.Data))          
        })
      }
    });      
  }

  getMasaMuscular(peso){
    var res = peso / parseInt(this.estatura) * 2
    return (""+res)
  }

  goToEdit(index){
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.Data[index])
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['editprogreso'], navigationExtras);
  }

  deleteProgreso(id){
    this.db.deleteProgreso(id).then((res)=>{
      
    })
  }


  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      
      message: '¿Eliminar progreso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteProgreso(id)
          }
        }
      ]
    });

    await alert.present();
  }
}
