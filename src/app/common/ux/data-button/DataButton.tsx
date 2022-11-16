import { ReactComponent as DataIcon} from '../../../../assets/ux/data.svg';
import '../Buttonz.css'
export const DataButton = () => {
    return(
        <div className="icn-button">
        <div className="icn-img">

        <DataIcon className="m-auto"/>
        </div> 
       <span className="fs-13">Data</span>
    </div>
    )
}