import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' ; 




//object.freeze does not allowd to change the properties written these are enum written by Mukesh
//what we are doing - we are trying to get the data from API or asynchronously operation for getting the data , for that we must ensure data should reach with getting stuck somehwhere.

export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error', 
    LOADING:'loading',
})

const productSlice = createSlice({

name : 'cart',
initialState:{
 
    data:[],
    status:STATUSES.IDLE,


},



reducers : {

    // setProducts(state , action) {

    //    /// redux = [ ...state ,action.payload] ; this is how we do , But here is also same in craete slice and push things it doesn't mean we are not doing  different

    //      state.data = action.payload ; 

    //         }, 
            
    //         setStatus(state , action) {
    //              state.status = action.payload ; 
    //              } ,

       },

       //this looks easier than promises that we have done earlier

        
       extraReducers: (builder)=>{

        builder 

        .addCase(fetchProducts.pending , (state,action)=>{
            state.status = STATUSES.LOADING ;
        })


        .addCase(fetchProducts.fulfilled , (state,action)=>{

            state.data = action.payload ;

            state.status = STATUSES.IDLE ;
        })

        .addCase(fetchProducts.rejected , (state,action)=>{
            state.status = STATUSES.ERROR ;
        })

       },
})



//exporting actions and reducers to root 

export const  {setProducts , setStatus} =  productSlice.actions ; 
export default productSlice.reducer ; 



//thunk - In Redux, a thunk is a middleware that allows you to write action creators that return a function instead of an action object. This is particularly useful for handling asynchronous operations in Redux, such as making API calls or performing other side effects.

// A thunk function is a function that wraps an expression to delay its evaluation. In the context of Redux, a thunk is a function that can be dispatched to the Redux store. This function receives the dispatch and getState functions as its arguments, allowing it to interact with the Redux store and get the current state.


//this is use of Thunk today we can use  but more abstratcion ahs been done in redux toolkit

//Here I am comment on it 

// export function fetchProducts() {


//     return async function fetchProductsThunk(dispatch ,getState) {

//         dispatch(setStatus(STATUSES.LOADING));

//         try {
     

//             const res =  await fetch("https://fakestoreapi.com/products") ;  
//             const data = await res.json() ;  
//             dispatch(setProducts(data)) ; 
//             dispatch(setStatus(STATUSES.IDLE));

   
//         }

//         catch(err) {
            
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));

//         }
//     }


// }



// This is use of redux toolkit to comapre with previous codes that is lesser code and more efficient

export const fetchProducts = createAsyncThunk('products/fetch' , async()=>{

    const res =  await fetch("https://fakestoreapi.com/products") ;  
     const data = await res.json() ; 
     return data ;  

})




