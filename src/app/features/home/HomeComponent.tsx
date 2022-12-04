import { Container } from "react-bootstrap"
import './Masonry.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Outlet } from "react-router-dom"
import Logo from "../../common/Logo"

library.add(faCheckSquare, faCoffee, faMapLocation)

export const HomeComponent = () => {
    return(
        <>
        <Container className="p-0">
          <div className="top-bar">
                
                <div className="cnt-right">
                <Logo width="70px" />
                </div>

            </div>
          
  
        <Outlet />

        </Container>
        </>
    )
}