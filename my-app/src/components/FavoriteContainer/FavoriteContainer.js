import React, {useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Context } from "../../App";

export default function FavoriteContainer(props) {
  const { favorites } = useContext(Context);

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <h1 className="favoriteTitle">My Favorite Albums</h1>
        <Container maxWidth="md">
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {favorites.map((elem) => (
              <Grid
                item
                xs={2}
                sm={2}
                md={4}
                key={Math.floor(Math.random() * 10000)}
              >
                <a
                  href={elem.infoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{ display: "flex", maxWidth: 280, marginBottom: 3 }}
                  >
                    <Box>
                      <CardContent>
                        <Typography
                          component="div"
                          variant="h5"
                          fontSize="18px"
                        >
                          {elem.title && elem.title.length > 50
                            ? elem.title.slice(0, 50) + "..."
                            : elem.title}
                        </Typography>
                        <Typography
                          fontSize="12px"
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {elem.url ? elem.url[0] : null}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 200 }}
                      image={elem.url}
                      alt="photo"
                    />
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}