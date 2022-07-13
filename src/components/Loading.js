import React from 'react'
import { Spinner } from "reactstrap";
import '../Styles/Loading.css';


const Loading = () => {
  return (
    <div className='ldSpinner'>
        <Spinner color="primary" className='spinner'/>
    </div>
  )
}

export default Loading