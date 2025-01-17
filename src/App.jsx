import {
  Abouts,
  Contact,
  Experience,
  Footer,
  Hire,
  Home,
  MiniProjects,
  Navbar,
  Skills,
} from "./component";
import Socialmedia from "./constant/Socialmedia";

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
      <div className="flex justify-center items-start">
        <div className="w-[1500px] px-10">
          <Experience />
        </div>
      </div>
      <div className="flex justify-center items-start bg-[#ffc107]">
        <div className="w-[1500px] px-10">
          <Hire />
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-[1500px] px-10">
          <MiniProjects />
          
        </div>
      </div>
      <div className="flex justify-center items-start bg-[#fffcf0]">
        <div className="w-[1500px] px-10">
        <Contact/>
        </div>
      </div>
      <div className="flex justify-center items-start bg-[#00171f]">
        <div className="w-[1500px] px-10">
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
