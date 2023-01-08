import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Proizvod } from '../models/proizvod';
import { ProizvodService } from '../services/proizvod.service';
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-proizvod',
  templateUrl: './add-edit-proizvod.component.html',
  styleUrls: ['./add-edit-proizvod.component.css']
})
export class AddEditProizvodComponent implements OnInit {


  formProizvod: FormGroup;

  constructor(private servis: ProizvodService, private route: ActivatedRoute, private router: Router) { }
  niz: Proizvod[];
  ngOnInit(): void {

   

    this.formProizvod = new FormGroup({
      id: new FormControl(),
      naziv: new FormControl(),
      boja: new FormControl(),
      cena: new FormControl(),
      kategorija: new FormControl()
    })

    if (this.route.snapshot.queryParams['edit'] == 'true') {

      this.servis.getDataByID(this.route.snapshot.params['id']).subscribe((data) => {
        console.log(data);
        this.formProizvod.setValue(data);
  
      });
    }
  }


  proizvod: Proizvod = new Proizvod;



  postData() {
    this.servis.postData(this.proizvod);
  }

  updateData() {
    this.servis.updateData(this.proizvod.id, this.proizvod);
  }

  deleteData() {
    this.servis.deleteData(this.proizvod.id);
  }

  goBack(){
    this.router.navigate(['']);
  }

  save(){

    let noviProizvod: Proizvod
    noviProizvod=this.formProizvod.getRawValue();
    this.servis.addEditProizvod(noviProizvod);
  }

}
