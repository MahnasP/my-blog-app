import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom' 

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function logoutHandler() {
        try {
            authService.logout().then(() => { dispatch(logout()) });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
      <button
          onClick={logoutHandler}
          className=' inline-block px-6 py-2 duration-200 rounded-full text-white bg-sycamore-500 cursor-pointer hover:bg-sycamore-700'
      >Logout</button>
  )
}

export default LogoutBtn