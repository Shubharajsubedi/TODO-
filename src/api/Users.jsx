import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:3000"
})

export const postUser = (data) => API.post("/users", data)

export const getUser = () => API.get("/users")

export const updateUser = (editingid,payload) => API.put(`/users/${editingid}`, payload)

export const deleteUser = (id) => API.delete(`/users/${id}`)