import { error, getwishdata, loading } from "./cart.types"


let inidata={
    wishlistdata:[],
    loading:false,
    error:false
}


const cartreducer=(state=inidata,action)=>{

console.log(action)
    switch(action.type){
        case(loading):{
            return {
                ...state,loading:true
            }
        }
        case(getwishdata):{
          return {
            ...state,loading:false,wishlistdata:action.payload
          }
        }
        case(error):{
            return {
                ...state,error:true,loading:false
            }
        }

    }




}



