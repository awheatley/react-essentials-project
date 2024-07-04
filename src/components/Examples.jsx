import Section from './Section';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Tabs from './Tabs';

export default function Examples() {
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
    <Section heading="Examples" id="examples">
      <Tabs tabsContainer="menu" tabs={
        <>
          <TabButton onClick={() => handleClick('components')} isSelected={selectedButton === 'components'}>Components</TabButton>
          <TabButton onClick={() => handleClick('jsx')} isSelected={selectedButton === 'jsx'}>JSX</TabButton>
          <TabButton onClick={() => handleClick('props')} isSelected={selectedButton === 'props'}>Props</TabButton>
          <TabButton onClick={() => handleClick('state')} isSelected={selectedButton === 'state'}>State</TabButton>
        </>
      }>{tabContent}</Tabs>
    </Section>
  )
}