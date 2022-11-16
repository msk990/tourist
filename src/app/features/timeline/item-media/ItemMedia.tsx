import { MediaFour } from "../media-four/MediaFour"
import { MediaMany } from "../media-many/MediaMany"
import { MediaOne } from "../media-one/MediaOne"
import { MediaThree } from "../media-three/MediaThree"
import { MediaTwo } from "../media-two/MediaTwo"

export const ItemMedia = (props:any) => {
    const media = props.media
    return(
        <>
        { (media.length == "1") ? (
            <MediaOne media={media} />
        ) : 
        (media.length == "2") ? (
            <MediaTwo media={media} />
        ) 
        : 
        (media.length == "3") ? (
            <MediaThree media={media} />
        ) 
        : 
        (media.length == "4") ? (
            <MediaFour media={media}  />
        ) 
        : 
        (media.length == "5") ? (
            <MediaMany media={media}  />
        ) 
        : null } 
        
        </>
    )
}