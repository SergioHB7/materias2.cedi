import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PyePage } from '../pages/pye/pye';
import { CienciasPage } from '../pages/ciencias/ciencias';
import { PappsPage } from '../pages/papps/papps';
import { ComPage } from '../pages/com/com';
import { RobPage } from '../pages/rob/rob';
import { MiPage } from '../pages/mi/mi';
import { CalcPage } from '../pages/calc/calc';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyePage,
    CienciasPage,
    PappsPage,
    ComPage,
    RobPage,
    MiPage,
    CalcPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyePage,
    CienciasPage,
    PappsPage,
    ComPage,
    RobPage,
    MiPage,
    CalcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
