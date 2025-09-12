import "./App.css";
import DesktopHeader from "./components/molecules/header/DesktopHeader";
import { Header } from "./components/molecules/header/header";
import SubHeader from "./components/molecules/subheader/SubHeader";
import MainSection from "./components/organisms/MainSection";

function App() {
  return (
    <>
      <Header />
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-[100vw]">
          <SubHeader />
          <MainSection />
        </div>
        <DesktopHeader />
      </div>
    </>
  );
}

export default App;
