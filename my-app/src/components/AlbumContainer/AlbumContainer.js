import React, {useContext} from 'react';
import Image from "../Image/Image";
import FavoriteAlbums from "../FavoriteAlbums/FavoriteAlbums";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Context} from "../../App";
import SearchBar from "../SearchBar/SearchBar";

export default function AlbumContainer() {
    const { image, favorites, setFavorites } = useContext(Context);
  
    const handleSelect = (photo) => {
      if (favorites.some((elem) => elem.id === photo.id)) {
      } else {
        setFavorites((prevValue) => [...prevValue, photo]);
      }
    };
  
    const handleDelete = (id) => {
      const indexToDelete = favorites.findIndex((elem) => elem.id === id);
      setFavorites(
        favorites
          .slice(0, indexToDelete)
          .concat(favorites.slice(indexToDelete + 1, favorites.length))
      );
    };
  
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <SearchBar />
            {favorites.length > 0 && (
              <FavoriteAlbums list={favorites} handleDelete={handleDelete} />
            )}
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {image.length > 0
                ? image
                    .filter((elem) => elem.url)
                    .map((elem) => (
                      <Grid
                        item
                        xs={2}
                        sm={2}
                        md={3}
                        key={Math.floor(Math.random() * 100000000)}
                      >
                        <Image
                          info={elem}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                    ))
                : null}
            </Grid>
          </Container>
        </React.Fragment>
      </div>
    );
  }

