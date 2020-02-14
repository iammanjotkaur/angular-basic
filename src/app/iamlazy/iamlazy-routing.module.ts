import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IamlazyComponent } from './iamlazy.component';

const routes: Routes = [{ path: '', component: IamlazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IamlazyRoutingModule { }
