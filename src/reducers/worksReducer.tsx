import { WorksState, IWorksState } from '../models/state/components/worksState';

export default class WorksReducer {
    static handle(state: any = new WorksState, action: any): IWorksState {

        switch (action.type) {
            case 'Works/readJSON': {
                console.log('(Reducer)-> Works/readJSON was done');
                let key:any;
                let jsonData = new action.payload;          // Получаем данные из action.type
                let WorksObj = jsonData.jsonWorks;          // Получаем объект с работами из json файла
                let newCategoryList: any = state.categoryList; // Получаем массив с категориями из текущего store
                let WorksArray: any = [];                   // Создаем новый массив (для работ) для послед.передачи в store
                
                // преобразуем Объект с Работами в Массив с Работами 
                for (key in WorksObj) {
                    WorksArray.push(WorksObj[key]);
                }
                
                // наполняем массив ост.категориями 
                WorksArray.forEach((elem:any, i:any) => {
                  if(newCategoryList.indexOf(elem.category) === -1) {
                    newCategoryList.push(elem.category);
                  }
                });
                
                let worksState = WorksArray;                // передаем все работы в store
                let categoryList = newCategoryList;         // передаем все категории в store
                return {...state, worksState, categoryList};
            }
            case 'Works/setCategory': {
                console.log('(Reducer)-> Works/setCategory was done');
                let Category = action.payload;
                return {...state, Category: Category} 
            }
            default: {
                /* 
                Возвратит state при первой загрузки,
                в котором лежит значение по умолчанию, которое было определено в worksState.tsx
                 */
                return state;
            }
        }
    }
}