import { allproducts, error, getalladmin, getdata, getuser, loading, pageChange } from "./type";


let inidata={
    data:[],
    allproducts:[],
    loading:false,
    error:false,
    activepage:1,
    totalPage:0,
    users:[],
    alladmin:[]
}

export function reducer(state=inidata,action){
  console.log(action)
    switch (action.type) {
        case (loading):{
          return{
            ...state,loading:true,error:false
          }
        }
        case(getdata):{
            return{
                ...state,data:action.payload.products,loading:false,totalPage:action.payload.Totalpage
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

          case(getuser):{
            return {
              ...state,loading:false,users:action.payload
            }
          }
           case(allproducts):{
            return {
              ...state,allproducts:action.payload
            }
           }
           case(getalladmin):{
            return {
              ...state, alladmin:action.payload
            }
           }
        default:{
           return state
        }
            
    }
}