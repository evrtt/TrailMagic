import React from 'react';

class FillerContent extends React.Component {
   constructor(props) {
     super(props)
   } 


   
   render() {
     let klass = "resize-big"
     if(this.props.ui.width < 800) {
       klass = "resize-small"
     } else if(this.props.ui.width > 800) {
       klass = "resize-big"
     }
     
    return(
    <div className={klass}>
      <span>
        <h1> 0.012k</h1>
        <h4>curated trails</h4>
        <p>See twelve trails that I've personally hiked and photos of them taken on my phone.</p>
      </span>
      <span>
        <h1>0 mil</h1>
        <h4>fellow explorers</h4>
        <p>This app is extremely niche. You basically have the entire place to yourself. </p>
      </span>
      <span>
        <h1>#0001</h1>
        <h4>Website Made</h4>
        <p>This is the first web application I have made. I hope you like it!</p>
      </span>
    </div>
    )
  }
  
};

export default FillerContent;