import React from 'react'
import './InterestingNow.scss'
import {Loader} from "../../../../Common-components/loader/Loader";

export const InterestingNow = (props) => {

  const {posts, loader, getAllPost} = props
  function showPosts() {
    return (
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>{post.title}</div>
          )
        })}
      </div>
    )
  }
  return (
    <div className='Interesting-now'>
      <div className='Interesting-now-root'>
        <a onClick={() => getAllPost()} className="waves-effect waves-light btn-small">ЗАГРУЗИТЬ все книги</a>
      </div>
      {loader ? <Loader/> : null}
      {!posts.length ? null : showPosts()}
    </div>
  )
}