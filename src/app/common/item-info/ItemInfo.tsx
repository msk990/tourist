import Bistro from "../markers/Bistro"
import Farm from "../markers/Farm"
import Tomato from "../markers/Tomato"
import { Rating } from "../rating/Rating"
import ArrowRight from "../ux/arrow-right/ArrowRight"

export const ItemInfo = (props:any) => {
    const company = props.company
    const companyType = props.comtype
    const name = props.name
    const description = props.description
    const price = props.price
    return(
        <>
           <section className="menu-item-info">

<div className="company-link">
    {companyType === "bistro" ? (
        <Bistro width="36px" className="me-2"/> 
    ) : companyType === "farm" ? (
        <Farm width="36px" className="me-2"/> 
    )
    :  (
        <Bistro width="36px" className="me-2"/> 
    )
    }
    
    <div className="fw-bold d-inline pt-5">{company}</div>
    <div className="cnt-right">
        
    <ArrowRight width='26px'/>
        
    </div>
</div>

<div className="my-4">
<Rating />
</div>

<p className="fw-bold">{name}</p>
<p>buffalo heart tomatoes, red & yellow cherry tomatoes, buffalo cheese, basil</p>
{price ? (
  <div className="menu-item-price fw-bold my-4">{price} €</div>  
) : null}


</section>
        </>
    )
}