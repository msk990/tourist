export const UserInputHeader = (props:any) => {

    const imgPath = '/imgs/'
    
    return(
        <>
        <div className="user-input-header">
        <img src={imgPath+props.picture}  /> 
        <div className="d-inline ms-4">
            <div className="fw-bold">{props.name}</div>
            <div>{props.date}</div>
            
        </div>
        </div>
        </>
    )
    
}