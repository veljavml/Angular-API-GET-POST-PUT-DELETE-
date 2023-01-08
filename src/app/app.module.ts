import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrikazProizvodaComponent } from './prikaz-proizvoda/prikaz-proizvoda.component';
import { AddEditProizvodComponent } from './add-edit-proizvod/add-edit-proizvod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrikazProizvodaComponent,
    AddEditProizvodComponent,
    PageNotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
