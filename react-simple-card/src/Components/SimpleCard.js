import React, { Component } from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';

class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl } = this.props;
    return (
      <div style={{display:"flex", padding:"30px 10px", width:"80%"}}>

        <Image style={{padding:"30px 0px"}} url={imageUrl} />

        <div>
          <Title text={title} />
          <Description text={description} />
        </div>
        
      </div>
    );
  }
}

export default SimpleCard;