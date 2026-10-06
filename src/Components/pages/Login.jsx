import React, { useState } from 'react'
import { getUser } from '../../api/Users'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [error,setError] = useState("")

  const handleLogin = async (data) => {
    setError("")
    const { email, password } = data

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    try {
      const res = await getUser()
      const foundUser = res.data.find(
        (usr) => usr.email === email && usr.password === password
      )

      if (!foundUser) {
        setError('Invalid email or password.')
        return
      }

      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email : </label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        <label>Password: </label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 3, message: 'Password cannot be less than 8 characters.' },
          })}
        />
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

        {error && <p className='text-red-500'>{error}</p> }
        

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login