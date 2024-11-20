import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; //This is called early return
  return (
    <div className="shadow-lg p-6 w-48 mt-2">
      <ul>
        <li className="my-2 text-sm hover:bg-gray-200"><Link to={"/"}>🏠︎ Home</Link></li>
        <li className="my-2 text-sm hover:bg-gray-200 cursor-pointer">🎬 Shorts</li>
        <li className="my-2 text-sm hover:bg-gray-200 cursor-pointer">▶Subscriptions</li>
      </ul>

      <hr className="border"/>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="hover:bg-gray-200 cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 cursor-pointer">Sports</li>
        <li className="hover:bg-gray-200 cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-200 cursor-pointer">Movies</li>
      </ul>

      <hr className="border mt-2"/>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="hover:bg-gray-200 cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 cursor-pointer">Sports</li>
        <li className="hover:bg-gray-200 cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-200 cursor-pointer">Movies</li>
      </ul>

      <hr className="border mt-2"/>
      <ul className="mt-5">
        <li className="hover:bg-gray-200 cursor-pointer">Settings</li>
        <li className="hover:bg-gray-200 cursor-pointer">Report</li>
        <li className="hover:bg-gray-200 cursor-pointer">Help</li>
        <li className="hover:bg-gray-200 cursor-pointer">Feedback</li>
      </ul>

    </div>
  );
};

export default Sidebar;
