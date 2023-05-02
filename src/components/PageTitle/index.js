import React from "react";
import './styles.scss'

const PageTitle = (props) => {
  return (
    <div className="page-title">
      {props.pageTitle}
    </div>
  )
}

export default PageTitle;