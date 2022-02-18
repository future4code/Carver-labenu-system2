import { app } from "./app";
import { SelectClass } from "./services/selectClass";
const res=SelectClass("001")
res.then(res=>{
    
    console.log("resp",res.length>0 )
})
