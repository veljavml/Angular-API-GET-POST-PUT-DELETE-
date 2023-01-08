import { Component, OnInit } from '@angular/core';
import { ProizvodService } from '../services/proizvod.service';
import { AppModule } from '../app.module';
import { Route, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from '../models/proizvod';

@Component({
  selector: 'app-prikaz-proizvoda',
  templateUrl: './prikaz-proizvoda.component.html',
  styleUrls: ['./prikaz-proizvoda.component.css'],
})
export class PrikazProizvodaComponent implements OnInit {
  constructor(private servis: ProizvodService, private router: Router) { }


  data2: Proizvod[] = [];
  dataSource = new MatTableDataSource<Proizvod>();
  ngOnInit(): void {
    this.servis.getData().subscribe((data) => {
      console.log(data);
      this.data2 = data;
      this.dataSource.data = this.data2;

    });

  }

  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena', 'kategorija', 'dugmici'];



  add() {
    this.router.navigate(['/addedit']);
  }

  edit(id: number) {
    this.router.navigate(['addedit/' + id], { queryParams: { edit: 'true' } });
  }

  delete(id: number) {

    this.servis.deleteData(id);
    this.dataSource._updateChangeSubscription();

  }

  filter(event: any){
    if(!event.target.value)
    return;
    this.dataSource.filter=event.target.value.trim().toLowerCase();
  }

   

}
