export class City { 
    cityId : number =0;
    cityName : string='';
    stateName : String ='';
    constructor(cityId : number,
        cityName : string,
        stateName : String){
            this.cityId =cityId;
            this.cityName = cityName;
            this.stateName = stateName;
        }
        // constructor(){}
}