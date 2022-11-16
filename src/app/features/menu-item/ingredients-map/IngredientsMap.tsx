
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'

import { Badge } from 'react-bootstrap';
import Bistro from '../../../common/markers/Bistro';
import Tomato from '../../../common/markers/Tomato';

const Marker = ({text}: any) => <div><Tomato width="50px"/></div>

const IngredientsMap = (props: any) => {

 // const { data, error, isLoading } = useGetFarmInfoQuery()

  // const [center, setCenter] = useState({lat: 42.5028, lng: 27.4626 });
   // const [zoom, setZoom] = useState(11);
//console.log(data);

//let content


 // console.log(data.latt)
 const latt = Number("42.564559")
 const longt = Number("27.537070")
   const center = {lat:latt, lng:longt}
  const zoom = 11
const content = 
   <div className="mt-0" style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCpZEaHH1Zv3Jx8E4nEDiUhxFfBE5AYhhU' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={latt}
            lng={longt}
            text="Jujeeeee"
          />
        </GoogleMapReact>
      </div>


    return (
      <>
     
     {content}
     </>
    );
}

export default IngredientsMap;