import vector1 from '../../assets/about/vector1.svg'
import vector3 from '../../assets/about/vector3.svg'
import border from '../../assets/about/borderwhite.svg'
import { AboutThirdContainer, AsideVectorLeft, AsideVectorRight, BordersImages, ContainerTextBoxes, ContentContainerAboutThird, SectionOfBordersAndContainerText, } from '@/styles/pages/sobre/aboutThird'
import Image from 'next/image'

export function AboutThird(){
    return(
        <AboutThirdContainer>
           <AsideVectorLeft>
                <Image src={vector1} alt=""/>
           </AsideVectorLeft>
           <ContentContainerAboutThird>
                <h1>Nossas principais frentes de ação são:</h1>
                <ContainerTextBoxes>
                    <SectionOfBordersAndContainerText>
                        <BordersImages src={border} alt=""/>
                        <p>
                            Realização de oficinas, cursos, palestras, residências 
                            artísticas, atividades formativas em geral, programas 
                            de estágio e de capacitação de aprendizes e outros 
                            modelos presenciais, remotos e híbridos de educação 
                            no Brasil e no exterior.
                        </p>       
                    </SectionOfBordersAndContainerText>
                    <SectionOfBordersAndContainerText>
                        <BordersImages src={border} alt=""/>
                        <p>
                            Produção e promoção de obras de arte e eventos no campo das 
                            artes da cena, da música, das artes visuais, das novas mídias, 
                            do audiovisual, da literatura, da gastronomia, da moda, da cultura 
                            digital, das culturas tradicionais, além de outras atuações no 
                            campo artístico, tecnológico e cultural no Brasil e no exterior. 
                        </p>       
                    </SectionOfBordersAndContainerText>
                    <SectionOfBordersAndContainerText>
                        <BordersImages src={border} alt=""/>
                        <p>
                            Realização de consultorias pedagógicas e artísticas para professores, 
                            artistas, empresas e outras organizações dos setores público e 
                            privado incluindo as do terceiro setor.
                        </p>       
                    </SectionOfBordersAndContainerText>
                    <SectionOfBordersAndContainerText>
                        <BordersImages src={border} alt=""/>
                        <p>
                            Desenvolvimento, promoção, financiamento e divulgação de pesquisas 
                            e estudos científicos, pedagógicos e artísticos.
                        </p>       
                    </SectionOfBordersAndContainerText>
                </ContainerTextBoxes>
           </ContentContainerAboutThird> 
           <AsideVectorRight>
                <Image src={vector3} alt=""/>
           </AsideVectorRight>     
        </AboutThirdContainer>
    )
}