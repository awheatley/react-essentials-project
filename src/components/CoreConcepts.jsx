import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <Section heading="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => <CoreConcept key={index} concept={concept} />)}
      </ul>
    </Section>
  )
}
