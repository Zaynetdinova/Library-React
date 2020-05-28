import React from 'react';
import  { CommonConsumer } from  '../context/Context';

const WithCommonService = () => (Wrapped) => {
  return(props) => {
    return (
      <CommonConsumer>
        {
          (CommonService) => {
            return (
              <Wrapped {...props} CommonService={CommonService}/>
            )
          }
        }
      </CommonConsumer>
    )
  }
};

export default  WithCommonService;