export default class Crext {

    authorise(callback) {
        CreditsExtension.authorization(r => {
            if (r.result) {
                return callback(true);
            }
            return callback(false);
        })
    }

    getKey(callback) {
        window.CreditsExtension.User((r) => {
            if (r.result) {
                return callback(r.result);
            }
            return callback(null);;
        })

    }

    balanceGet(key, callback) {
        window.CreditsExtension.balanceGet({ Key: key }, (r) => {
            if (r.result) {
                return callback(r.result.Credits_CS);
            }
            return callback(null);;
        })
    }

    sendTransaction(id = null, target, amount, fee = 0.1, userData = [], successCallback = function(){}, errorCallback = function(){}) {
        
        let Transaction = {}
        if(id) Transaction.Id = id
        Transaction.Target = target
        Transaction.amount = amount
        Transaction.fee = fee
        if(userData && userData.length) Transaction.UserData = userData

        window.CreditsExtension.sendTransaction(
            Transaction, (r) => {
            console.log(r);
            if (r.result) {
                return successCallback(r.id,r.result);
            }else{
                return errorCallback(r.message);
            }
        });
    }

}