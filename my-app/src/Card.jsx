import React, { useEffect, useState } from "react";
import Card from "./ksbData";
import styles from "./index.css";

export default function Card({ ksb }) {
  return (
    <div className="grid gap-4 grid-cols-5 p-2 place-content-center">
      <h1 className="col-span-1 mx-2 text-lg text-center">{ksb.title}:</h1>
      <p className="col-span-4">{ksb.text}</p>
    </div>
  );
}
