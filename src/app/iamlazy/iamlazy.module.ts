import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IamlazyRoutingModule } from './iamlazy-routing.module';
import { IamlazyComponent } from './iamlazy.component';


@NgModule({
  declarations: [IamlazyComponent],
  imports: [
    CommonModule,
    IamlazyRoutingModule
  ]
})
export class IamlazyModule { }
