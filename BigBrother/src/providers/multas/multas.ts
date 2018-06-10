import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the MultasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MultasProvider {

  // private API_URL = 'http://192.168.0.32:3030/v1';
  private API_URL = 'http://192.168.0.20:80/aguia-api';


  constructor(public http: Http) {  }

  readMultas(id_usuario){
    return new Promise((resolve, reject) =>{
      let url = this.API_URL + '/multa/read_group.php?id_usuario=' + id_usuario;

      this.http.get(url).subscribe((result:any) => {
        resolve(result.json());
      },
      (error) =>{
        reject(error.json());
      });
    });
  }

  readMultaInfo(id){
    return new Promise((resolve, reject) =>{
      let url = this.API_URL + '/multa/read_one.php?id_multa=' + id;

      this.http.get(url).subscribe((result:any) => {
        resolve(result.json());
      },
      (error) =>{
        reject(error.json());
      });
    });
  }

  criarMulta(multa:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers: headers});

    return new Promise((resolve,reject) => {
      this.http.post(this.API_URL + '/multa/create.php', multa, options).subscribe((result: any) => {
        resolve(result);
      },
      (error) => {
        reject(error.json());
      });
    });
  }

}
