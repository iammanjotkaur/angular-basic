import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PipeSamplePipe } from './pipe-sample.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import {ReactiveFormsModule} from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';



@NgModule({
  declarations: [
    AppComponent,
    PipeSamplePipe,
    ContactFormComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FirstComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
