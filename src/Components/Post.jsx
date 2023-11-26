import "/src/index.css"
import React from 'react'
import "./Like.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faCircleUser, faUserLarge, faCamera, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const Post = ({ username }) => {
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  const [items, setItems] = useState([]);
  const [image, setImage] = useState(null)
  const [fileName, setFilename] = useState("No selected file")


  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <div className="Post">
        <h1><FontAwesomeIcon icon={faUserLarge} />&nbsp;{username}</h1>
        <form onSubmit={onSubmit} >
          <textarea className='textarea'
            name='item' placeholder='Whats on your mind,' required />

          <form onClick={() => document.querySelector(".image").click()} onSubmit={onSubmit}>
            <input type="file" className='image' image="boolean" accept="image/*" hidden onChange={({ target: { files } }) => {
              files[0] && setFilename(files[0].name)
              if (files) {
                setImage(URL.createObjectURL(files[0]))
              }
            }} />
            {
              image ?
                <img src={image} width={120} height={120} alt={fileName} className="image_rendring"/>
                :
                <FontAwesomeIcon icon={faCamera} className="Upload-icon" />
            }
          </form>
          <section>
            <span>
              {fileName}
              <FontAwesomeIcon icon={faTrash}
              onClick={()=>{
                setFilename("")
                setImage(null);
              }}/>
            </span>
          </section>
          <button className='btn-submit'>Post</button>
        </form>
        <ul>
          <li>
            {items.map((item, index) => (
              <Item onRemoveItem={onRemoveItem} key={item + index} item={item}></Item>
            ))}
          </li>
        </ul>
      </div>
    </>
  )

function Item({ item, onRemoveItem}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [Comment, setComment] = useState("")
  const [FullComment, setFullComment] = useState();
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  }

  const handleInput = (event) => {
    console.log(event.target.value)
    setComment(event.target.value)
  }
  const onClick = () => {
    if (Comment.trim() !== '') {
      setFullComment(Comment);
      setComment("")
    }
  };
  
  return (
    <li className="Delete_Post">
      <h1 className='Submit-heading'>{username}</h1>
      <div className="heart-btn">
        <div className={`content ${liked ? 'heart-active' : ''}`} onClick={handleLikeClick}>
          <span className={`heart ${liked ? 'heart-active' : ''}`}></span>
          <span className={`text ${liked ? 'heart-active' : ''}`}></span>
          <span className={`numb ${liked ? 'heart-active' : ''}`}>{likeCount}</span>
        </div>
      </div>
      <button className="delete" onClick={() => onRemoveItem(item)}>
        Delete
      </button>
      <img src={image} width={120} height={120} alt="   " className="file"/>
      <p className="text_Rendering">{item} </p>
      <div className="commentSection">
        <input type="text"
          onChange={handleInput}
          value={Comment}
          placeholder="Add a comment..."
          onClick={onClick}
        />
        <button className="btn-Comment" onClick={onClick}><FontAwesomeIcon icon={faRightFromBracket}/></button>
        {(
        <p className="User_Comment"> {FullComment}</p>
        )}
      </div>
    </li>
  );
}

}
export default Post