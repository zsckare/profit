import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DbService } from './../services/db.service';
import {Progreso} from '../services/progress.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editprogreso',
  templateUrl: './editprogreso.page.html',
  styleUrls: ['./editprogreso.page.scss'],
})
export class EditprogresoPage implements OnInit {
  peso:''
  masa_muscular: string;
  foto: string;
  progreso: Progreso ;
  data: any;
  id:0;
  altura:string;
  constructor(private camera: Camera,private db: DbService,public navCtrl: NavController,private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = JSON.parse(this.router.getCurrentNavigation().extras.state.special);
        
        console.log(this.data)
        this.peso = this.data.peso
        this.foto =  this.data.foto
        this.id = this.data.id
        
        console.log("CARGADO")
        console.log(this.data)
      }
    });
  }

  addPhotoToGallery() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = ""+'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
    this.altura = localStorage.getItem("estatura")
    this.getMasaMuscular()
  }
  getMasaMuscular(){
    var res = parseInt(this.peso) / parseInt(this.altura) * parseInt(this.altura)
    this.masa_muscular = ""+res
  }

  guardarProgreso(){
    console.log(this.progreso)
   this.db.updateProgreso(this.id,this.foto,this.peso).then(
     (res)=>{
       console.log(res)
       this.navCtrl.pop()   
     }

   )
  }

}
