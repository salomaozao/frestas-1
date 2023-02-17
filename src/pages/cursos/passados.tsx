import { CourseDescriptionPaste } from "@/components/Course/CourseDescriptionpaste";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { ChoiceLink, CourseContainer, CourseDate, CourseExtraInfo, CourseMain, CourseMainInfo, CoursesContainer, CoursesNavigation, CoursesPage, Paragraph,  } from "@/styles/pages/cursos";
import { useState } from "react";

export default function CoursesDone() {

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
    <CoursesPage page="paste">
        <Header background="purple"/>
      <CoursesContainer page="paste">
          <h1>Cursos</h1>
          <CoursesNavigation>
              <ChoiceLink border="white" color="purple" href={`/cursos`}>Inscrições abertas</ChoiceLink>
              <ChoiceLink border="white" color="white" href={`/cursos/passados`}>Cursos passados</ChoiceLink>
          </CoursesNavigation>
            <CourseContainer>
                <CourseMain onClick={openAndCloseDescription}>
                    <CourseMainInfo page="paste">
                        <h2>CHRONOS E KAIRÓS: OLHARES SOBRE O TEMPO NO TEATRO, CINEMA E LITERATURA</h2>
                        <h4>Com Louise Belmonte e Rodrigo Pocidônio</h4>
                    </CourseMainInfo>
                    <CourseDate page="paste">
                        <Paragraph page="paste">
                            07 de abril até 19 de maio de 2021
                        </Paragraph>
                        <p>
                            quartas-feiras<br></br>
                            19h às 22h
                        </p>
                    </CourseDate>
                    <CourseExtraInfo page="paste">
                        <Paragraph page="paste">40 vagas</Paragraph>
                        <p>Online</p>
                    </CourseExtraInfo>       
                </CourseMain>
                {descriptionOpen ? <CourseDescriptionPaste/>: <></>}
            </CourseContainer>
        </CoursesContainer>
        <Pagination page="paste"/>  
    </CoursesPage>
    <Footer color="orange"/>
    </>
    )
  }