import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-addregistro',
  templateUrl: './addregistro.page.html',
  styleUrls: ['./addregistro.page.scss'],
})
export class AddregistroPage implements OnInit {
  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  ngOnInit() {
  }

}
