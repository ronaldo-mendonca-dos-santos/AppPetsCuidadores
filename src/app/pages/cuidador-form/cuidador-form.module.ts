import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CuidadorFormPageRoutingModule } from './cuidador-form-routing.module';

import { CuidadorFormPage } from './cuidador-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadorFormPageRoutingModule
  ],
  declarations: [CuidadorFormPage]
})
export class CuidadorFormPageModule {}
