import React,{useState,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase' 
import './Feed.css'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import Divider from '@material-ui/core/Divider';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// import { SettingsInputSvideoTwoTone } from '@material-ui/icons'



const Feed = () => {
    const user=useSelector(selectUser)
    const [posts,setPosts]=useState([])
    const [input,setInput]=useState('')
    const [video,setVideo]=useState('')
    const [photo,setPhoto]=useState('')
    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    




    useEffect(()=>{
        // Accesing firebase
        // snapshot basically says that give a snapshot of posts collection in firestore
        // every time post change delete or anything it will give snapshot it is basically realTime listener
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=> 
            setPosts(snapshot.docs.map((doc)=>( //return a object as it is open bracket it is implicit return object after mapping through entire docx
                    {
                        id:doc.id,
                        data:doc.data(),

                    }))
            )
        );
    },[]);
    
    const readOutLoud=()=>{
        const speech =new SpeechSynthesisUtterance();
        speech.text="Hello I am Zira How Can i help u ";
        speech.volume=1;
        speech.rate=1;
        speech.pitch =1;
    
        window.speechSynthesis.speak(speech);
    }

    const sendPost =(e)=>{
        e.preventDefault();
        // setPosts
        db.collection('posts').add({
        name:user.displayName,
        description:user.email,
        message:input,
        video:video,
        photo:photo,
        like:0,
        photoUrl:user.photoUrl|| user.email[0],
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
        setVideo("");
        setPhoto("")
        
    }
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handlesOpen = () => {
        setOpens(true);
      };
    
      const handlesClose = () => {
        setOpens(false);
      };
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon onClick={readOutLoud} />
                    <form>
                        <input onChange={e=> setInput(e.target.value)} value={input} type="text" />
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption check={!photo?false:true} title="Photo" handleOpen={handlesOpen}  Icon={ImageIcon} color="#7085bc"/>
                    <InputOption check={!video?false:true} title="Video" handleOpen={handleOpen} Icon={SubscriptionIcon} color="#ca1010dc"/>
                    <InputOption title="Event"  Icon={EventNoteIcon} color="#0463cfdc"/>
                    <InputOption title="WriteArticle"  Icon={CalendarViewDayIcon} color="#eb8908dc"/>

                </div>
                <Divider />  
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >     
                <Fade in={open}>
                    <div className="paper">
                        <h2 className="title" id="transition-modal-title">Video URL</h2>
                        <div className="lower">
                            <input onSubmit={handleClose} onChange={e=> setVideo(e.target.value)} placeholder="enter the video-url" value={video} type="text" />
                            <button onClick={handleClose}>Save</button>
                        </div>
                    </div>
                </Fade>
                </Modal>


                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={opens}
                    onClose={handlesClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >     
                <Fade in={opens}>
                    <div className="paper">
                        <h2 className="title" id="transition-modal-title">Photo URL</h2>
                        <div className="lower">
                            <input onSubmit={handlesClose} onChange={e=> setPhoto(e.target.value)} placeholder="enter the photo-url" value={photo} type="text" />
                            <button onClick={handlesClose}>Save</button>
                        </div>
                    </div>
                </Fade>
                </Modal>




                {/* List of Posts  */}
                {/* retrieving from firebase */}
                {posts.map(({id, data:{name,description,message,photoUrl,video,photo,like}})=>{
                    return <Post key={id} id={id} name={name} description={description} message={message} photoUrl={photoUrl} video={video} photo={photo} like={like}/>

                })}
                {/* <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/> */}
            </div>
        </div>
    )
}

export default Feed
