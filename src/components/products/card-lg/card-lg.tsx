import './card-lg.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface ICardProps {
  Base: any;
  // cards: () => void;          
}
// tslint:disable-next-line:interface-name
interface ICardState {
  Base: any;
}
class Card extends React.Component<ICardProps, ICardState> {
  constructor() {
    super();
  }

  componentWillMount() {
    // this.props.cards();
  }

  render() {
    // console.log(this.props.Base);
    const Brand = this.props.Base && this.props.Base.brand ? this.props.Base.brand : 'Нет данных';
    // const Name = this.props.Base && this.props.Base.name ? this.props.Base.name : 'Нет данных';
    const Category = this.props.Base && this.props.Base.category ? this.props.Base.category : 'Нет данных';
    const Discription = this.props.Base && this.props.Base.discription ? this.props.Base.discription : 'Нет данных';
    const Price = this.props.Base && this.props.Base.price ? this.props.Base.price : 'Нет данных';
    return (
      <div className="Card-Wrap">
        <div className="Card-Preview">
          <div className="Card-Preview--Marker">New</div>
          <img className="Card-Preview--Image" src="" alt="" />
          <div className="Card-Preview--Brand">{Brand}</div>
        </div>
        <div className="Card-Info">
          <div className="Card-Info--Category"><i className="fa fa-link" aria-hidden="true"></i> {Category}</div>
          <div className="Card-Info--Discription">{Discription}</div>
          <div className="Card-Info--Price">{Price} <i className="fa fa-rub" aria-hidden="true"></i><span> шт.</span></div>
        </div>
        <div className="Card-Nav">
          <Link to="/" className="Card-Nav--LinkBtn-icon"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
          <Link to="/" className="Card-Nav--LinkBtn">В КАРЗИНУ</Link>
          <Link to="/" className="Card-Nav--LinkBtn-icon"><i className="fa fa-share" aria-hidden="true"></i></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    // из State приходят данные
    Base: state.card.Base
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // cards: () => { dispatch(AppActions.cards());  }
    // onClick: () => { dispatch()  }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));