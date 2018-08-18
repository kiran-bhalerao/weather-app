
import React from 'react';
import MapmyIndia, {MapMarker} from 'react-mapmyindia'
 
class SimpleMap extends React.Component {
     render () {
         return (
         	<div>
         	<MapmyIndia height= {'200px'} width={'300px'} zoom={2} >
             	<MapMarker position = {[this.props.lat,this.props.lng]} popupContent = {this.props.address} />
             </MapmyIndia>
               <div style={{marginRight : '50px', paddingTop:'20px',fontSize:'17px'}}>{this.props.address}</div>
             </div>
         )
     }
}

export default SimpleMap;






// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 12
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       //style={{ height: '100vh', width: '100%' }}
//       <div>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBwtWLk5h6Z6wBE7BG0beEXhtQ2pcNCD9k'}}
//           defaultCenter={{lat: this.props.lat,lng: this.props.lng}}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
