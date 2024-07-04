import TabButton from "./TabButton"

export default function Tabs({ children, tabsContainer = 'menu', tabs }) {
  const TabsContainer = tabsContainer;

  return (
    <>
      <TabsContainer>
        { tabs }
      </TabsContainer>

      { children }
    </>
  );
}