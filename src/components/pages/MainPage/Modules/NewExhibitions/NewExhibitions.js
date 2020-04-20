import React from 'react'
import {Loader} from "../../../../Common-components/loader/Loader";

export const NewExhibitions = ({exhibitions}) => {

  if (exhibitions.length) {
    return (
      <div>
        {exhibitions.map((item) => {
          return (
            <div key={item.id}>{item.title}</div>
          )

        })}
      </div>
    )
  } else {
    return (
      <div><Loader/></div>
    )
  }
}