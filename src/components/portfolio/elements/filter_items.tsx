import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { FilterActions } from '../../../actions/filterActions';

// tslint:disable-next-line:interface-name
interface IFilterItemsProps {
    category: string;
    setCategory: string;
    setCategoryWorks: (newCategoryName:string) => void;
}
// tslint:disable-next-line:interface-name
interface IFilterItemsState {}

class FilterItems extends React.Component<IFilterItemsProps, IFilterItemsState> {
    constructor(props:any) {
        super(props);
    }
    /*
    onItemCalick = (event:any) => {
        const comp: any = event.currentTarget.textContent;
        console.log(comp);
        console.log(this.props);
    }
    */
    
    render() {
        const Category: any = this.props.category;
        const SetCategory: string = this.props.setCategory
        let ClassName: string = 'light';
        if(SetCategory == Category) {ClassName = 'light--active';}

        return (

            <a onClick={ (event:any) => this.props.setCategoryWorks(event) } className={ ClassName }> {Category} </a>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
    };
};
  
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterItems));
        {/*
            <a onClick={() => this.props.setCategoryWorks(Category)} className={ClassName}> {Category} </a>
        */}