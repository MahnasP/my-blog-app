import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    !loading ? <div className='min-h-screen items-center flex flex-col content-between bg-white'>
      <div className='flex-grow w-full h-full'>
        <Header />
        <main className='grow'>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> : <LoadingAnimation/>//add loading text or animation
  );
}

export default App
