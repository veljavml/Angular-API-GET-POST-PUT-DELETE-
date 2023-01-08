import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrikazProizvodaComponent } from './prikaz-proizvoda/prikaz-proizvoda.component';
import { AddEditProizvodComponent } from './add-edit-proizvod/add-edit-proizvod.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';

const routes: Routes = [
  {path: 'proizvod', component:PrikazProizvodaComponent},
  {path: '', component:PrikazProizvodaComponent},
  {path: 'addedit', component:AddEditProizvodComponent},
  {path: 'addedit/:id',component:AddEditProizvodComponent},
  {path: '**',component:PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
