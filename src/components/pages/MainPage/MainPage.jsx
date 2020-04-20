import React, {useContext, useEffect, useReducer, useState} from 'react';
import './MainPage.scss'
import WithCommonService from "../../hoc/WithCommonService";
import compose from "../../../utils";
import {connect, useDispatch, useSelector} from "react-redux";
import {MainBlock} from "./Modules/MainBlock/MainBlock";
import {creatPosts, getNewExhibitions} from "../../../actions"
import {InterestingNow} from "./Modules/InterestingNow/InterestingNow";
import {NewExhibitions} from "./Modules/NewExhibitions/NewExhibitions";




 const MainPage = (props) =>  {
   // useDispatch
   const dispatch = useDispatch();

   //useState
   const [posts, setPosts] = useState([])

   // useSelector
   const loader = useSelector(state => state.app.loading)
   const postsFetch = useSelector(state => state.posts.fetchedPosts)
   const exhibitions = useSelector(state => state.newExhibitions.exhibitions)

   useEffect(() => {
     dispatch(getNewExhibitions())
   }, [])


   useEffect(() => {
     setPosts(postsFetch)
   }, [postsFetch])

   const getAllPost = () => {
     dispatch(creatPosts())
   }

   return (
     <div className='Main-page'>
        <div className='Main-page-root'>
          <MainBlock/>
          <InterestingNow loader={loader} getAllPost={getAllPost} posts={posts}/>
          <NewExhibitions exhibitions={exhibitions}/>
        </div>
     </div>
    )
}

export default compose(
  WithCommonService(),
)(MainPage);