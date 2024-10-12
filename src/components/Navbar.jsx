import { Link } from "react-router-dom";
const Navbar = () => {
  const nav_items = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/all-blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="flex flex-row w-full justify-around items-center py-2 bg-slate-50 fixed top-0 left-0 ">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <p className="uppercase font-bold text-gray-800 text-2xl bg-green-400 px-1 rounded-sm ">
          Encoder.Decoder
        </p>
      </Link>
      <div>
        {nav_items.map((items, index) => {
          return (
            <Link
              key={index}
              to={items.link}
              className="mx-2 font-medium text-gray-600 
              hover:text-green-400
              "
            >
              {items.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
