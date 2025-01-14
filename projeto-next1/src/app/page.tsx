"use client"
import { apiService } from "@/api/apiService";
import { useState, useEffect } from "react";

interface dataProps {
  id: number;
  title: string;
  body: string;
}


export default function Home() {
  const [data, setData] = useState<dataProps[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      const result = await apiService(); 
      console.log(result)
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados da API</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
