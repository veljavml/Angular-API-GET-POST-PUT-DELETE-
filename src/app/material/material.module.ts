import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';




const MaterialComponents = [MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatCheckboxModule];



@NgModule({
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
