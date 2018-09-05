import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FloorPage } from '../floor/floor';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrData=[];

  constructor(public navCtrl: NavController,private db : AngularFireDatabase,public navParams : NavParams) {
      this.db.list("/buildings/").subscribe(data => {
          this.arrData=data;
          console.log(this.arrData);
      });
  }

  openBuilding(bNum){
    console.log(bNum);
    this.navCtrl.push(FloorPage,{
      buildingNumber : bNum
    });
    
  }

 

}
