import React from 'react';

const orderItem = ( props ) => {

 const divstyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  minWidth: '40%',
  verticalAlign: 'top',
  };

 return (

   <div style={divstyle}>
      <li>{props.item}: ${props.price}</li> 
   </div>

  );
};

export default orderItem;