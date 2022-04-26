import React from "react";

export const SearchBar = () => {
    const [search,setSearch] = React.useState();
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    const handleClick = () =>{

    }
  return (    <div className="search-bar-container">
      <input onChange={handleChange} type="text" placeholder="Search for people here..."></input>
      <div onClick={handleClick}>Search</div>
    </div>
  );
};
