import React from 'react';

class App extends React.Component{
constructor() {
   super();
   this.weather = {
      data:
      [
         {
            "image":"cloudy.png",
            "temp":"26",
            "loc":"Delhi"
         },
         {
            "image":"partial-cloudy.png",
            "temp":"28",
            "loc":"Mumbai"
         },
         {
            "image":"rainy.png",
            "temp":"25",
            "loc":"Chennai"
         },
         {
            "image":"sunny.png",
            "temp":"30",
            "loc":"Kolkata"
         }
      ]
   }
}

  render(){
    return(
     <div className="container">
       <div className="col-lg-12" >
       <h2>Responsive Weather Wiget</h2>
       </div>
     {this.weather.data.map((data, i) => <Widget key = {i} data = {data} />)}
     </div>
    );
  }
}

class Widget extends React.Component{
  render() {
    return(
    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3" >
    <div className="widget">
      <div className="image">
        <img src={'images/'+this.props.data.image}/>
      </div>
      <div className="right">
        <div className="temp">
          {this.props.data.temp}° C
        </div>
        <div className="loc">
          {this.props.data.loc}
        </div>
      </div>
    </div>
    </div>
    );
  }
}


export default App;
