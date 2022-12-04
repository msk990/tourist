import GoogleMapReact from "google-map-react"
import { useNavigate } from "react-router-dom"
import { MapMarker } from "../../../common/map-marker/MapMarker"
import { MapItem } from "../../../interfaces/MapItem"
import ChibiEvents from "../ChibiEvents"



export const HomeMap = () => {
    const navigate = useNavigate()
    const handleClick = () => {
       // alert(`${company.id}`)
      // dispatch(changeSelectedIngredient({id:item.id, open:true}))
       navigate('../events')
      
    }
    const items:MapItem[] =[
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
          "id": "33333",
          "name": "Red Fox",
          "icon": "bistro",
          "latt":"42.49608770534761",
          "longt":"27.470057166901764"
        },
        {
          "id": "44444",
          "name": "Zlatna Ribka",
          "icon": "bar",
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
        {
          "id": "77777",
          "name": "Totevi Family Farm",
          "icon": "herb",
          "latt":"42.523698999093185",
          "longt":"27.24382381809205"
        },
        {
          "id": "88888",
          "name": "Pomorie Winery",
          "icon": "drink",
          "latt":"42.588146",
          "longt":"27.577193"
        }
        
        
      ]

    const latt = 42.5028
    const longt = 27.4626
      const center = {lat:latt, lng:longt}
     const zoom = 11

     
     const content = 
     <div className="wrapper" style={{ height: '100vh', width: '100%' }}>
            
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCpZEaHH1Zv3Jx8E4nEDiUhxFfBE5AYhhU' }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            
         {
           items.map((item:MapItem) => (
            <MapMarker
            key={item.id}
            lat={item.latt}
            lng={item.longt}
            item={item}
            noClick={true}
           />
           ))
            
           }
             
          </GoogleMapReact>
          <div className="over_map" onClick={handleClick}>
<ChibiEvents className="" />
<div className="chibbi-button fw-bold">EVENTS</div>
</div>
        </div>
    return(
        <>
        {content}
        </>
    )

}