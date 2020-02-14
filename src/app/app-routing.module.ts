import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';


const ROUTES: Routes=[
  {path:'' ,component: HomeComponent},
  {path:'blog' ,component: BlogComponent},
  {path:'about' ,component: AboutComponent},
  { path: 'iamlazy', loadChildren: () => import('./iamlazy/iamlazy.module').then(m => m.IamlazyModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
