"use client"
import { IconDevelop } from "../../../public/code-xml"
import { StyleHeader } from "./style";

export function Header(){
    return(
        <StyleHeader>
            <h2>Nextjs-project</h2>
            <div>
                <IconDevelop/>
                <p>Developer: Allan Gabriel</p>
            </div>
        </StyleHeader>
    );
}