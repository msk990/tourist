import Calories from "../../../common/descriptive-icons/Calories"
import Carbohydrates from "../../../common/descriptive-icons/Carbohydrates"
import Fat from "../../../common/descriptive-icons/Fat"
import NutFree from "../../../common/descriptive-icons/NutFree"
import Protein from "../../../common/descriptive-icons/Protein"
import Sharable from "../../../common/descriptive-icons/Sharable"
import SoyFree from "../../../common/descriptive-icons/SoyFree"
import Weight from "../../../common/descriptive-icons/Weight"
import { FactItem } from "../../../common/item-facts/fact-item/FactItem"
import { ItemFacts } from "../../../common/item-facts/ItemFacts"

export const ItemCategories = () => {
    return(
        <>
          <ItemFacts>
                <FactItem name="sharable among 2">
                    <Sharable width="23px"/>
                </FactItem>
                <FactItem name="436 calories">
                    <Calories width="23px"/>
                </FactItem>
                <FactItem name="350 g">
                    <Weight width="23px"/>
                </FactItem>
                <FactItem name="22 g protein">
                    <Protein width="23px"/>
                </FactItem>
                <FactItem name="nut free">
                    <NutFree width="23px"/>
                </FactItem>
                <FactItem name="40 g fat">
                    <Fat width="23px"/>
                </FactItem>
                <FactItem name="soy free">
                    <SoyFree width="23px"/>
                </FactItem>
                <FactItem name="11 g carbohydrates">
                    <Carbohydrates width="23px"/>
                </FactItem>

            </ItemFacts>
        </>
    )
}