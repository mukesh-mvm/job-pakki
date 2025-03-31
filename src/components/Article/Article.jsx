import React from 'react'
import { ArticleHome } from './ArticleHome';
import Header from '../header/Header';
import Navbar from '../header/Navbar'
 const Article = ({data}) => {
  return (
    <div>
        <Header />
        <Navbar />
        <ArticleHome data={data}/>
       
        
    </div>
  )
}


export default  Article;