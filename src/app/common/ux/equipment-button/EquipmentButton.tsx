import { ReactComponent as EquipmentIcon} from '../../../../assets/ux/equip.svg';
import '../Buttonz.css'
export const EquipmentButton = () => {
    return(
    <div className="icn-button">
        <div className="icn-img">

        <EquipmentIcon className="d-block m-auto"/>
        </div> 
        <span className="fs-13">Equipment</span>
    </div>
    )
}