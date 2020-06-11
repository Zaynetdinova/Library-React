import React, {useContext, useEffect, useReducer, useState} from 'react';
import './MainPage.scss'
import WithCommonService from "../../hoc/WithCommonService";
import compose from "../../../utils";
import {connect, useDispatch, useSelector} from "react-redux";

import {creatPosts, getNewExhibitions} from "../../../Redux/actions"
import {NewExhibitions} from "./Modules/NewExhibitions/NewExhibitions";
import {AllExhibitions} from "./Modules/AllExhibitions/AllExhibitions";
import {MainBlock} from "../../Common-components/MainBlock/MainBlock";




 const MainPage = (props) =>  {
   // useDispatch
   const dispatch = useDispatch();

   //useState
   const [posts, setPosts] = useState([])

   // useSelector
   const loader = useSelector(state => state.app.loading)
   const postsFetch = useSelector(state => state.posts.fetchedPosts)
   const exhibitions = useSelector(state => state.newExhibitions.exhibitions)
   const allExhibitions = useSelector(state => state.allExhibitions.exhibitions)

   // useEffect(() => {
   //   dispatch(getNewExhibitions())
   // }, [])


   useEffect(() => {
     setPosts(postsFetch)
   }, [postsFetch])

   const getAllPost = () => {
     dispatch(creatPosts())
   }

   return (
     <div className='Main-page'>
        <div className='Main-page-root'>

          <div className='Main-page-header'>
            <MainBlock title={'ВИРТУАЛЬНАЯ КНИЖНАЯ ВЫСТАВКА'}/>
          </div>

          <div className='Com-Content-wrapper'>
            <NewExhibitions exhibitions={exhibitions}/>
            <AllExhibitions allExhibitions={allExhibitions}/>
          </div>
        </div>
     </div>
    )
}

export default compose(
  WithCommonService(),
)(MainPage);