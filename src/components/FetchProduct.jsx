// import React, { useState, useEffect } from "react";

// const FetchProduct = () => {
//   const [person, setPerson] = useState(null);

//   useEffect(async () => {
//     const response = await fetch(
//       "https://world.openfoodfacts.org/data/taxonomies/allergens.json"
//     );
//     const data = await response.json();
//     console.log("data.results:", data);
//     // const [item] = data.results;
//     // console.log("item :", item);
//     // setPerson(item);
//     // console.log("person:", person.name.first);
//   }, []);

//   return <div>HELLO</div>;
// };

// export default FetchProduct;

// / EXEMPLE QUI MARCHE AVEC UNE AUTRE API/; //
import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchProduct = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log("will fetch now");

    // const response = await axios.get("https://randomuser.me/api/");
    // setPerson(response.data.results[0]);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setPerson(response.data.results[0]);
      })
      .catch(() => console.log("il y a eu une erreur"));
    // const data = await response.json();
    // console.log("data.results:", data.results);
    // const [item] = data.results;
    // console.log("item :", item);
    // setPerson(item);
  }, []);
  console.log(person);

  if (person) {
    // console.log("person:", person.name.first);
    console.log("component is mounted");

    return <div>{person.name.first}</div>;
  } else {
    console.log("component is mounted");
    return <div>loading</div>;
  }
};

export default FetchProduct;
