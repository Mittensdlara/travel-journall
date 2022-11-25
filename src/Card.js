import locIcon from './loc-icon.png'
import './Cards.css'


export default function Card(props) {
    return (
   <div className="card"> 
          <img src={props.item.imageUrl} alt="..." className='location-img'/>
     <div className='wrapper'>   
       <div className='card--top'>
           <img src={locIcon} alt="..." className='loc-icon'/>
           <span className='location'>{props.item.location}</span>
           <a href={props.item.googleMapsUrl} className='map'>View on Google Maps</a>
       </div>
       <div className='card--bottom'>
           <h1 className='title'>{props.item.title}</h1>
           <h3 className='date'>{props.item.startDate}-{props.item.endDate}</h3>
           <p className='description'>{props.item.description}</p>
     </div>
    </div> 
     </div>
    )
}


