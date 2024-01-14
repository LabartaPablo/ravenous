import React from 'react';
import Business from '../Business/Business';
import fakeDataBusiness from '../Business/fakeData';

// Función para generar una lista de empresas
function generateBusinessList(count) {
  const businessList = [];
  for (let i = 0; i < count; i++) {
    businessList.push(fakeDataBusiness);
  }
  return businessList;
}

const businesses = generateBusinessList(3);

const BusinessList = () => {
  return (
    <div className="BusinessContainer">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;