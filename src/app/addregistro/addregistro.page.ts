import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DbService } from './../services/db.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addregistro',
  templateUrl: './addregistro.page.html',
  styleUrls: ['./addregistro.page.scss'],
})
export class AddregistroPage implements OnInit {
  
  peso:''
  masa_muscular: ''
  foto: any;

  constructor(private camera: Camera,private db: DbService,public navCtrl: NavController) { }

  addPhotoToGallery() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
  }

  guardarProgreso(){
   this.db.addProgreso(this.peso,this.masa_muscular,this.foto).then(
     (res)=>{
       console.log(res)
       this.navCtrl.pop()   
     }

   )
  }

  
}
