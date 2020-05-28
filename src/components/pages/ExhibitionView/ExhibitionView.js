import React from 'react'

import './ExhibitionView.scss'
import {MainBlock} from "../../Common-components/MainBlock/MainBlock";
import ExhibitionContent from "./Modules/ExhibitionsContent";

const ExhibitionView = () => {
  return (
    <div className='Exhibition-view'>
      {/*перенести в app*/}
      <div className='main-block'>
        <MainBlock title={'Солдаты родины моей'}/>
      </div>
      <div className='Com-Content-wrapper'>
        <ExhibitionContent/>
      </div>
    </div>
  )
}

export default  ExhibitionView