import Login from '../components/Login'
import Register from '../components/Register'
import React, {useState} from 'react';

export default function Home() {

  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className='login-register'>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
        }
      </div>
  )
}
