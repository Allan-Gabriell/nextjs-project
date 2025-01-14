import { DataProps } from "@/utils/dataProps";
import { Card } from "./style";

export function CardData(props: DataProps){
    return(
        <Card>
            <h3>{props.title}</h3>
            <div></div>
            <p>{props.body}</p>
        </Card>
    );
}