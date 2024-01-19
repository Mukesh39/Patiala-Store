import { createSlice } from '@reduxjs/toolkit' ; 

const initialState  = [] ;

const cartSlice = createSlice({

name : 'cart',
initialState,
reducers : {

add(state , action) {

/// redux = [ ...state ,action.payload] ; this is how we do , But here is also same in craete slice and push things it doesn't mean we are not doing  different

    state.push(action.payload); 

            } ,

remove(state ,action) {

    return state.filter((item)=> item.id !== action.payload) ; 

         }
 
       }
})



//exporting actions and reducers to root 

export const  {add , remove} =  cartSlice.actions ; 
export default cartSlice.reducer ; 