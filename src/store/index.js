import {createStore} from "redux";
const INTIAL_VALUE={
    counter:0
}

const counterReducer=(store=INTIAL_VALUE,action)=>{
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
}
const counterStore=createStore(counterReducer);
export default counterStore;