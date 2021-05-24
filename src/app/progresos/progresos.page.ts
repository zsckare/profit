import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-progresos',
  templateUrl: './progresos.page.html',
  styleUrls: ['./progresos.page.scss'],
})
export class ProgresosPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = []
  info: any
  constructor(
    private db: DbService,
    private toast: ToastController,
    private router: Router,
    public _DomSanitizer: DomSanitizer,
  ) { }
  ngOnInit() {

    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchSongs().subscribe(item => {
          this.Data = item
          
          this.info = JSON.parse(JSON.stringify(this.Data))
          console.log(this.info)
        })
      }
    });
  
    
  }

}
