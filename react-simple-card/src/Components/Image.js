import React from 'react';

const Image = ({ url }) => {
  return <img style={{height:"150px", paddingRight:"30px"}} src={url} alt="Card" />;
};

export default Image;