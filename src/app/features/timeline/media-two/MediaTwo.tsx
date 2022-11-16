import { useAppDispatch } from "../../../hooks"
import { changeSelectedImage } from "../SelectedImageSlice"

export const MediaTwo = (props:any) => {
    const dispatch = useAppDispatch()
    const media = props.media
    const imgPath = '/imgs/'
    const handleClick = (value: any) => () => {
       // alert(value)
        dispatch(changeSelectedImage({src:value, open:true}))
    }
    return(
        <>
        <div className="media-container">
            <div className="pic-two" onClick = {handleClick(media[0].src)}>
            <img  src={imgPath+media[0].src} alt={media[0].src}  />
            </div>
            <div className="pic-two" onClick = {handleClick(media[1].src)}>
            <img  src={imgPath+media[1].src} alt={media[1].src}  />
            </div>
        </div>
        </>
    )
}