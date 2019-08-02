import generateStore from './store.js'

//actions
import * as Core from './actions/Core'
import * as User from './actions/User'
import * as Wallet from './actions/Wallet'
import * as Transactions from './actions/Transactions'

//extensions
import Crext from './extensions/Crext';
import Ceser from './extensions/Ceser';

class Credux {

    constructor(store) {
        this.store = store || generateStore;
        this.currentState = this.store.getState();
        window.addEventListener('load', this.checkExtension.bind(this) );
        window.addEventListener('load', function(){
            this.store.subscribe(this.changeHandler.bind(this))
        }.bind(this));
    }

    changeHandler(){
        let previousValue = this.currentState
        this.currentState = this.store.getState()
        
        //extension loaded
        if (this.currentState.Core.extension && previousValue.Core.extension !== this.currentState.Core.extension) {
            this.authorise();
        }

        //authorised
        if (this.currentState.Core.authorised && previousValue.Core.authorised !== this.currentState.Core.authorised){
            this.updateKey()
        }

        //users changed
        if (this.currentState.User.key && previousValue.User.key !== this.currentState.User.key){
            this.updateUserBalance()
        } 
    }


    checkExtension() {
        if (typeof (window.CREXT) !== 'undefined') {
            this.store.dispatch(Core.extension('CREXT'));
        }else if (typeof (window.CreditsExtension) !== 'undefined') {
            this.store.dispatch(Core.extension('CESER'));
        } else {
            this.store.dispatch(Core.extension(false));
        }
    }

    getAPI(){
        if(this.store.getState().Core.extension == 'CESER'){
           return new Ceser()
        }else if(this.store.getState().Core.extension == 'CREXT'){
           return new Crext()
        }
    }

    authorise(){
        this.getAPI().authorise((authorised) => {
            this.store.dispatch(Core.authorised(authorised));
        })
    }

    updateKey(){
        this.getAPI().getKey((key) => {
            this.store.dispatch(User.key(key))
        })
    }

    updateUserBalance(){
        this.getAPI().balanceGet(this.store.getState().User.key , (balance) => {
            this.store.dispatch(User.balance(balance))
        })
    }

    updateBalance(key){
        this.getAPI().balanceGet(key , (balance) => {
            this.store.dispatch(Wallet.balance(key, balance))
        })
    }

    sendTransaction(id = null,target,amount,fee = 0.1,userData = []){
        this.getAPI().sendTransaction(id,target,amount,fee,userData , (id,result) => {
            this.store.dispatch(Transactions.results(id,result))
        })
    }


}

export default Credux;