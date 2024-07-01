import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';

function App() {
  const [selectedButton, setSelectedButton] = useState();

  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
  }

  let tabContent = <p>Please click a tab</p>;

  if (selectedButton) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedButton].title}</h3>
      <p>{EXAMPLES[selectedButton].description}</p>
      <pre>{EXAMPLES[selectedButton].code}</pre>
    </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => <CoreConcept key={index} concept={concept} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')} isSelected={selectedButton === 'components'}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')} isSelected={selectedButton === 'jsx'}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')} isSelected={selectedButton === 'props'}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')} isSelected={selectedButton === 'state'}>State</TabButton>
          </menu>

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
