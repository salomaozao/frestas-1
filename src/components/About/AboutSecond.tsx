import { AboutSecondContainer, ConatinerOfImageAndText, ContainerContentAboutSecond, ContentContainerAboutSecond, EmptyDiv, ParagraphAndBorderContainer, ParagraphsContainer } from "@/styles/pages/sobre/aboutSecond";
import Image from "next/image";
import vector5 from '../../assets/about/vector5.svg'
import border from '../../assets/about/bordergreen.svg'

export function AboutSecond(){
    return (
        <AboutSecondContainer>
            <EmptyDiv></EmptyDiv>
            <ConatinerOfImageAndText>
            <Image src={vector5} alt=""/>
            <ContentContainerAboutSecond>
                <h1>Nossa metodologia se baseia no <br></br>seguinte tripé essencial:</h1>
                
                    <ParagraphsContainer>
                        <ParagraphAndBorderContainer>
                            <Image src={border} alt=""/>
                            <p>
                                Atuação nos formatos digitais e híbridos (presenciais-virtuais) que
                                potencializem o alcance das ações através das múltiplas tecnologias do 
                                ciberespaço contemporâneo;
                            </p> 
                        </ParagraphAndBorderContainer>
                        <ParagraphAndBorderContainer>
                            <Image src={border} alt=""/>
                            <p>
                                Perspectiva decolonial do pensamento artístico, crítico e pedagógico e suas  
                                implicações políticas, éticas, estéticas e filosóficas incluindo o deslocamento  
                                de certo viés eurocêntrico em direção a uma ênfase nas culturas de 
                                resistência, como as africanas e ameríndias;
                            </p> 
                        </ParagraphAndBorderContainer>
                        <ParagraphAndBorderContainer>
                            <Image src={border} alt=""/>
                            <p>
                                Transdisciplinaridade e foco na noção ampliada de experiência, buscando  
                                assim o reconhecimento da importância radical dos cruzos teórico-práticos,  
                                para uma compreensão ampla do mundo e seus fenômenos, de maneira  
                                sensível sem deixar de ser racional e afetiva sem deixar de ser objetiva.
                            </p>
                        </ParagraphAndBorderContainer>
                    </ParagraphsContainer>
            </ContentContainerAboutSecond>
            </ConatinerOfImageAndText>
        </AboutSecondContainer>
    )

}