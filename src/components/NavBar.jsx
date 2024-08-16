import Newzbuzz_prev_ui from "/NewzBuzz_prev_ui.png";
import Sidebar from "./Sidebar"

const NavBar = ({setCategory}) => {
  return (
    <div className="h-16 w-full shadow p-2 shadow-[#888888] flex items-center justify-between">
      <div className="flex items-center">
        <div>
            <Sidebar setCategory={setCategory}/>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={Newzbuzz_prev_ui}
          alt="logo"
          loading="lazy"
          className="h-40"
        />
      </div>
    </div>
  );
};

export default NavBar;
