import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Credux } from '../../src'
const credux = new Credux();

class Test extends Component {

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
        <dl>
          <dt>state.Core.extension</dt>
          <dd>{this.props.Core.extension}</dd>
        </dl>
        {this.props.Core.authorised &&
          <dl>
            <dt>state.User.key</dt>
            <dd>{this.props.User.key}</dd>
          </dl>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Core: state.Core,
  User: state.User
});

export default connect(
  mapStateToProps
)(Test);