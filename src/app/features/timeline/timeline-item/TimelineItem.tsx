import '../TimelineItem.css'
import { ItemButtons } from '../item-buttons/ItemButtons'
import { ItemTitle } from '../item-title/ItemTitle'
import { ItemComment } from '../item-comment/ItemComment'
import { ItemMedia } from '../item-media/ItemMedia'
import { TimelineItm } from '../../../interfaces/TimelineItem'
import { Modal } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeSelectedImage, selImage } from '../SelectedImageSlice'

interface TmlnItm { 
    item:TimelineItm;
   // media: string
}
export const TimelineItem = (props:TmlnItm) => {
   // const media = props.media
   const dispatch = useAppDispatch()
   const selectedImg = useAppSelector(selImage);

   

    const item = props.item

    const media = item.media
    //console.log(item.title)
    const imgPath = '/imgs/'
    return(
        <>
        <article className="tml-itm border-bottom">
    
        <div className="itm-avatar">
             <img src={imgPath+item.avatar} className="avatar-img" /> 
        </div>
        <div className="itm-content">
           <ItemTitle title={item.title} date={item.date} />
            <ItemComment 
            comment={item.comment} />
           {media.length ? (<ItemMedia media={media}/>) 
           : null}
           
           <ItemButtons />
        </div>

        <Modal show={selectedImg.open} fullscreen="lg-down" size="lg" 
         onHide={() => dispatch(changeSelectedImage({src:'ju', open:false}))}
        >
             <Modal.Header closeButton>
               <Modal.Title>Modal</Modal.Title>
             </Modal.Header>
             <Modal.Body>
             <img src={imgPath+selectedImg.src} alt={selectedImg.src} />
     
             </Modal.Body>
           </Modal> 
    
</article>
        </>
    )
}