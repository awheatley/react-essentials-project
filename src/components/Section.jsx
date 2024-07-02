export default function Section({ heading, children, ...props }) {
  return (
    <section {...props}>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}