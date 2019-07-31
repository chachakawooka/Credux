import generateStore from './store.js'
import * as Core from './actions/Core'

class Credux {

    constructor(store) {
        this.store = store || generateStore;
        this.checkExtension();
    }

    checkExtension() {

        if (typeof (window.CreditsExtension) !== 'undefined') {
            this.store.dispatch(Core.extension('CESER'));
        }else if (typeof (window.CREXT) !== 'undefined') {
            tthis.store.dispatch(Core.extension('CREXT'));
        } else {
            this.store.dispatch(Core.extension(false));
        }
    }

}

export default Credux;