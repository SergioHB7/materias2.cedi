import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyePage } from '../pye/pye';
import { CienciasPage } from '../ciencias/ciencias';
import { PappsPage } from '../papps/papps';
import { ComPage } from '../com/com';
import { RobPage } from '../rob/rob';
import { MiPage } from '../mi/mi';
import { CalcPage } from '../calc/calc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  pye= PyePage;
  ciencias= CienciasPage;
  papps= PappsPage;
  com= ComPage;
  rob= RobPage;
  mi= MiPage;
  calc= CalcPage

  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }
  clickDibujo(){
    this.navCtrl.push(this.dibujo);
  }
  clickPye(){
    this.navCtrl.push(this.pye);
  }
  clickCiencias(){
    this.navCtrl.push(this.ciencias);
  }
  clickPapps(){
    this.navCtrl.push(this.papps);
  }
  clickCom(){
    this.navCtrl.push(this.com);
  }
  clickRob(){
    this.navCtrl.push(this.rob);
  }
  clickMI(){
    this.navCtrl.push(this.mi);
  }
  clickCalc(){
    this.navCtrl.push(this.calc);
  }



}
