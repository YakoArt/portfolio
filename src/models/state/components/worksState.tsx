// tslint:disable-next-line:interface-name
export interface IWorksState {
    worksState: any
    categoryList: any
    Category: any;
    // categoriesSet - набор категорий
    // relatedWork - соответствующие работы (relevant items)
}

export class WorksState implements IWorksState {
    worksState: any;
    categoryList: any;
    Category: any;
    constructor() {
        this.Category = "Все";
        this.worksState = [];
        this.categoryList = ['Все'];
    }
}