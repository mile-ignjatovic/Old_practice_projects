export class Agreement {

    public id: number;
    public userID: number;
    public type: string;
    public date: string;

    constructor(agreementID: number, userID: number, agreementType: string, date: string) {
      this.id = agreementID;
      this.userID = userID;
      this.type = agreementType;
      this.date = date;
    }
  }
