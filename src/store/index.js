import {configureStore, createSlice} from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increament : (state) => {
          state.counterVal++;
        },
        decreament : (state )=> {
            state.counterVal--;
        },
        add : (state,action) => {
           state.counterVal+=Number(action.payload)
        },
        subtract : (state,action) => {
            state.counterVal-=Number(action.payload)
        },
    }
})


const counterStore=configureStore({reducer :{counter:  counterSlice.reducer}});
export const counterAction=counterSlice.actions;
export default counterStore;


/*const counterReducer=(store=INTIAL_VALUE,action)=>{
if(action.type==="INCREAMENT"){
    return ({counter:store.counter+1})
}
else if (action.type==="DECREMENT"){
    return ({counter:store.counter-1})
}
else if (action.type==="ADD"){
    console.log("hello")
    return ({counter:store.counter+ Number(action.payload.num)})
}
else if (action.type==="SUBSTRACT"){
    console.log("hellooo")
    return ({counter:store.counter- Number(action.payload.num)})
}

    console.log("recived",action)
    return  store
}*/


//const INTIAL_VALUE={
  //  counter:0
//}