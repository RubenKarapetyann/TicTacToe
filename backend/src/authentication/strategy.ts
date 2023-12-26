import { Strategy } from "passport-jwt"
import { options } from "../../constants/passport"
import { getUserBy } from "../../utils/database"

const strategy = new Strategy(options, async function(payload, done){
    try{
        const user = await getUserBy("id", payload.sub)
        if(user){
            return done(null, user)
        }else{
            return done(null, false)
        }
    }catch(err){
        console.log(err);
        return done(null, false)
    }
})

export default strategy