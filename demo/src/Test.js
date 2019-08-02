import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Credux } from '../../src'
const credux = new Credux();

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      transactionRecepient: '6BPe3cQVPksL1SyaEZwfDVVqJyxPk8Zf5PTQKf5mCGdh'
    }
    
  }

  componentWillReceiveProps(nextProps) {
    //authorised
    if (nextProps.Core.authorised && nextProps.Core.authorised !== this.props.Core.authorised) {
      //get some wallet balances
      credux.updateBalance('G251yALHEF2ZJU38BwRNjrZfxmCkDVdvQSpURPATgT3f');
      credux.updateBalance('HMxB2dxizJuonfksbwzwYChX6VaJp9JfUCF3cNduUB3r');
      credux.updateBalance('AgsCo5c42tc6hEmUHTUMTCxNjNETZXzeyLe6dU3ZJVXQ');
      credux.updateBalance('EyRAeymxLgVMupjrQLLkAwCCefrWhF3AssY364G1qrET');
      credux.updateBalance('6BPe3cQVPksL1SyaEZwfDVVqJyxPk8Zf5PTQKf5mCGdh');
    }
  }

  changeTransactionRecepient(name, e){
    this.setState({transactionRecepient: e.target.value});
  }

  sendTransaction(){
    credux.sendTransaction(null,this.state.transactionRecepient,1, 0.1,[]);
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
            <dt>state.User.balance</dt>
            <dd>{this.props.User.balance}</dd>
          </dl>
        }

        <h4>state.Wallet.balances</h4>
        {this.props.Wallet.balances.map((wallet, index) => {
          return (<dl key={index}>
            <dt>.key</dt>
            <dd>{wallet.key}</dd>
            <dt>.balance</dt>
            <dd>{wallet.balance}</dd>
          </dl>)
        })}


        <h2>Transaction Test</h2>
        <input type="text" onChange={this.changeTransactionRecepient.bind(this)} value={this.state.transactionRecepient}/>
        <button onClick={this.sendTransaction.bind(this)}>Send 1 CS</button>

        <h3>Last Result</h3>
        {JSON.stringify(this.props.Transactions.lastResult)}
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Core: state.Core,
  User: state.User,
  Wallet: state.Wallet,
  Transactions: state.Transactions
});

export default connect(
  mapStateToProps
)(Test);