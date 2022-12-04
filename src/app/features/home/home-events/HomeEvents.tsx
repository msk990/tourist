import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import ChibiEvents from "../ChibiEvents";
export const HomeEvents = () => {
    const imgPath = '/imgs/events/'
    const navigate = useNavigate()

    const handleClick = () => {
        // alert(`${company.id}`)
       
        navigate('../menu')
       
     }
     const handleChibiClick = () => {
        // alert(`${company.id}`)
       
        navigate('../map')
       
     }

    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        700: 2,
       // 500: 1
      };

    const items = [
        {
            "id":"6",
            "text":"poochie!",
            "src":"brunch.jpg"
        },
        {
            "id":"8",
            "text":"poochie",
            "src":"mussels.jpg"
        },
        {
            "id":"1",
            "text":"Hello poochie",
            "src":"poochie.jpg"
        },
        {
            "id":"2",
            "text":"This is dwarf",
            "src":"tomato-night.jpg"
        },
        {
            "id":"4",
            "text":"So nice to have you back",
            "src":"salad-1.jpeg"
        },
         {
            "id":"9",
            "text":"I can tell",
            "src":"goat-cheese2.jpg"
        },
       
        {
            "id":"7",
            "text":"you are looking swell",
            "src":"pumpkins.jpg"
        },
        {
            "id":"11",
            "text":"you are looking swell",
            "src":"melons.jpg"
        }
        
     
      

    ]
    
    return(
        <>
        <div className="sticky-top">
        <div className="over_map" onClick={handleChibiClick}>
<ChibiEvents className="" />
<div className="chibbi-button fw-bold">MAP</div>
</div>
        </div>
        <div className="position-relative mt-5">
         <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>


{items.map((item) => (
  <div key={item.id} className="juje" onClick={handleClick}>
    <img src={imgPath+item.src} />
    {/* <p className="fw-bold">{item.text}</p> */}
  </div>
))}
</Masonry>

        </div>

        </>
    )
}