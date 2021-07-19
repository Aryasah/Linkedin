import React from 'react'
import {Avatar} from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import {db} from './firebase'
import firebase from 'firebase'
import Divider from '@material-ui/core/Divider';
import './Post.css'
import './woah/woah.css'

function Post({name,description,message,photoUrl,video,photo,like,id}) {
    const [status,setStatus]=React.useState(false);
    const countLike=()=>{
        console.log('hello loki');
        if(!status){
            db.collection('posts').doc(id).update({
                like: firebase.firestore.FieldValue.increment(1)
                
            })
            setStatus(!status);
        }
        else{
            db.collection('posts').doc(id).update({
                like: firebase.firestore.FieldValue.increment(-1)
            })
            setStatus(!status);
        }
    }
    return (
        <div className="post woah fadeIn" >
            <div className="post_header">
                <Avatar src={photoUrl}/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>
                        {description}
                    </p>

                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
                {!video?"":<div className="video_container">
                    <video src={video} autoPlay controls className="video_content"/>
                </div>}
                {!photo?"":<div className="video_container">
                    <img src={photo} alt="post_image" className="video_content"/>
                </div>}
            </div>
            
            
            <div className="post_buttons">
                <InputOption title="Like" like={like} countLike={countLike} Icon={ThumbUpAltOutlinedIcon} color="gray"/>
                <InputOption title="Comment" Icon={ChatOutlinedIcon} color="gray"/>
                <InputOption title="Share" Icon={ShareOutlinedIcon} color="gray"/>
                <InputOption title="Send" Icon={SendOutlinedIcon} color="gray"/>

            </div>
            <Divider light/>
        </div>
    )
}

export default Post
