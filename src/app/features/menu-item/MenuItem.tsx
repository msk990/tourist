import { useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import Bistro from '../../common/markers/Bistro'
import ArrowDown from '../../common/ux/arrow-down/ArrowDown'
import ArrowRight  from '../../common/ux/arrow-right/ArrowRight'
import Back from '../../common/ux/back/Back'
import { Collapsable } from '../../common/collapsable/Collapsable'
import './TabStyle.css'
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
export const MenuItem = () => {
   
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

        <section className="menu-item-info">

            <div className="company-link">
                <Bistro width="36px" className="me-2"/> 
                <div className="fw-bold d-inline pt-5">Jolly Roger</div>
                <div className="cnt-right">
                    
                <ArrowRight width='26px'/>
                    
                </div>
            </div>
            <div className="my-4">
            <Rating />
            </div>

            <p className="fw-bold">TOMATO AND BUFFALO CHEESE SALAD</p>
            <p>buffalo heart tomatoes, red & yellow cherry tomatoes, buffalo cheese, basil</p>

            <div className="menu-item-price fw-bold my-4">13.50 €</div>

        </section>

        
        
        <Collapsable name="NUTRITION">
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
        </Collapsable>

        <Collapsable name="PAIR WITH" className="br-btm">
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