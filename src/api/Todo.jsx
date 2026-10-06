const API = ({
    baseUrl: "http://localhost:3000"
})

export const createTodo = (payload) => API.post("/todo",payload)

export const getTodo = () => API.get("/todo")

export const updateTodo = (editingid,payload) => API.put(`/todo/${editingid}`,payload)

export const deleteTodo = (id) => API.delete(`/todo/${id}`)