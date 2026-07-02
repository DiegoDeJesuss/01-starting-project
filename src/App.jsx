import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];



function Header() {
const description = reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)];


  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}


function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt='...' />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}




function App() {
  return (
    <div>
      <Header/>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept title = "Components" description = "The building blocks of a React application"  image={componentsImg} />
            <CoreConcept title = "Props" description = "Short for properties, used to pass data between components"  image={componentsImg} />
            <CoreConcept title = "Diego" description = "um programador dos bons" image={componentsImg} />
           
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
