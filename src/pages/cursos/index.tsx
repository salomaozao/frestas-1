import { CourseDescriptionActually } from "@/components/Course/CourseDescription";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { ChoiceLink, CourseContainer, CourseDate, CourseExtraInfo, CourseMain, CourseMainInfo, CoursesContainer, CoursesNavigation, CoursesPage, Paragraph,  } from "@/styles/pages/cursos";
import { stripe } from "@/utils/stripe";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Stripe from "stripe";

interface HomeProps{
    products:{
        id: string,
        name: string,
        metadata: {
            desc: string,
            mean: string,
            period: string,
            teacher: string,
            time: string,
            days: string,
            vacancies: number,
        } 
    }[]
}
export default function Courses({ products }: HomeProps) {
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
                                <h2>OFICINA DE TEATRO PARA INICIANTES</h2>
                                <h4>Com Beatriz Barros</h4>
                            </CourseMainInfo>
                            <CourseDate page="actually">
                                <Paragraph page="actually">
                                    29 de março ao 10 de abril
                                </Paragraph>
                                <p>
                                    quartas-feiras,<br></br>
                                    das 19h às 21h30
                                </p>
                            </CourseDate>
                            <CourseExtraInfo page="actually">
                                <Paragraph page="actually">30 vagas</Paragraph>
                                <p>presencial</p>
                            </CourseExtraInfo>       
                        </CourseMain>
                        {descriptionOpen ? <CourseDescriptionActually/>: <></>}
                    </CourseContainer>
                </CoursesContainer>
        
            {/* <Pagination page="actually"/> */}
        </CoursesPage>
        <Footer color="orange"/>
    </>
    )
  }

  export const getServerSideProps: GetServerSideProps = async ()=> {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map((product)=>{

        const { metadata } = product
        const price = product.default_price as Stripe.Price
        return{
            id: product.id,
            name: product.name,
            metadata,
            //desc: metadata.desc,
            //period: metadata.period,
            //time: metadata.time,
            //teacher: metadata.teacher,
            //mean: metadata.mean,
            //imageUrl: product.images[0],
            //price: price.unit_amount, //100
        }
    })

    console.log(products)

    return{
        props:{
            products,
        }
    }
  }
  