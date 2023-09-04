import { useState, useEffect } from "react";

const useGetUserId = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //generamos un id 
    const getId =
      localStorage.getItem("wishlistID") ??
      localStorage.setItem(
        "wishlistID",
        Math.floor(Math.random() * 1000).toString()
      );

    setUserId(getId);
  }, []);
  return { userId };
};
export default useGetUserId;
