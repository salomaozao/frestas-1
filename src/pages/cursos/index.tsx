import { CourseDescriptionActually } from "@/components/Course/CourseDescription";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { ChoiceLink, CourseContainer, CourseDate, CourseExtraInfo, CourseMain, CourseMainInfo, CoursesContainer, CoursesNavigation, CoursesPage, Paragraph,  } from "@/styles/pages/cursos";
import { useState } from "react";


export default function Courses() {
    const [ descriptionOpen, setDescriptionOpen ] = useState(false);

    function handleOpenDescription(){
        setDescriptionOpen(true)
    }
    function handleCloseDescription(){
        setDescriptionOpen(false)
    }

    function openAndCloseDescription(){
        if(descriptionOpen){
            handleCloseDescription()
        } else{
            handleOpenDescription()
        }
    }

    return (
        <>
        <CoursesPage page="actually">
            <Header background="purple"/>
        <CoursesContainer page="actually">
            <h1>Cursos</h1>
            <CoursesNavigation>
                <ChoiceLink border="purple" color="purple" href={`/cursos`}>Inscrições abertas</ChoiceLink>
                <ChoiceLink border="purple" color="white" href={`/cursos/passados`}>Cursos passados</ChoiceLink>
            </CoursesNavigation>
            <CourseContainer>
                <CourseMain onClick={openAndCloseDescription}>
                    <CourseMainInfo page="actually">
                        <h2>CHRONOS E KAIRÓS: OLHARES SOBRE O TEMPO NO TEATRO, CINEMA E LITERATURA</h2>
                        <h4>Com Louise Belmonte e Rodrigo Pocidônio</h4>
                    </CourseMainInfo>
                    <CourseDate page="actually">
                        <Paragraph page="actually">
                            07 de abril até 19 de maio de 2021
                        </Paragraph>
                        <p>
                            quartas-feiras<br></br>
                            19h às 22h
                        </p>
                    </CourseDate>
                    <CourseExtraInfo page="actually">
                        <Paragraph page="actually">40 vagas</Paragraph>
                        <p>Online</p>
                    </CourseExtraInfo>       
                </CourseMain>
                {descriptionOpen ? <CourseDescriptionActually/>: <></>}
            </CourseContainer>   
        </CoursesContainer>
        <Pagination page="actually"/>
        </CoursesPage>
        <Footer color="orange"/>
    </>
    )
  }
  