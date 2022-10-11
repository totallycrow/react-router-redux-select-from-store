import React from "react";
import { useParams } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux";

export default function useSelection() {
  const params = useParams();
  const items = useSelector((state: RootState) => state.itemSelection.items);
  console.log(params);

  if (!params.itemId) return <div>error</div>;
  if (isNaN(Number(params.itemId))) return <div>error</div>;

  const index = Number(params.itemId);

  return index;
}
