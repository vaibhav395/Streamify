import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; //This is called early return
  return (
    <div className="shadow-lg p-5 w-48 mt-2">
      <ul>
        <li className="my-2"><Link to={"/"}>🏠︎ Home</Link></li>
        <li className="my-2">🎬 Shorts</li>
        <li className="my-2">▶Subscriptions</li>
      </ul>

      <hr className="border"/>

      <h1 className="font-bold pt-5 mb-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

    
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
