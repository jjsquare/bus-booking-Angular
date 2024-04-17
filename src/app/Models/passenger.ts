export class passenger{
    passengerName? : string;
    seatNumber : number;
    age? : number;
    price? : number;
    constructor(seatNumber: number, seatPrice? : number){
        this.seatNumber = seatNumber
    }
    valueOf(): number {
        return this.seatNumber;
    }
}