import React from 'react'
import appwriteService from '../appwrite/configdb'
import { Link } from 'react-router-dom';


function PostCard({$id,title,featuredImage}) {
  return (
      <Link to={`/post/${$id}`}>
          <div className=' w-full bg-sycamore-100 rounded-xl p-4'>
              <div className=' w-full justify-center mb-4'>
                  <img src={ appwriteService.getFilePreview(featuredImage)} alt='{title}' className='rounded-xl' />
              </div>
              <h2
                  className='text-xl font-bold text-sycamore-900'
              >{title}</h2>
          </div>
          
    </Link>
  )
}

export default PostCard