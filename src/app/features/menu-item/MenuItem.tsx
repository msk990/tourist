import { useState } from 'react'
import { Button, Col, Collapse, Container, Modal, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import Bistro from '../../common/markers/Bistro'
import ArrowDown from '../../common/ux/arrow-down/ArrowDown'
import ArrowRight  from '../../common/ux/arrow-right/ArrowRight'
import Back from '../../common/ux/back/Back'
import { Collapsable } from '../../common/collapsable/Collapsable'

import { ItemFacts } from '../../common/item-facts/ItemFacts'
import { FactItem } from '../../common/item-facts/fact-item/FactItem'
import Sharable from '../../common/descriptive-icons/Sharable'
import Calories from '../../common/descriptive-icons/Calories'
import Weight from '../../common/descriptive-icons/Weight'
import Protein from '../../common/descriptive-icons/Protein'
import NutFree from '../../common/descriptive-icons/NutFree'
import Fat from '../../common/descriptive-icons/Fat'
import SoyFree from '../../common/descriptive-icons/SoyFree'
import Carbohydrates from '../../common/descriptive-icons/Carbohydrates'
import { Stars } from '../../common/rating/Starts'
import { Rating } from '../../common/rating/Rating'
import { PairWith } from './pair-with/PairWith'
import { ItemCategories} from './item-categories/ItemCategories'
import { ItemInfo } from '../../common/item-info/ItemInfo'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeSelectedIngredient, selIngredient } from './SelectedIngredientSlice'
import { Timeline } from '../timeline/Timeline'
import { MenuIngredient } from './menu-ingredient/MenuIngredient'
export const MenuItem = () => {

    const dispatch = useAppDispatch()
    const selectedIng = useAppSelector(selIngredient);
   
    return(
      
        <>
        <Container>
            <div className="top-bar">
                
            <div className="cnt-left">
                <Back width="28px"/>
            </div>
            </div>
            
            <Row>
                <Col className="p-0" md={12} lg={7}>
                    
        
        <section className="menu-item-photo">
            <img src="/imgs/salad-1.jpeg" />
        </section>

            <ItemInfo 
                company="Jolly Roger" 
                comtype="bistro"
                name="TOMATO AND BUFFALO CHEESE SALAD"
                description="buffalo heart tomatoes, red & yellow cherry tomatoes, buffalo cheese, basil"
                price="13.50"
            
            />

        
        
        <Collapsable name="NUTRITION" defaultOpen={false}>
          <ItemCategories />
        </Collapsable>

        <Collapsable name="PAIR WITH" defaultOpen={false} className="br-btm">
            <ItemFacts>
                <PairWith type="rakia" name="Burgas 63 Barrel"/>
                <PairWith type="wine" name="Salty Hills Chardonay"/>
            </ItemFacts>
        </Collapsable>
        <div className="br-btm"></div>
       
<section>
<div className="sticky-top">
        <ul className="tab-list">
  <li className="">
        <NavLink
          to="map"
          className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link inactive')}
        >
           LOCAL INGREDIENTS
          </NavLink>
  </li>
  <li className="">
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link inactive')}
        >
          REVIEWS
          </NavLink>
  </li>
  
  
  
  
</ul>

    <div className="overflow-scroll mt-0 p-0" style={{"height":"85vh"}}>
        <Outlet />
    </div>

    </div>
    </section>

    </Col>
                <Col md={12} lg={5} className="d-none d-lg-block">
                    juje juje
                </Col>
            </Row>

    </Container>
</>
    )
}