import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';

const EditArticle = (props) => {
    const[title,setTitle] = useState('');
    const[article,setArticle] = useState('');
    const[authorname,setauthorname] = useState('');
    const[message,setMessage] = useState('');
    const[fileName,setFileName] = useState('');
    const[videolink,setVideoLink] = useState('');

    const onChangeFile = (e) =>{
        setFileName(e.target.files[0]);
    }

    const changeOnClick = event =>{
        event.preventDefault();

        const formData = new FormData();

        formData.append('title',title);
        formData.append('article',article);
        formData.append('authorname', authorname);
        formData.append('articleImage',fileName);
        formData.append('videolink',videolink)

        axios.put(`/articles/update/${props.match.params.id}`,formData)
             .then(res => setMessage(res.data))
             .catch(err =>{
                 console.log(err);
             })
    }

    useEffect(() =>{
        axios.get(`/articles/${props.match.params.id}`)
        .then(res =>[
        setTitle(res.data.title),
        setArticle(res.data.article),
        setauthorname(res.data.authorname),
        setFileName(res.data.articleImage),
        setVideoLink(res.data.videolink)
        ])
        .catch(error => console.log(error));
    },[props]);


    return (
       
    <AddArticleContainer>
        <div className="container">
             <h1>Edit Article</h1> 
            <span className = "message">{message}</span>
         <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="title" 
                       className="form-label">Title</label>
                 <input type="text" 
                        value={title}
            onChange={event => setTitle(event.target.value)}
            className="form-control" 
             placeholder="title"/>
        </div>

  <div className="form-group">
    <label htmlFor="authorname" className="form-label">Author</label>
    <input type="text"
    value={authorname}
    onChange={event => setauthorname(event.target.value)}
     className="form-control"
      placeholder='Author Name' />
  </div>
  <div className="form-group">
  <label htmlFor="article" className="form-label">Article</label>
  <textarea className="form-control" 
  value={article}
  onChange={event => setArticle(event.target.value)}
   rows="3"></textarea>
</div>
<div className="form-group">
    <label htmlFor="videolink" className="form-label">Video Link</label>
    <input type="text"
    value={videolink}
    onChange={event => setVideoLink(event.target.value)}
     className="form-control"
      placeholder='Video Link' />
  </div>
  
<button type="submit" className="btn btn-outline-warning">Edit Article</button>

 <div className='form-group'>
      <label htmlFor='file'>Choose article image</label>
      <input type='file' filename='articleImage' 
      className='form-control-file'
      onChange={onChangeFile}/>
  </div>
</form>
</div>
</AddArticleContainer>
    )
}

export default EditArticle;

//Main container
const AddArticleContainer = styled.div`

    margin: 3rem auto;
    padding: 4rem;
    width: 31.25;

    h1{
        font-weight: 900;
        color: var(--dark-green);
    }

    .btn-primary{
        margin-top:2rem;
        background: var(--dark-green);
        border:none;
        &:hover{
            background: var(--light-green);
        }
    }

    .message{
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }

`;