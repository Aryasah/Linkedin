import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {login, selectUser,logout} from './features/userSlice'
import {auth} from './firebase'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import Widgets from './Widgets'
import './App.css';








function App({hideLoader}) {

  
  useEffect(hideLoader, []);
 
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    // this is a kistener to any one auth changes ultimately lead to persistent login
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      {
        // user Login
        dispatch(login(
          {
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          }
        ))
      }
      else{
        // Logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (<Login/>):(
      <div className="app_body">
      

        {/* sideBar */}
        <Sidebar/>
        {/* Feed */}

        <Feed/>

        {/* Widgets of right side */}
        <Widgets/>
      </div>)
      }

    </div>
  );
}

export default App;