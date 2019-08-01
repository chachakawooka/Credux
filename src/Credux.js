import generateStore from './store.js'
import * as Core from './actions/Core'

class Credux {

    constructor(store) {
        this.store = store || generateStore;
        window.addEventListener('load', this.checkExtension.bind(this) );
    }

    checkExtension() {
        console.log(window);
        if (typeof (window.CREXT) !== 'undefined') {
            this.store.dispatch(Core.extension('CREXT'));
        }else if (typeof (window.CreditsExtension) !== 'undefined') {
            this.store.dispatch(Core.extension('CESER'));
        } else {
            this.store.dispatch(Core.extension(false));
        }
    }

}

export default Credux;