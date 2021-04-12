import React from 'react';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapGL from 'react-map-gl';


class Map extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 39.059811,
        longitude: -106.311104,
        zoom: 7,
        bearing: 0,
        pitch: 0
      }
    }
  };


  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={}
        />
    )
  }
}




// mapboxgl.workerClass = MapboxWorker
// mapboxgl.accessToken = WOULD NEET TOKEN


// class Map extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       lng: -105.358887,
//       lat: 39.113014,
//       zoom: 6
//     };
//     this.mapContainer = React.createRef();
//   }


//   componentDidMount() {
//     // mapboxgl.workerClass = MapboxWorker;
//     const { lng, lat, zoom } = this.state;
//     const map = new mapboxgl.Map({
//       container: this.mapContainer.current,
//       style: 'mapbox://styles/mapbox/outdoors-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });
//   }

//   render () {
//     const { lng, lat, zoom } = this.state;
//       return (
//         <div className="map-container">
//             <div ref={this.mapContainer} className='map' />
//         </div>
//       )
//   }
// };

export default Map;