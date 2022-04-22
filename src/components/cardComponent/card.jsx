import React from "react";

import CardBody from "./cardBodyComponent/cardBody";



const Card = props => {
  return <article className="card">
        

        <div className="card-body">
          

          <CardBody id={props.id} name={props.name} type={props.type} city={props.city} street={props.street} address_2={props.address_2} address_3={props.address_3} state={props.state} country_province={props.country_province} postal_code={props.postal_code} address={props.address} website={props.website} latitude={props.latitude} longitude={props.longitude} />
          
        </div>
      </article>;
};
export default Card;
