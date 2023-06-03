import React from 'react'
import {Article} from "../../components"
import{
  blog_1_photo,
  blog_2_photo,
  blog_3_photo,
  blog_4_photo,
  blog_5_photo
}from "./imports"
import "./blog.css"

const Blog = () => {
  return (
    <div className='gpt3__blog  section__padding' id="blog" >
   <div className='gpt3__blog-heading'>
    <h1 className="gradient__text">
    A lot is happening, <br /> We are blogging about it.
    </h1>
    </div>    
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog_1_photo} date="Sep 23 , 2021"  title="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
      </div>
      <div className="gpt3__blog-container_groupB">
      <Article  imgUrl={blog_2_photo} date="Nov 22 , 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      <Article  imgUrl={blog_3_photo} date="Dec 2 , 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      <Article  imgUrl={blog_4_photo} date="Sep 2 , 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      <Article  imgUrl={blog_5_photo} date="Oct 23 , 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
    </div>
  )
}

export default Blog
