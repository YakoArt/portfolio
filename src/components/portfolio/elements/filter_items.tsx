import * as React from 'react';

// tslint:disable-next-line:interface-name
interface IFilterItemsProps {
    category: string;
    setCategory: string;
    // key: string;
    setCategoryWorkAction: any;
}
// tslint:disable-next-line:interface-name
interface IFilterItemsState {}

class FilterItems extends React.Component<IFilterItemsProps, IFilterItemsState> {
    constructor(props:any) {
        super(props);
    }

    onCategoryBtnClick = (event:any) => {
        console.log('On category BTN click : ' + event.target.textContent);
        this.props.setCategoryWorkAction(event.target.textContent);
    }

    render() {
        
        const Category: any = this.props.category;
        const SetCategory: any = this.props.setCategory
        let ClassName: string = 'light';
        if(SetCategory == " " + Category + " ") {ClassName = 'light--active';}

        console.log(this.props);

        return (
            <a onClick={ (event) => this.onCategoryBtnClick(event) } className={ ClassName }> {Category} </a>
        );
    }
}

export default FilterItems;