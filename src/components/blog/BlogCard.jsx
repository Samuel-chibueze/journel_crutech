import React from "react"
import { blog } from "../../dummydata"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <h4>{val.author}</h4>
            <h4>{val.Journal_Volume}</h4>
            <h4>{val.date_published}</h4>
            <h4>{val.Issue_No}</h4>
            <h4>{val.pages}</h4>
            <h1>{val.title}</h1>
            
            <p>{val.desc}</p>

          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
