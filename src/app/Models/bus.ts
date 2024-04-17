export class bus{
    busRouteId : number;
    departureTime : string;
    occupiedSeats : number;
    price : number;
    totalSeatsInBus : number;
    constructor(
        BusRouteId : number,
        DepartureTime : string,
        OccupiedSeats : number,
        price : number,
        TotalSeatsInBus : number
    ){
        this.busRouteId = BusRouteId;
        this.departureTime = DepartureTime;
        this.occupiedSeats = OccupiedSeats;
        this.price = price;
        this.totalSeatsInBus = TotalSeatsInBus;
    }
}