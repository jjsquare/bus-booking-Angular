
export class searchBus{
    fromCityId : number 
    toCityId : number;
    travelDate : string;
    constructor(fromCity: number, toCity : number, travelDate : string){
        this.fromCityId = fromCity;
        this.toCityId =toCity;
        this.travelDate = travelDate
    }

}