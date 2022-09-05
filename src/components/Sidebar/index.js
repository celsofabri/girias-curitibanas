import React, { useState, useEffect } from "react";
import { IMAGES } from "./constants";

const Sidebar = () => {

  const [image, setImage] = useState({
    name: '', 
    url: ''
  })

  const getImageRandom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
  
    setImage(item);
  }

  useEffect(() => {
    getImageRandom(IMAGES)
  }, [])

  return (
    <aside>
      <img src={image?.url} alt={image?.name} />
    </aside>
  )
}

export default Sidebar;