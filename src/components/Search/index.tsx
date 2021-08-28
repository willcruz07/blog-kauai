import React from "react";

import { FaSearch } from "react-icons/fa";
import { Post } from "../../models/Posts";

import styles from "./styles.module.scss";

interface ISearch { 
  listPost: Post[];
  setList: (posts: Post[]) => void;
}

export const Search = ({ listPost, setList }: ISearch) => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (text: string) => {

    const list = listPost.filter(post => {
      return (post.title.toLowerCase().includes(search.toLowerCase()))
    })
     
    if (text) {
      setList(list);
    } else {
      setList(listPost)
    }
    setSearch(text);
  }

  return (
    <div className={styles.containerSearch}>
      <FaSearch/>  
      <input
        type="search"
        name="search"        
        placeholder="Pesquisar..."
        value={search}
        onChange={e => handleSearch(e.target.value)} />
    </div>
  )
}