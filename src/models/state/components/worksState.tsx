// tslint:disable-next-line:interface-name
export interface IWorksState {
    worksState: any
    categoryList: any
    category: any;
    // categoriesSet - набор категорий
    // relatedWork - соответствующие работы (relevant items)
}

export class WorksState implements IWorksState {
    worksState: any;
    categoryList: any;
    category: any;
    constructor() {
        this.category = " Все ";
        this.worksState = [];
        this.categoryList = ['Все'];
    }
}