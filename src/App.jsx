
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';
import TabButton from './components/TabButton.jsx';











function App() {
  return (
    <div>
      <Header/>
      <main>

        <section id="core-concepts">
          
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
           

          </ul>
        </section>
        
        <section id="examples">
            <menu>
             <TabButton>Components</TabButton>
             <TabButton>JSX</TabButton>
             <TabButton>Props</TabButton>
             <TabButton>State</TabButton>
            </menu>


        </section>



      </main>
    </div>
  );
}

export default App;
