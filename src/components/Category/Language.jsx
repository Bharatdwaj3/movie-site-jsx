import axios from 'axios'
import { useState } from 'react'

function Language() {

    const [langData, setlangData] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const Gurl = `https://api.themoviedb.org/3/configuration/languages&api_key=${publicKey}`;

    axios
      .get(Gurl)
      .then((response) => {
        setlangData(response.data.genres);
    })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });

return (
  <>
    <div>
      <div className="bg-gradient-to-b from-slate-700 p-8  w-full h-[700px] justity-between gap-1  flex-col">
        {langData.map((show) => (
          <div className="hover:bg-" key={show.id}>
            <div className="bg-slate-700 h-12 w-56 rounded-l-lg  border-b-2 border-white">
              <h1 className="hover:bg-slate-900 rounded-l-lg  pt-2 border-b-2 border-black text-center text-xl text-white font-sans pb-4">
                {show.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
}

export default Language
