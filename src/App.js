import './App.css';
import Slider2 from './componentes/Slider';
import Caja from './componentes/Caja';
import Caja2 from './componentes/Caja2';
import Caja3 from './componentes/Caja3';
import Texto from './componentes/Texto';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
        <Slider2/>
        <div className='contenedorCaja'>
          <Caja/>
          <Caja3/>
          <Caja2/>
        </div>
          <Texto/>
        <Footer/>
    </div>
  );
}

export default App;
