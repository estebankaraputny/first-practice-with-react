import './App.css';
import Testimonio from './components/testimonio';


function App() { //Esto es un componente
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios</h1>
        <Testimonio 
          name='Esteban Karaputny'
          country='Argentina'
          job='Front-End Developer'
          imagen='pedro'
          corp='Globant'
          coment='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi officia facere excepturi nostrum nisi, unde dolorum quos velit consequuntur! Sunt, ipsa unde repellat ex error ea! Nisi architecto laboriosam ratione.
          Culpa, laboriosam debitis atque quia voluptatibus deserunt, magnam beatae, quae quod vero harum? Illo error ipsa laudantium nostrum, architecto aliquid odio ut nihil tempore enim pariatur velit accusamus dolor vitae.'
        />
        <Testimonio 
          name='Andres Fernandez'
          country='Brasil'
          job='Back-End Developer'
          imagen='andres'
          corp='Facebook'
          coment='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi officia facere excepturi nostrum nisi, unde dolorum quos velit consequuntur! Sunt, ipsa unde repellat ex error ea! Nisi architecto laboriosam ratione.
          Culpa, laboriosam debitis atque quia voluptatibus deserunt, magnam beatae, quae quod vero harum? Illo error ipsa laudantium nostrum, architecto aliquid odio ut nihil tempore enim pariatur velit accusamus dolor vitae.'
        />
        <Testimonio 
          name='Clara Midu'
          country='España'
          job='Full-Stack Developer'
          imagen='clara'
          corp='Google'
          coment='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi officia facere excepturi nostrum nisi, unde dolorum quos velit consequuntur! Sunt, ipsa unde repellat ex error ea! Nisi architecto laboriosam ratione.
          Culpa, laboriosam debitis atque quia voluptatibus deserunt, magnam beatae, quae quod vero harum? Illo error ipsa laudantium nostrum, architecto aliquid odio ut nihil tempore enim pariatur velit accusamus dolor vitae.'
        /> 
      </div>
    </div>
  );
}

export default App;
