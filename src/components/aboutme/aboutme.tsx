import './aboutme.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AppActions } from '../../../actions/appActions';

// tslint:disable-next-line:interface-name
interface IAboutMeProps {}
// tslint:disable-next-line:interface-name
interface IAboutMeState {}

class AboutMe extends React.Component<IAboutMeProps, IAboutMeState> {
  constructor() {
    super();
  }

  componentWillMount() {}
  render() {
    return (
      <div className="aboutme-wrap">
        <div className="aboutme">
          <h2>About Me</h2>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutMe));