import { CarrousselContainer, HomeContainerFirst, HomeMenu, LinkNavigation } from '@/styles/pages/Home/homeFirst'
import Image from 'next/image'
import { useState } from 'react'
import logofrestas from '../../assets/home/first/logofrestas.svg'


export function HomeFirst(){

    const [imageActive, setImageActive] = useState< 1 | 2 | 3 | 4 >(1)

    function carroussel(id: 1 | 2 | 3 | 4 ){
            setImageActive(id)
    }
    return(
        <HomeContainerFirst background={imageActive}>
            <HomeMenu>
                <Image src={logofrestas} alt=""/>
                <nav>
                    <LinkNavigation href={`/sobre`}>Sobre</LinkNavigation>
                    <LinkNavigation href={`/cursos`}>Cursos</LinkNavigation>
                    <LinkNavigation href={`/pessoas`}>Pessoas</LinkNavigation>
                    <LinkNavigation href={`/construction`}>Agenda</LinkNavigation>
                    <LinkNavigation href={`/construction`}>Publicações</LinkNavigation>
                    <LinkNavigation href={`/construction`}>Blog</LinkNavigation>
                    <LinkNavigation href={`/contato`}>Contato</LinkNavigation>
                </nav>
            </HomeMenu>
            <CarrousselContainer>
                <button onClick={() => {carroussel(1)}}/>
                <button onClick={() => {carroussel(2)}}/>
                <button onClick={() => {carroussel(3)}}/>
                <button onClick={() => {carroussel(4)}}/>
            </CarrousselContainer>
        </HomeContainerFirst>
    )
}