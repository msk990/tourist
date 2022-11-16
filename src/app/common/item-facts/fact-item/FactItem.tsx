export const FactItem = (props:any) => {
    return(
        <>
        <div className="fact-item">
        {props.children}
                <div className="d-inline ms-2">{props.name}</div>
               
        </div>
        </>
    )
}