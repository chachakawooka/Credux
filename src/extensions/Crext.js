export default class Crext {


    authorise(callback) {
        return callback(window.CREXT.network((r) => {
            if(r.success){
                return callback(true);
            }
            return callback(false);
        }
        ));
    }

    getKey(callback) {
        return callback(window.CREXT.getKey((r) => {
            if (r.success) {
                return callback(r.result);
            }
            return callback(null);;
        }
        ));
    }

}