import { useState } from "react";
import '../styles.css'

const EventCard = ({ title, location, start, end }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <>
    <div className="card" style={{padding: "10px 10px"}}>
        <div className="flexStart">
            <div style={{width:"5px", background:"rgb(0 201 143)", height: "50px", borderRadius: "10px", marginRight:"10px"}}> </div>
            <div style={{width: "-webkit-fill-available"}}>
            <div className="flexBetween">
                <h3 className="m-0">{title}</h3>
                <p className="m-0"style={{fontWeight:"700"}}>10:00 AM</p>
            </div>
            <div className="flexBetween">
                <h4 className="m-0" style={{fontWeight:"700", color:"grey"}}>{location}</h4>
                <p className="m-0" style={{fontWeight:"700", color:"grey"}}>11:00 AM</p>
            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EventCard;
