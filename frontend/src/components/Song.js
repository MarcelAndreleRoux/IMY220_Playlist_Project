import React from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router";

// contains all required information on a single song

export function Song() {
  const params = useParams();

  return (
    <div>
      <Navbar />
      <h2>Song No. {params.songId}</h2>
    </div>
  );
}
