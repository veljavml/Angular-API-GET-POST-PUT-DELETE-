import { Injectable } from '@angular/core';
import { Proizvod } from '../models/proizvod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }
  url: string = 'https://63b59b2f58084a7af39a1cf4.mockapi.io/vezbanje';


  getData(): Observable<Proizvod[]> {
    return this.http.get<Proizvod[]>(this.url);
  }

  getDataByID(id:number ): Observable<Proizvod> {

    return this.http.get<Proizvod>(this.url+'/'+id)
 
   }

  postData(proizvod: Proizvod) {

    this.http.post(this.url, proizvod).subscribe(responseData => {
      console.log(responseData)
    });

  }

  updateData(id: number, proizvod: Proizvod) {
    this.http.put(this.url+'/' + id, proizvod).subscribe(responseData => {
      console.log(responseData)
    });
  }

  deleteData(id:number){

    this.http.delete(this.url+'/'+id).subscribe(responseData =>{
      console.log(responseData);
    });

  }

  addEditProizvod(prenetiProizvod:Proizvod){

    if(prenetiProizvod.id!=null){
      this.updateData(prenetiProizvod.id,prenetiProizvod)
    }
    else{
      this.postData(prenetiProizvod)
    }
  }
}
