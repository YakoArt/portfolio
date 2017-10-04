import * as data from '../../data/db/works.json';

export class WorksApi {
    jsonWorks: any;
    constructor() {
        this.jsonWorks = {...data};
        // console.log(this.jsonWorks);
    }
    dataWorks() {
        return this.jsonWorks;
    }
    
}