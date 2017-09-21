import './blog.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IBlogProps {}
// tslint:disable-next-line:interface-name
interface IBlogState {}

class Blog extends React.Component<IBlogProps, IBlogState> {
  constructor() {
    super();
  }

  componentWillMount() {}
  render() {
    return (
      <div className="blog-wrap">
        <svg className="topdelta-left" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 0 L30 100 L100 0 Z"></path>
        </svg>
          <h2>Blog Block</h2>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    // из State приходят данные
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    // onClick: () => { dispatch()  }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));