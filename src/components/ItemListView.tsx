import React from "react";
import { useSelector } from "react-redux";
import { Form, useLoaderData } from "react-router-dom";
import { RootState } from "../app/store";

export default function ItemListView() {
  const items = useSelector((state: RootState) => state.itemSelection.items);
  return (
    <div>
      <h1>ItemListView</h1>
      <div>
        {items.map((item: string) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
