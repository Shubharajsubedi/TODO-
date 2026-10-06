import React, { useState } from 'react'
import { postUser } from '../../api/Users'
import {useForm} from "react-hook-form"

const Register = () => {
    const [user,setUser] = useState([])


    const onsubmit =  async(data) => {
        try {
          const res = await postUser(data);
          console.log(res.data)
          setUser([...user,res.data])
          
        } catch (error) {
         console.log(error)   
        }
    }

    const {register,handleSubmit,watch,formState:{errors},} =useForm();

  return (
    <div>
        <form onSubmit={handleSubmit(onsubmit)}> 
            <label htmlFor="">Username : </label>
            <input type="text" {...register("username" , 
                {required:true, 
                    minLength:{value:3, message: "Min length at least 3"},
                    maxLength:20
                }
            )} />
            {errors.username && <p>{errors.username.message}</p>}

             <label htmlFor="">Email : </label>
            <input type="email"  {...register("email",
                
            )}
              />

             <label htmlFor="">Password: </label>
            <input type="password"  {...register("password",
                {required:true,
                    minLength:{value : 3, message:"Passowrd cannot be less than 8 characters."}

                }
            )}
             />{errors.password && <p>{errors.password.message}</p>}


            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register