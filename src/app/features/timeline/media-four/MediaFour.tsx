import { useAppDispatch } from "../../../hooks"
import { changeSelectedImage } from "../SelectedImageSlice"

export const MediaFour = (props:any) => {
    const dispatch = useAppDispatch()
    const media = props.media
    const imgPath = '/imgs/'
    const handleClick = (value: any) => () => {
       // alert(value)
        dispatch(changeSelectedImage({src:value, open:true}))
    }
    return(
        <>
        <div className="media-container-4">
            <div  onClick = {handleClick(media[0].src)}>
            <img  src={imgPath+media[0].src} alt={media[0].src}  />
            </div>
            <div onClick = {handleClick(media[1].src)}>
            <img  src={imgPath+media[1].src} alt={media[1].src}  />
            </div>
            <div onClick = {handleClick(media[2].src)}>
            <img  src={imgPath+media[2].src} alt={media[2].src}  />
            </div>
            <div onClick = {handleClick(media[3].src)}>
            <img  src={imgPath+media[3].src} alt={media[3].src}  />
            </div>
        </div>
        </>
    )
}