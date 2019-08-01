export default class Crext{

    authorise(callback){
        CreditsExtension.authorization(r => {
            if(r.result){
                return callback(true);
            }
            return callback(false);
        })
    }
    
    getKey(callback){
        window.CreditsExtension.User((r) => {
            if(r.result){
                return callback(r.result);
            }
            return callback(null);;
        })
        
    }
    
}