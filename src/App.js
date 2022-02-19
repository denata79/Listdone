import './App.css';
import { Dolist } from './Dolist';
import imageOne from './photo-1.jpg';
import imageTwo from './photo-2.jpg'
function App() {
  return (
    <div className='conteiner'>
      <img src={imageOne} width='300px'/>
      <h1>Список дел на день:</h1>
      <Dolist/>
      <img src={imageTwo} width='300px'/>
      
    </div>
  );
}

export default App;
