
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'

import { Badge } from 'react-bootstrap';
import Bistro from '../../../common/markers/Bistro';
import Tomato from '../../../common/markers/Tomato';
import { MapItem } from '../../../interfaces/MapItem';
import { MapMarker } from '../../../common/map-marker/MapMarker';

const Marker = ({text}: any) => <div><Tomato width="50px"/></div>

const IngredientsMap = (props: any) => {

 // const { data, error, isLoading } = useGetFarmInfoQuery()

  // const [center, setCenter] = useState({lat: 42.5028, lng: 27.4626 });
   // const [zoom, setZoom] = useState(11);
//console.log(data);

//let content


 // console.log(data.latt)
 const items:MapItem[] = [
  {
    "id": "11111",
    "name": "HOB Organic",
    "icon": "vegetable",
    "latt": "42.564559",
    "longt":"27.537070"
  },
  {
    "id": "22222",
    "name": "Debelt Dairy",
    "icon": "cheese",
    "latt": "42.40633895825479",
    "longt":"27.275389523375587"
  },
  
 

  {
    "id": "77777",
    "name": "Totevi Family Farm",
    "icon": "herb",
    "latt":"42.523698999093185",
    "longt":"27.24382381809205"
  }
 
  
  
]
 const latt = Number("42.54")
 const longt = Number("27.40")
   const center = {lat:latt, lng:longt}
  const zoom = 10
const content = 
   <div className="mt-0" style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCpZEaHH1Zv3Jx8E4nEDiUhxFfBE5AYhhU' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {/* <Marker
            lat={latt}
            lng={longt}
            text="Jujeeeee"
          /> */}
           {
           items.map((item:MapItem) => (
            <MapMarker
            key={item.id}
            lat={item.latt}
            lng={item.longt}
            item={item}
           />
           ))
            
           }
        </GoogleMapReact>
      </div>


    return (
      <>
     
     {content}
     </>
    );
}

export default IngredientsMap;