import React from 'react'
let state={
    token:null,
    id:null
}

const isLoggedIn = ()=> {
    return state.token || localStorage.getItem('token')
}

const setToken =(token)=> {
    localStorage.setItem('token', token)
        state.token=token
  
}

const getToken = () =>{
    const token = state.token ? state.token:
    localStorage.getItem('token')? localStorage.getItem('token') : null
    return token
}

const setId =(id)=> {
   localStorage.setItem('id', id);
   state.id=id
   
}

const getId = () => {
    const id = state.id ? state.id:
    localStorage.getItem('id')? localStorage.getItem('id') : null
    return id
} 

const logoutUser=()=>{
    state.token=null;
    state.id=null
    localStorage.removeItem('token');
    localStorage.removeItem('id')
}

export {setToken, getToken, setId, getId, isLoggedIn, logoutUser }
