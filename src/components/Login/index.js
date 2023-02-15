
import React from 'react'
import { useState } from 'react'



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')





  const redirectHome = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
  }



  return (
    <div>
      <div className='flex flex-col h-screen justify-center items-center'>
        <form>
              <img alt='website-logo' src='https://assets.ccbp.in/frontend/react-js/logo-img.png'/>
            
              {/* Username */}
              <label htmlFor='usernmae' className='flex flex-col text-gray-500 my-2'>
                {/* Username */}
                <input 
                  id='username'
                  type='text'
                  onChange={() => setUsername(username)}
                  // value={username}
                  placeholder='Username'
                  className='border border-1 border-gray-500 rounded-sm px-8 py-2'
                />
              </label>

              {/* Password */}
              <label htmlFor='password' className='flex flex-col text-gray-500 py-2'>
                {/* Password */}
                <input 
                  id='password'
                  type='password'
                  onChange={() => setPassword(password)}
                  // value={password}
                  placeholder='Password'
                  className='border border-1 border-gray-500 rounded-sm px-8 py-2'
                />
              </label>

              <button onClick={redirectHome} className='text-center bg-blue-500 py-2 px-28 rounded text-white hover:bg-blue-600'>Login</button>
              


        
        </form>

      </div>
    </div>
  )
}


export default Login