import React from "react";
import Business from "../Business/Business";


const BusinessList = ({ prop }) => {
    return (
      <div className="BusinessList">
        {businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div>
    );
  };
  
  export default BusinessList;