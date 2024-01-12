import './App.css';
import Business from './components/Business/Business';
import fakeDataBusiness from './components/Business/fakeData';

// Función para generar una lista de empresas
function generateBusinessList(count) {
  const businessList = [];
  for (let i = 0; i < count; i++) {
    businessList.push(fakeDataBusiness);
  }
  return businessList;
}

const businesses = generateBusinessList(3);
function App() {
  return (
    <div className="App">
      <div className="BusinessContainer">
        {businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div>
    </div>
  );
}

export default App;
