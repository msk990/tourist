import { useState } from "react";
import { Button, Collapse } from "react-bootstrap"
import Bistro from "../markers/Bistro";
import ArrowDown from "../ux/arrow-down/ArrowDown";
import ArrowRight from "../ux/arrow-right/ArrowRight";
import ArrowUp from "../ux/arrow-up/ArrowUp";

export const Collapsable = (props:any) => {

    const [open, setOpen] = useState(props.defaultOpen);
    const name = props.name
 

    
    return(
        <>
        {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}
<section>
      <div className="collapse-anchor"
       onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
       aria-expanded={open}

      >
                
                <div className="fw-bold py-2">{name}</div>
                <div className="cnt-right">
                 {open ? (<ArrowUp width='26px'/>):(<ArrowDown width='26px'/>)}   
                
                    
                </div>
            </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
        {props.children}
        </div>
      </Collapse>
      </section>
      </>
    )
}