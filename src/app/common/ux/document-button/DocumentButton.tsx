import { ReactComponent as DocumentIcon} from '../../../../assets/ux/doc.svg';
import '../Buttonz.css'
export const DocumentButton = () => {
    return(
    <div className="icn-button">
        <div className="icn-img">

        <DocumentIcon className="d-block m-auto"/>
        </div> 
        <span className="fs-13">Document</span>
    </div>
    )
}