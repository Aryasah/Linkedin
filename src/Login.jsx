import React,{useState,useEffect} from 'react'
import {useDispatch}  from 'react-redux'
import {auth} from './firebase'
import {login} from './features/userSlice'
import "./Login.css"
import im from './loader/link_home.svg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Login = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [profilePic,setProfilePic]=useState('')
    const [opent,setOpent]=useState(false)
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
        readOutLoud(`Hey ${userAuth.user.displayName}!!! Accept a warm welcome. Hope You'll Like this website.Don't forget to add a post`)
        })
        .catch((error)=>alert(error))
    }
    const handleOpen = () => {
        setOpent(true);
      };
    
      const handleClose = () => {
        setOpent(false);
      };
      useEffect(()=>{readOutLoud('Welcome to Your professional community!!! Sign-Up to explore ')},[])
      const readOutLoud=(message)=>{
        const speech =new SpeechSynthesisUtterance();
        speech.text=message;
        speech.volume=.9;
        speech.rate=.9;
        speech.pitch =1;
    
        window.speechSynthesis.speak(speech);
    }
    return (


        <div className="login_home">
        <div className="login_left">
            <h2 className="login_header">Welcome to your <br/> professional community</h2>
            <i><p className="login_quote"><q><span></span></q></p></i>
            <img src={im} alt="linkedin_image" />
            <div className="login_btn">
                <button onClick={handleOpen} className="sign_btn">Sign In</button>
                <div className="account"> Don't have a account yet?<br/> <span onClick={handleOpen}> Register here </span> </div>
            </div>
            <p className="login_description">It is a learning project made by <a href="linkedin.com/in/arya-sah-5100121b3/" >@AryaSah</a></p>
        </div>
        <div className="login_right">
            <img src={im} alt="linkedin_image" />
        </div>
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="login_modal"
                open={opent}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 10000,
                    }}
        >     
                <Fade in={opent}>
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
                </Fade>
                </Modal>
        
        </div>
      
    )
}

export default Login

