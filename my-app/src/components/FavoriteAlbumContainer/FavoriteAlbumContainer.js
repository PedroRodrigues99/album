import React from "react";
import Box from "@mui/material/Box";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function FavoriteAlbumContainer(props) {
  const deleteItem = () => {
    props.handleDelete(props.info.id);
  };

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <img
          alt="Book Cover"
          src={props.info.url}
          width="100px"
        ></img>
        <br />
        <DeleteSharpIcon className="delete-button" onClick={deleteItem} />
      </Box>
    </div>
  );
}