
import { Stars } from "../rating/Starts"
import { UserInputHeader } from "../user-input-header/UserInputHeader"

export const ReviewComponent = (props:any) => {
    const review = props.review
    return (
        <>
        
        <div className="review-item">
        
            
             <UserInputHeader name={review.name} date={review.date} picture={review.picture}/>

             <div className="my-2">
             <Stars />
             </div>
             <div>
                {review.text}
             </div>
               
        </div>
        </>
    )
}