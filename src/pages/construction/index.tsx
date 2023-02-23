import { Header } from "@/components/Header";
import { ConstructionContent, ConstructionMain } from "@/styles/construction";
import Image from "next/image";
import logo from "../../assets/home/first/logofrestas.svg"

export default function ConstructionPage(){
    return (
        <ConstructionMain>
            <Header background="green"/>
            <ConstructionContent>
                <Image src={logo} alt=""/>
                <h1>Página em construção</h1>
            </ConstructionContent>
        </ConstructionMain>
    )
}