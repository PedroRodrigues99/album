import React, {useState, useEffect} from 'react';
import AlbumContainer from './components/AlbumContainer/AlbumContainer';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import FavoriteContainer from './components/FavoriteContainer/FavoriteContainer';
import axios from 'axios';
import NavBar from './components/Navbar';

export const Context = React.createContext();


export default function App() {
  const [image, setImage] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (/\S/.test(search)) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums/1/photos?q=${search}&maxResults=20`
        )
        .then((response) => {
          setImage(response.data);
        });
    } else {
      setImage([]);
    }
  }, [search]);
  console.log(image)
  return (
    <div>
    <Context.Provider value={{
      image: image,
      favorites: favorites,
      setFavorites: setFavorites,
      search: search,
      setSearch: setSearch,
    }}
    > 
    <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={AlbumContainer}></Route>
            <Route
              exact
              path={"/favorites"}
              component={FavoriteContainer}
            ></Route>
          </Switch>
        </BrowserRouter>
    </Context.Provider>
    </div>
  );
  }

