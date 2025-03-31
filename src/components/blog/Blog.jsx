import React from 'react'
import { BlogHome } from './BlogHome'
import Header from '../header/Header'
import Navbar from '../header/Navbar'
export const Blog = ({cards}) => {
    return (
        <div>
            <Header />
            <Navbar />
            <BlogHome cards={cards}/>

        </div>
    )
}
