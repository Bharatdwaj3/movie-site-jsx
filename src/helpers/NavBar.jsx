import {Link} from 'react-router-dom'
function NavBar() {

  return (
    <>
      <div className="bg-gradient-to-t from-slate-900 h-12 w-full">
        <div className=" w-[500px] h-full relative text-white gap-0">
         
          <Link
          to="/finalmoviebrowse"
            className="border-t-8 border-black absolute inset-x-12 left-44 pl-8 h-full w-32 font-bold text-xl pt-2 hover:bg-gradient-to-b from-slate-600 text-black"
          >
            Movies
          </Link>
          <Link
          to="/finaltvbrowse"
            className="border-t-8 border-black absolute right-0 pl-3 w-32 h-full  font-bold text-xl pt-2 hover:bg-gradient-to-b from-slate-600 text-black"
          >
            TV_Shows
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar
