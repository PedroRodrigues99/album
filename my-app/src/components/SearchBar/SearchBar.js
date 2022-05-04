import React, { useContext } from "react";
import { Context } from "../../App";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const StyledInputElement = styled("input")`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }
  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default function SearchBar() {
  const { search, setSearch } = useContext(Context);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "50px",
        justifyContent: "center",
      }}
    >
    <div style={{display: "flex",
    flexDirection: "row",
    boxShadow: "1px 1px 5px 1px grey",}} >
    <SearchIcon style={{marginTop: "5px", marginLeft:"2px" }}/>
      <CustomInput
        aria-label="Demo input"
        onChange={handleSearch}
        value={search}
        placeholder="Search your photo..."
      />
      </div>
    </div>
  );
}