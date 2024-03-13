import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import Postmodule from './Postmodule';
import Postmedia from './Postmedia';




function Feed() {


    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);

    // This fire up the code the feed component loads (without dependency) 
    useEffect(() => {
        // Real time connection to database
        // This will create a real time listener to firebase which means anytime when we create a 	  post collection in the sack and post a message in and this will directly map to posts.
        // Means if any posts change it will update it.
        db.collection("posts").orderBy('USER.timestamp', 'desc').onSnapshot(snapshot => (
            // console.log(snapshot.docs),
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const [showModal, setShowModal] = useState(false);
    const [isPhoto, setisPhoto] = useState(false);
    const [isVideo, setisVideo] = useState(false);

    const clickHandler = (event) => {

        if (event.target !== event.currentTarget) {
            return;
        }
        switch (showModal) {
            case true:
                setShowModal(false);
                break;
            case false:
                setShowModal(true);
                break;
            default:
                setShowModal(false);
                break;
        }
    };
    console.log(posts)

    return (
        <React.Fragment>

            <div className="middle">

                <form className="create-post">
                    <div className="profile-photo">
                        <CreateIcon />
                    </div>
                    <input
                        type="text"
                        defaultValue="Start a post"
                        onClick={clickHandler}
                    />
                    {showModal && <Postmodule showModal={showModal}
                        clickHandler={clickHandler}
                        name={user.displayName}
                        photoUrl={user.photoUrl || ''}
                    />}
                </form>

                <div className="feeds">
                    <div className="feed">
                        <div className="create-post">
                            <div onClick={() => { setisPhoto(!isPhoto) }}>
                                <ImageIcon style={{ color: "#70b5f9", fontSize: "34px" }} />
                                <h4>Photo</h4>
                            </div>
                            {isPhoto && <Postmedia
                                isMedia={isPhoto}
                                media="photo"
                                isWindow={() => setisPhoto(false)}
                            />}

                            <div onClick={() => { setisVideo(!isVideo) }}>
                            <SubscriptionsIcon style={{ fontSize: "34px" }} />
                                <h4>Video</h4>
                            </div>
                            {isVideo && <Postmedia
						isMedia={isVideo}
						media="video"
						isWindow={() => setisVideo(false)}
					/>}
                        </div>
                    </div>
                </div>



                <FlipMove>
				{posts.map(({ id, data: { USER, message, imageUrl, video, likes } }) => (
					//{}
					<Post
						key={id}
						ID={id}
						name={USER.name}
						description={USER.description}
						message={message}
						photoUrl={USER.photoUrl}
						imageUrl={imageUrl}
						video={video}
						likes={likes}
					/>
				))}
			</FlipMove>



            </div>
        </React.Fragment>
    )
}

export default Feed