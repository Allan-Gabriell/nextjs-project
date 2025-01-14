"use client"
import { ListCardData } from "@/components/list-card-data/listCardData";

export default function Home() {
  const data = ListCardData();

  return (
    <div>
      <h1>Dados da API</h1>
      <ListCardData/>
    </div>
  );
}
