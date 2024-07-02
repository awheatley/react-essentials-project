import TabButton from "./TabButton"

export default function Tabs({ children, tabs }) {
  return (
    <>
      <menu>
        { tabs }
      </menu>

      { children }
    </>
  );
}