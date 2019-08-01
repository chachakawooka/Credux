export default class Crext {


    authorise(callback) {
        return callback(true);
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