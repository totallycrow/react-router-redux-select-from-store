import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {} from "../features/itemSelection/itemSelectionSlice";
import type { RootState } from "../app/store";

export default function ItemListView() {
  const params = useParams();
  const items = useSelector((state: RootState) => state.itemSelection.items);
  console.log(params);

  if (!params.itemId) return <div>error</div>;
  if (isNaN(Number(params.itemId))) return <div>error</div>;

  const index = Number(params.itemId);

  if (index >= items.length) return <div>Item Not Found</div>;

  return (
    <div>
      ItemDetailView
      <div>{items[index]}</div>
    </div>
  );
}
