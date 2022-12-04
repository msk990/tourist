
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'

import { Badge } from 'react-bootstrap';
import Bistro from '../../../common/markers/Bistro';
import Tomato from '../../../common/markers/Tomato';
import { MapItem } from '../../../interfaces/MapItem';
import { MapMarker } from '../../../common/map-marker/MapMarker';

const Marker = ({text}: any) => <div><Tomato width="50px"/></div>

const IngRestMap = (props: any) => {

 // const { data, error, isLoading } = useGetFarmInfoQuery()

  // const [center, setCenter] = useState({lat: 42.5028, lng: 27.4626 });
   // const [zoom, setZoom] = useState(11);
//console.log(data);

//let content


 // console.log(data.latt)
 const items:MapItem[] = [

    {
      "id": "33333",
      "name": "Red Fox",
      "icon": "bistro",
      "latt":"42.49608770534761",
      "longt":"27.470057166901764"
    },
    {
      "id": "44444",
      "name": "Zlatna Ribka",
      "icon": "restaurant",
      "latt":"42.49274051671182",
      "longt":"27.480103659169288"
    },
    {
      "id": "55555",
      "name": "Jolly Roger",
      "icon": "bistro",
      "latt":"42.48025",
      "longt":"27.46904"
    },
    {
      "id": "66666",
      "name": "Sulo Pub",
      "icon": "bar",
      "latt":"42.660662030591254",
      "longt":"27.734943625499362"
    },
   
    
    
  ]
 const latt = Number("42.49")
 const longt = Number("27.46")
   const center = {lat:latt, lng:longt}
  const zoom = 13
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

export default IngRestMap;