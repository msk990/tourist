
import { useAppDispatch } from "../../hooks"
import { changeSelectedIngredient } from "../../features/menu-item/SelectedIngredientSlice"
import Wine from "../drinks/Wine"
import Bar from "../markers/Bar"
import Basil from "../markers/Basil"
import Bistro from "../markers/Bistro"
import Cheese from "../markers/Cheese"
import Restaurant from "../markers/Restaurant"
import Tomato from "../markers/Tomato"
import { useNavigate } from "react-router-dom"



export const MapMarker = (props:any) => {
    
    const item = props.item
    const icon = item.icon
    const noClick = props.noClick

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        if(!noClick) {
       // alert(`${company.id}`)
       dispatch(changeSelectedIngredient({id:item.id, open:true}))
       navigate('../../ingredient')
       window.scroll({top: 0, left: 0, behavior:'auto'})
    }
    }
return(
    <>
    <div onClick={handleClick}>
   {icon == 'vegetable'? (<div><Tomato width="50px"/></div>) 
   : icon == 'cheese'? (<div><Cheese width="50px"/></div>)
   : icon == 'herb'? (<div><Basil width="50px"/></div>)
   : icon == 'drink'? (<div><Wine width="50px"/></div>)
   : icon == 'bistro'? (<div><Bistro width="50px"/></div>)
   : icon == 'bar'? (<div><Bar width="50px"/></div>)
   : icon == 'restaurant'? (<div><Restaurant width="50px"/></div>)
    : (<div><Wine className="" size={30} /></div>)
}
</div>
    </>
)
}