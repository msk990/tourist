export const ItemTitle = (props:any) => {
    return (
    <div className="itm-title d-flex flex-row">
        <div className="fw-bold pr-2">{props.title}</div> 
        <div className="itm-date px-2 pt-1">{props.date}</div> 
     </div>
    )
}