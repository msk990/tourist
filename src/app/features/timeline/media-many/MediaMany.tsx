import { useAppDispatch } from "../../../hooks"
import { changeSelectedImage } from "../SelectedImageSlice"

export const MediaMany= (props:any) => {
    const dispatch = useAppDispatch()
    const media = props.media
    const imgPath = '/imgs/timeline/'
    const handleClick = (value: any) => () => {
       // alert(value)
        dispatch(changeSelectedImage({src:value, open:true}))
    } 
    return(
        <>
        <div className="media-container-5">
            <div className="pic-two" onClick = {handleClick(media[0].src)}>
            <img  src={imgPath+media[0].src} alt={media[0].src}  />
            </div>
            <div className="pic-two" onClick = {handleClick(media[1].src)}>
            <img  src={imgPath+media[1].src} alt={media[1].src}  />
            </div>
            <div className="pic-two" onClick = {handleClick(media[2].src)}>
            <img  src={imgPath+media[2].src} alt={media[2].src}  />
            </div>
            <div className="pic-two" onClick = {handleClick(media[3].src)}>
            <img  src={imgPath+media[3].src} alt={media[3].src}  />
            </div> 
            <div className="pic-two" onClick = {handleClick(media[4].src)}>
            <img  src={imgPath+media[4].src} alt={media[4].src}  />
            </div>
            
        </div>
        </>
    )
}