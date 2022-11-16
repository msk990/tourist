import { ReactComponent as OutputIcon} from '../../../../assets/ux/output.svg';
export const OutputButton = () => {
    return(
        <div className="icn-button">
        <div className="icn-img">
        <OutputIcon className="m-auto"/>
        </div> 
        <span className="fs-13">Output</span>
    </div>
    )
}