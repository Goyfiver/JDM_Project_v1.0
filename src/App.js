import './App.css';
import Footer from './components/Footer';
import Global_Header from './components/Global_Header';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> 
      <Global_Header/>
      <Footer/>
    </div>
  );
}

export default App;
