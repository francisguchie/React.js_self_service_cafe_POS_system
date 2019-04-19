import React from 'react';

const item = ( props ) => {


  const outputstyle = {
  textAlign: 'center',
  fontSize: '66%',
  color: 'white',
  wordWrap: 'break-word',
  };

  const divstyle = {
  border: '4px solid white',
  display: 'inline-block',
  margin: '3px',
  padding: '3px',
  width: '20%',
  };

  const buttonstyle = {
  border: '1px solid white',
  borderRadius: '0px',
  width: '100%',
  };

 return (

    <div style={divstyle}>
      
      <p style={outputstyle}>{props.name}</p>
      <p>${props.price}</p>
      
      <button 
        style={buttonstyle}
        onClick={props.click}>Add Item
      </button>
    
    </div>

  );
};

export default item;