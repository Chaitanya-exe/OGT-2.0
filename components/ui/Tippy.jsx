import React from 'react'
import Tippy from "@tippyjs/react"
import "tippy.js/animations/scale.css";

const TippyUi = ({content,children,position}) => {
  return (
    <Tippy
       content={content}
      interactive={true}
      animation="scale"
      theme="custom-tooltip"
      arrow={false}
      placement={position}
      // trigger='click'
    >
     {children}
    </Tippy>
  
  )
}

export default TippyUi
