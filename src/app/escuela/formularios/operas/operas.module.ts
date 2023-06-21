import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OperaBasComponent } from '../opera-bas/opera-bas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OperaBasComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  exports:[
    OperaBasComponent
  ]
})
export class OperasModule { }
