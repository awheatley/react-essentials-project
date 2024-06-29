import './CoreConcepts.css';

export default function CoreConcept({ concept }) {
  const { image, title, description } = concept;

  return (<li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>);
}