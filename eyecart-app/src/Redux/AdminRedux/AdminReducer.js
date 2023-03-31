import { error, getdata, loading, pageChange } from "./type";


let inidata={
    data:[],
    loading:false,
    error:false,
    activepage:1
}

export function reducer(state=inidata,action){
    switch (action.type) {
        case (loading):{
          return{
            ...state,loading:true,error:false
          }
        }
        case(getdata):{
            return{
                ...state,data:action.payload,loading:false
            }
        }
          case(error) :{
            return{
                ...state,loading:false,error:true
            }
          } 
          case(pageChange):{
            return{
              ...state,activepage:action.payload
            }
          }
           
        default:{
           return state
        }
            
    }
}