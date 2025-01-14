"use client"
import { apiService } from "@/api/apiService";
import { useState, useEffect } from "react";
import { DataProps } from "@/utils/dataProps";
import { ListContainer } from "./styled";
import { CardData } from "../card-data/cardData";

export function ListCardData(){
    const [data, setData] = useState<DataProps[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const result = await apiService(); 
        console.log(result)
        setData(result);
      }
      fetchData();
    }, []);

    return(
        <ListContainer>
            {data.map((item) => <CardData
                id={item.id}
                title={item.title}
                body={item.body}
            />)}
        </ListContainer>
    );
}