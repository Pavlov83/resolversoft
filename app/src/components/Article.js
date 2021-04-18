import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


const Article = (props) => {
    const[title,setTitle] = useState('');
    const[article,setArticle] = useState('');
    const[authorname,setauthorname] = useState('');
    const[fileName,setFileName] = useState('');
    const[videolink,setVideoLink] = useState('');


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
    },[])

    return (
        <ArticleContainer>
            <>
            <h2>{title}</h2>
            <p className="badge badge-secondary">{authorname}</p>

           <img src={`/uploads/${fileName}`}  alt='../' style={{margin: "0 auto", width:"40%", display:"flex"}}/>    
           <br></br>      
            <p>{article}</p>
            <br/>
            <div><YouTube videoId={videolink} /></div>
        <Link to='/' type="submit" className="btn btn-primary">Back To Home</Link>
           
            </>
    
    </ArticleContainer>
    )
}

export default Article;

//Main Container

const ArticleContainer = styled.div`

    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weigth: 900;
        color: var(--dark-green);
    }

    img{
        width: 1.5rem;
        display: block;
        margin: auto;
    }

    .btn-primary{
        margin-top:2rem;
        background: var(--dark-green);
        border:none;
        &:hover{
            background: var(--light-green);
        }
    }
`