import { Container } from "react-bootstrap"
import { ReviewComponent } from "../../../common/review-component/ReviewComponent"

export const MenuReviews = () => {
    const reviews = [
        {
            "id": "1",
            "product":"345",
            "name":"Nedine",
            "picture": "irrigation.png",
            "date": "12 August 2022",
            "text":"Awww, this salad was so good! The tomatoes were delicios!!! And they help a/st sunburn :)))",
            "rating": "5"
        },
        {
            "id": "2",
            "product":"345",
            "name":"Alice",
            "picture": "irrigation.png",
            "date": "12 August 2022",
            "text":"",
            "rating": "5"
        }
    ]
    return(
        <>
       
    
       <div className="reviews-container">

        {
            reviews.map((review) =>(
                <ReviewComponent review={review} />
            ))
        }

        </div>
        </>
    )
}