import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://assigment10-type02-server.vercel.app/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [id]);
  console.log(id);
  return (
    <div>
      <h1>update information of</h1>
    </div>
  );
};

export default Update;
