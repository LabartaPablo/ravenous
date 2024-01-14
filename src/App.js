import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;