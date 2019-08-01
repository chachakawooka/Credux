export default class Crext {


    authorise(callback) {
        return callback(window.CREXT.network().then((r) => {
            if(r.success){
                return callback(true);
            }
            return callback(false);
        }
        ));
    }

    getKey(callback) {
        return callback(window.CREXT.getKey().then((r) => {
            if (r.success) {
                return callback(r.result);
            }
            return callback(null);;
        }
        ));
    }

}