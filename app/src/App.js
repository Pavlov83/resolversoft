import React,{useState,useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Header  from './components/layouts/Header'
import Navbar  from './components/layouts/Navbar'
import Footer  from './components/layouts/Footer'
import Articles from './components/Articles'
import {Route,Switch} from 'react-router-dom';
import AddArticle from './components/AddArticle'
import Article from './components/Article'
import EditArticle from './components/EditArticle'
import ArticlesList from './components/ArticlesList'
import Home from './components/Home/Home'


function App(props) {
  const [posts,setPosts] = useState([]);

  useEffect(() =>{
  axios.get('/articles')
       .then(res => setPosts(res.data))
       .catch(error => console.log(error))
  },[props]);

  return (
    <div className="App">
      <Navbar/>
    
      <Switch>
      <Route  exact path='/'   render={() => <Home/>} />
      </Switch>
      <Switch>
      <Route   path='/articles-list'   render={() => <ArticlesList posts={posts} />} />
      </Switch>
      <Switch>
      <Route  path='/articles'   render={() => <Articles posts={posts} />} />
      </Switch>
      <Switch>
      <Route  path='/article/:id'   render={(props) => <Article {...props} posts={posts} />} />
      </Switch>
      <Switch>
      <Route  path='/update/:id'   render={(props) => <EditArticle {...props} posts={posts} />} />
      </Switch>
      <Switch>
      <Route path='/add-article' component={AddArticle} />
      </Switch>
     
     <br />
    </div>
  );
  
}

export default App;
