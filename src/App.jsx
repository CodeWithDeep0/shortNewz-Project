import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Newscontent from "./components/Newscontent";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("business");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newsfetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          ` https://api.currentsapi.services/v1/latest-news?country=in&category=${category}&apiKey=Iu6QE5CwKWcb0dA6o9OY6UZdQTaXm91tHTUtK0Ki2bv1rfPx`
        );
        setNews(response.data.news);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    newsfetch();
  }, [category]);

  return (
    <div className="h-full">
      <NavBar setCategory={setCategory} />
      {loading ? (
        <div className="flex items-center justify-center mt-[18rem]">
          <span className="loader"></span>
        </div>
      ) : (
        <Newscontent news={news} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
