import axios from 'axios';
const url = 'http://localhost:3003/user';

export const getuser = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`); //url = 'http://localhost:3003/user';
}

export const adduser = async (user) =>{
    return await axios.post(url,user);
}

export const edituser = async (id,user) =>{
    return await axios.put(`${url}/${id}`,user);
}

export const deleteuser = async (id,user) =>{
    return await axios.delete(`${url}/${id}`,user);
}