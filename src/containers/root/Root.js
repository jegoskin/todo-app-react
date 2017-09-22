import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { log } from '../../actions/log';
import ToDo from '../todo/ToDo';

class Root extends Component {
  constructor() {
    super();
    this.state = this.getInitState();
  }
  getInitState = () => ({})
  componentDidMount() {
    this.props.log('Root mount')
  }
  render() {
    console.log(this.props.logs);
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </div>
          <Route exact path='/' component={ ToDo }/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  logs: state.logs
})

const mapDispatchToProps = {
  log: log
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
