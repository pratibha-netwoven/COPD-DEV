import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdRadioModule, MdButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdRadioModule, MdButtonModule,MatDialogModule
  ],
  exports: [
    MdRadioModule, MdButtonModule,MatDialogModule
  ],
  declarations: []
})
export class AngularMaterialModule {}