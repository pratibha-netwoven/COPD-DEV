import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MsShareService} from './ms-share.service';
import {AppComponent} from './app.component';
import {ROUTES} from './app.routes';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {DateFormat} from './date-format';
import {
  // MdButtonModule,
  
  MdCheckboxModule,
  MdRadioModule,
  MdCardModule,
  MdListModule,
  MdGridListModule,MatCardModule,
  MdDatepickerModule,
  MdNativeDateModule,
  DateAdapter
} from '@angular/material';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { WelcomeaComponent } from './welcomea/welcomea.component';
import { WelcomebComponent } from './welcomeb/welcomeb.component';
import { WelcomecComponent } from './welcomec/welcomec.component';
import { Generic1Component } from './generic1/generic1.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ScorebuttonsComponent } from './scorebuttons/scorebuttons.component';
// import { Generic1Component } from './generic1/generic1.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeaComponent,
    WelcomebComponent,
    WelcomecComponent,
    // GenericaComponent,
    Generic1Component,
    NavigateComponent,
    ScorebuttonsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES, {useHash: true}),HttpModule,FormsModule,
    // MdButtonModule,
    MdDatepickerModule,
    MdGridListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
    MdListModule,
    AngularMaterialModule,
    MatCardModule,
    MdNativeDateModule
   
  ],
  providers: [MsShareService,MdNativeDateModule,DatePipe,{provide:DateAdapter,useClass:DateFormat}],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(private dateAdapter:DateAdapter<Date>) {
    dateAdapter.setLocale('nl');
    
  }
}
