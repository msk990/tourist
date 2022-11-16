import { useAppDispatch } from "../../../hooks"
import { changeSelectedImage } from "../SelectedImageSlice"

export const MediaOne = (props:any) => {
    const dispatch = useAppDispatch()
    const media = props.media
    const imgPath = '/imgs/'
    const handleClick = (value: any) => () => {
       // alert(value)
        dispatch(changeSelectedImage({src:value, open:true}))
    }
    return (
        <div onClick = {handleClick(media[0].src)}>
        <img src={imgPath+media[0].src} alt={media[0].src} />
        </div>
    )
}