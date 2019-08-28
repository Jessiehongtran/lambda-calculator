import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton"



const Specials = () => {
  const [special, setSpecial] = useState(specials);
  console.log('special',special)
  return (
    <div>
      {special.map((special)=> <SpecialButton special = {special}/> )}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials