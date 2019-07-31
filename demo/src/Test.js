import React, {Component} from 'react'
import { connect } from 'react-redux'

class Test extends Component {
  render() {
    return (
       <div>
          {this.props.extension &&
            <div>Extension Exists</div>
          }
          {this.props.extension}
       </div>
    )
  }
}

const mapStateToProps = state => ({
  extension: state.extension
});

export default connect(
    mapStateToProps
)(Test);