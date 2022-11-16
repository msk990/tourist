import Rakia from "../../../common/drinks/Rakia"
import Wine from "../../../common/drinks/Wine"

export const PairWith = (props:any) => {
    return (
        <>
        <div className="pair-item">
            {props.type == "rakia" ? 
                (
                     <div className="float-start">
                <div>
                <Rakia width="32px" />
                </div>
                <div className="fw-bold mt-2">
                    rakia
                </div>
            </div>
                )   :
                (
                    <div className="float-start">
                    <div>
                    <Wine width="32px" />
                    </div>
                    <div className="fw-bold mt-2">
                        wine
                    </div>
                </div>
                )
        }
           
            <div className="ms-4 float-start w-50">
            {props.name}
            </div>

        </div>
        </>
    )
}