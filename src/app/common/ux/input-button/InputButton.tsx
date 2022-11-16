import { ReactComponent as InputIcon} from '../../../../assets/ux/input.svg';
export const InputButton = () => {
    return(
        <div className="icn-button">
        <div className="icn-img">
        <InputIcon className="m-auto"/>
        </div> 
        <span className="fs-13">Input</span>
    </div>
    )
}