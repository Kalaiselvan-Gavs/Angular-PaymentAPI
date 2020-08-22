export class Payment {

  constructor(
    public endToEndId: string,
    public debtorIBAN: string,
    public creditorIBAN: string,
    public amount: string
  ) {  }

}