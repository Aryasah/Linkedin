import React,{useState} from 'react'
import {useDispatch}  from 'react-redux'
import {auth} from './firebase'
import {login} from './features/userSlice'
import "./Login.css"

const Login = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [profilePic,setProfilePic]=useState('')
    const dispatch=useDispatch()
    const register = (e)=>{
        if(!name){
            return alert('Please Enter the Name');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePic,
                })
        .then(()=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name,
                photoUrl:profilePic,
            }));
        loginToApp(e);
        })
        .catch((error)=>alert(error))
        })
    }
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        })
        .catch((error)=>alert(error))

    }
    return (
        <div className="login">
            <img src="https://www.allianceconsultoria.com.br/wp-content/uploads/2018/05/linkedin-logo-transparent-png-25.png" alt="" />
            <form>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="full name(Required for registration)" required type="text" />
                <input value={profilePic} onChange={e=> setProfilePic(e.target.value)} type="text" placeholder="Profile Picture Url(Optional)" />
                <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="Password" />
                <div className="log_in">
                    <button type="submit" onClick={loginToApp}>Sign In</button>
                    {/* <button onClick={register}>Register</button> */}
                </div>
            </form>
            <p>Not a member? <span className="login_register" onClick={register}>Register</span></p>

        </div>
    )
}

export default Login

