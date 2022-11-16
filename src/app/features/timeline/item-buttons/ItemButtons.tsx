import { DataButton } from "../../../common/ux/data-button/DataButton"
import { DocumentButton } from "../../../common/ux/document-button/DocumentButton"
import { EquipmentButton } from "../../../common/ux/equipment-button/EquipmentButton"
import { InputButton } from "../../../common/ux/input-button/InputButton"
import { OutputButton } from "../../../common/ux/output-button/OutputButton"

export const ItemButtons = () => {
    return(
        <div className="col-lg-5 mt-3 d-flex justify-content-around">
        <EquipmentButton /> 
        <InputButton />
        <OutputButton />
        <DataButton /> 
        <DocumentButton />
       
    </div>
    )
}