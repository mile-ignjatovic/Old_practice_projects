import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable' 

@Injectable()
export class ServerServiceService {

  constructor(private http: Http) { }

  storeServices(servers: any[]) {
    const headders = new Headers({'Content-Type': 'application/json'})  // postavljanje costum headera
    // return this.http.post('https://udemy-project-f773a.firebaseio.com/data.json', servers, {headers: headders});
    return this.http.put('https://udemy-project-f773a.firebaseio.com/data.json', servers, {headers: headders}); // this overwrites data on firebase
  }

  getService() {
    return this.http.get('https://udemy-project-f773a.firebaseio.com/data.json')
      .map( // uzme stari observable, transformise data i opet ga pretvori u observable to radi map
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('somehthig went wrong');  // mora da returnuje observable
        }
      );  
  }
  getDataFromServer() {
    return this.http.get('https://udemy-project-f773a.firebaseio.com/dataFromServer.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch((error: Response) => {
        return Observable.throw('something went wrong again :D');
      }
    );
  }
}
