import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Agreement} from './Agreement';

@Injectable()
export class AgreementService {

  constructor(private http: Http) {
    console.log("AgreementService::constructor();");
  }

  getAgreements(): Promise<Agreement[]> {

    console.log("userService::getAgreements();");

    return this.http.get("http://localhost:3000/agreements")
      .toPromise()
      .then((res: any) => res.json())
      .catch(this.error);
  }

  addAgreement(agreement: Agreement): Promise<Agreement> {
    console.log("userService::addAgreement();");

    return this.http.post("http://localhost:3000/agreements", agreement)
      .toPromise()
      .then(response => response.json())
      .catch(this.error);
  }

  error(err): Promise<string> {
    console.log(err);
    return Promise.reject("userService::error(" + err + ");");
  }

}
