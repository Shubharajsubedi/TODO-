import axios from "axios"
const API = axios.create({
    baseURL: "http://localhost:3000"
})

export const createTodo = (data) => API.post("/todo",data)

export const getTodo = () => API.get("/todo")

export const updateTodo = (editingid,payload) => API.put(`/todo/${editingid}`,payload)

export const deleteTodo = (id) => API.delete(`/todo/${id}`)