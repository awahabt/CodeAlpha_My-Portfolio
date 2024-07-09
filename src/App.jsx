import { Abouts, Home, Navbar, Skills } from "./component";

function App() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex justify-center px-10">
        <div className=" w-[1500px]">
          <Navbar />
        </div>
      </div>
      <div className=" flex justify-center items-start">
        <div className="w-[1500px] px-10">
          <Home />
          <Abouts />
        </div>
      </div>
      <div className="flex justify-center items-start bg-[#fffcf0]">
        <div className="w-[1500px] px-10">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
