import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-e5b77-default-rtdb.firebaseio.com/movies.json"
      ); //movies(自訂名稱).json 是必須
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedMovies = []; //create 一個空的arr 存入新的data
      for (const key in data) {
        //key是data 的每個key data
        loadedMovies.push({
          //把obj推入arr
          id: key, //id就是每個data 的key名稱
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      /*data[key] 係從 data 物件中取得與 key 對應的值。因為 data 係一個物件，
所以可以透過類似於陣列下標的方式來取得物件的屬性值。
在這個例子中，data[key] 取得的是一個電影物件，包含了電影嘅標題、
開頭文字同埋發布日期等屬性值。
使用 for in 迴圈來迭代 response 物件的屬性，這些屬性對應於餐點資料庫中的餐點 ID。
這些 ID 在每次餐點資料庫中新增、修改或刪除餐點時都可能發生更改，
因此使用 for in 迴圈可以確保在獲取餐點數據時獲取最新的餐點 ID。
這個迴圈的目的是獲取每個餐點的屬性並推送到 transfermedMeals 陣列中，
以便在後面的 mealsList 函數中使用。在這個例子中，餐點數據是一個具有多個屬性的物件，
所以我們需要逐一獲取每個屬性並將其添加到 transfermedMeals 陣列中。
這是使用 for in 迴圈的一種常見方法。 */

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    //movie是我所create 的
    const response = await fetch(
      "https://react-http-e5b77-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST", //因為default係get 所以有第二個argument
        body: JSON.stringify(movie), //把javascript obj 轉化成JSON 格式
        headers: { "Content-Type": "application/json" }, //話俾backend合是json格式
      }
    );
    const data = await response.json(); //back-end 會sent 返json返黎我地又轉返object
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
response;
export default App;
