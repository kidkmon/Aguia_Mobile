import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserProvider {

  // private API_URL = 'http://192.168.0.32:3030/v1';
  private API_URL = 'http://localhost/aguia-api';

  
  constructor(public http: Http) {  }

  
  criarUsuario(user:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers: headers});

    return new Promise((resolve,reject) => {
      this.http.post(this.API_URL + '/usuario/create.php', user, options).subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }

  autenticarUsuario(user: any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers: headers});

    return new Promise((resolve,reject) => {
      this.http.post(this.API_URL + '/usuario/auth.php', user, options).subscribe((result: any) => {
        resolve(result);
      },
      (error) => {
        reject(error);
      });
    });
  }

}
