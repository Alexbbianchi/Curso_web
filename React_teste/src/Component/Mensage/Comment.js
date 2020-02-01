import React from 'react';
import '../Style.css'

const Comment = ({text}) => {
  return (
    <p className="comment" >{ text }</p>
  );
}
export default Comment