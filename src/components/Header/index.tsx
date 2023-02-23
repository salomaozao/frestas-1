import { HeaderContainer, HeaderNavigation } from "@/styles/header";
import { LinkNavigation } from "@/styles/pages/Home/homeFirst";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/header/frestaslogo.svg'

interface HeaderProps{
    background: 'purple'|'orange'|'green'|'blue'
}
export function Header({background}: HeaderProps){
    return (
        <HeaderNavigation background={background}>
            <Link href={`/`}><Image src={logo} alt=""/></Link>
            <LinkNavigation href={`/sobre`}>Sobre</LinkNavigation>
            <LinkNavigation href={`/cursos`}>Cursos</LinkNavigation>
            <LinkNavigation href={`/pessoas`}>Pessoas</LinkNavigation>
            <LinkNavigation href={`/construction`}>Agenda</LinkNavigation>
            <LinkNavigation href={`/construction`}>Publicações</LinkNavigation>
            <LinkNavigation href={`/construction`}>Blog</LinkNavigation>
            <LinkNavigation href={`/contato`}>Contato</LinkNavigation>
        </HeaderNavigation>
    )
}
//linknav ta vindo de home, o ideal era separar a estilização