import { useContext, useEffect } from "react";
import { NewsContext } from "../Context/NewsContextProvider";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Error from "../Components/Error";
export default function Home() {
  const { state, fetchRandom } = useContext(NewsContext);

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <>
      {!state?.news || (state?.news.length === 0 && !state.loading)
        ? state?.randompost?.map((item, index) => (
            <Link to={`/post/${item?.objectID}`} key={index}>
            {item?.title &&  <Card item={item}></Card>}
            </Link>
          ))
        : state?.news?.map((item, index) => (
            <Link to={`/post/${item?.objectID}`} key={index}>
               {item.title &&  <Card item={item}></Card>}
            </Link>
          ))}

      {state.loading && !state.Error && (
        <>
          <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </>
      )}

      {
        state?.Error && <Error/>
      }
    </>
  );
}
