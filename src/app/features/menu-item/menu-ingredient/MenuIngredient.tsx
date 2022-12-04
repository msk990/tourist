import { useState } from 'react'
import { Button, CloseButton, Col, Collapse, Container, Modal, Row } from 'react-bootstrap'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { Collapsable } from '../../../common/collapsable/Collapsable'



import { Rating } from '../../../common/rating/Rating'

import { ItemInfo } from '../../../common/item-info/ItemInfo'


export const MenuIngredient = () => {

    // const dispatch = useAppDispatch()
    // const selectedIng = useAppSelector(selIngredient);
   const media = "tomato-1.jpeg"
   const certificate = "EU-organic.jpg"
   const navigate = useNavigate()

   const handleClose = () => {
    navigate('/menu')
   // window.scrollTo(0, 0);
   }
    return(
      
        <>
        <Container>
        <div className="top-bar">
                
                <div className="cnt-right">
                <CloseButton onClick={handleClose}/>
                </div>
                </div>
            
            <Row>
                <Col className="p-0" md={12} lg={7}>
                    
        
        <section className="menu-item-photo">
            <img src={process.env.REACT_APP_IMG_PATH+media} />
        </section>

            <ItemInfo 
                company="The Shire Agri" 
                comtype="farm"
                name="BUFFALO HEART TOMATO"
                description="buffalo heart tomatoes, red & yellow cherry tomatoes, buffalo cheese, basil"
               
            
            />

        
        
        <Collapsable name="CERTIFICATION" defaultOpen={true}>
       <div className="certificate pb-4 ps-4">
         <img src={process.env.REACT_APP_IMG_PATH+certificate} />
       </div> 
       </Collapsable>

       
        <div className="br-btm"></div>
       
<section>
<div className="sticky-top">
        <ul className="ing-tabs">
  <li className="">
        <NavLink
          to="green"
          className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link  inactive')}
        >
           GREEN
          </NavLink>
  </li>
  <li className="">
        <NavLink
          to="timeline"
          className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link inactive')}
        >
          TIMELINE
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
  <li className="">
        <NavLink
          to="find"
          className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link inactive')}
        >
          FIND
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