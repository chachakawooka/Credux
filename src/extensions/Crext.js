export default class Crext {


    authorise(callback) {
        return window.CREXT.network().then((r) => {
            if(r.success){
                return callback(true);
            }
            return callback(false);
        });
    }

    getKey(callback) {
        return window.CREXT.getKey().then((r) => {
            if (r.success) {
                return callback(r.result.publicKey);
            }
            return callback(null);;
        });
    }

    balanceGet(key,callback){
        window.CREXT.balanceGet({key:key}).then((r) => {
            if(r.success){
                return callback(r.result.balance);
            }
            return callback(null);;
        })
    }

}