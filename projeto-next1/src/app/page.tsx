"use client"
import { ListCardData } from "@/components/list-card-data/listCardData";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Dados da API</h1>
        <ListCardData/>
      </div>
    </main>
  );
}
