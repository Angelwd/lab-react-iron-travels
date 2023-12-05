import React from 'react'

const TravelCard = ({location}) => {


    const returnDeal = (price =>{
        if(price<=350) {
            return <div className="great">Great Deal</div>}
            else if(price>1500){
                return <div className="Premium"></div>
            }else {
                return null
            }
        }
    })
  return (
    <div className="travel-list">

       {
           locations.map((location) =>{

            return (
                <div className="travel-card" key={location.id}>

                    <img src={location.image} 
                       alt='location' />


                    <div>

                         <h2>{location.
                         destination} ({location.days} Days)</h2>
                         <em>{location.description}
                         </em>

                         <p><span className="strong">Price:
                         </span> {location.totalCost}$</p>

                    </div>

                </div>
  )
}

export default TravelCard
