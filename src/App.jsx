
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';
import TabButton from './components/TabButton.jsx';











function App() {

function handleSelect(selectedButton) {
  console.log(selectedButton);
}



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
             <TabButton onSelect= {() => handleSelect('Components')}>Components</TabButton>
             <TabButton onSelect={ () => handleSelect('JSX') }>JSX</TabButton>
             <TabButton onSelect={ () => handleSelect('Props') }>Props</TabButton>
             <TabButton onSelect={ () => handleSelect('State') }>State</TabButton>
            </menu>

            Dynamic Content


        </section>



      </main>
    </div>
  );
}

export default App;
