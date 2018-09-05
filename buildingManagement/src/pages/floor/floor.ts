import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZonePage } from '../zone/zone';
import { AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the FloorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {
  
  bNum;
  fNum;
  arrData=[];
  path : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFireDatabase) {
    console.log(this.navParams);
    this.bNum=this.navParams.get("buildingNumber");
    this.path="/buildings/building "+this.bNum+1;
    console.log(this.path);
    this.db.list(this.path).subscribe(data => {
      this.arrData=data;
      console.log(this.arrData);
  });
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad FloorPage');
    console.log("building number is "+this.bNum);
  }

  openFloor(index){
    this.navCtrl.push(ZonePage,{
      buildingNumber : this.bNum,
      floorNumber : this.fNum
    });
  }

}
