
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';











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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
