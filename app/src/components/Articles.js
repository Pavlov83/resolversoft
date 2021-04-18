import React,{useState} from 'react';
import styled from 'styled-components'
import spinner from '../spinner.gif'
import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from 'axios'

const Articles = ({posts}) => {

    const [article,setArticle] = useState([]);
    //Delete article by id
    const deleteArticle = id =>{
        axios.delete(`/articles/${id}`)
             .then(res => alert(res.data))
             setArticle(article.filter(item => item._id !==id))
    }

    return (
        <MainContainer>
            {!posts.length ? (<img src={spinner} alt="loading..."/>):(

            posts.map((article,key) =>(
                <div className='container' key={key}>
                    <img src={`/uploads/${article.articleImage}`} alt='../' />
                    <Link to={{
                        pathname: `/article/${article._id}`}}>
                <h2 >{article.title}</h2>
                </Link>

                <p>{article.article}</p>
              <span className="badge badge-secondary p-2" >
                  {article.authorname}
              </span>
              <div><YouTube videoId={article.videolink} /></div>
              <div className="row my-5">
                  <div className="col-sm-6">
                    <Link to={`/update/${article._id}`} className="btn btn-outline-success">Edit Article</Link>
                  </div>
                  <div className="col-sm-6">
                    <button to="/" onClick={()=>deleteArticle(article._id)} className="btn btn-outline-danger">Delete  Article
                    </button>
                  </div>
              </div>
              <hr/>
              </div>
              
            ))
            )}

        </MainContainer>
        
    )
}

export default Articles;

const MainContainer = styled.div`
    margin: 7rem 0;

    img{
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
    btn{
        position: center;
    }
    
`;