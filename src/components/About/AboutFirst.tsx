import frestaslogo from '../../assets/about/frestaslogo.svg'
import artvectorial from '../../assets/about/artvectorial.svg'
import { AboutFirstContainer, ContentContainerAboutFirst, IntroductionContainer, IntroductionHeader, LogoAndOriginWordContainer, 
OriginWordContainer, DefinitionsWordContainer, DefinitionsList, ContentTextAbout, TwoFirstParagraphs, RestOfParagraphs } from '@/styles/pages/sobre/aboutFirst'
import Image from 'next/image'


export function AboutFirst(){
    return (
        <AboutFirstContainer>
            <ContentContainerAboutFirst>
                <IntroductionHeader>
                    <Image src={artvectorial} alt=""/>
                    <IntroductionContainer>
                        <LogoAndOriginWordContainer>
                            <Image src={frestaslogo} alt=""/>
                            <OriginWordContainer>
                                <span>Substantivo Feminino. Plural.</span>
                                <p>Do latim fenestrae.</p>
                            </OriginWordContainer>
                        </LogoAndOriginWordContainer>
                        <DefinitionsWordContainer>
                            <DefinitionsList>
                                <p>1. Abertura estreita por onde passam luz e ar;</p> 
                                <p>2. Brecha, fissura, rachadura, greta, trinca, sulco, fenda, oportunidade;</p>
                                <p>3. Espécie de janela alta e afilada de onde se pode olhar o futuro.</p>
                            </DefinitionsList>
                        </DefinitionsWordContainer>
                    </IntroductionContainer>
                </IntroductionHeader>
                <ContentTextAbout>
                    <TwoFirstParagraphs>
                        <p>
                            O Instituto Frestas tem como seu objetivo principal a promoção da educação, da cultura, da arte, 
                            da tecnologia, dos direitos humanos e da democracia. Produzimos cursos e outros formatos de atuação educacional 
                            assim como obras de arte de diversas linguagens e mídias.
                        </p>
                        <p>
                            O valor fundamental do Instituto é o da equidade de oportunidades com foco nas populações historicamente alijadas 
                            de direitos sociais no Brasil, como pessoas em situação de vulnerabilidade socioeconômica, pessoas negras, 
                            indígenas e racializadas em geral, pessoas trans e LGBTTQIAP+ em geral, 
                            mães solo e mulheres em geral e pessoas com deficiência (PCD).
                        </p>
                    </TwoFirstParagraphs>
                    <RestOfParagraphs>
                        <p>O Instituto trabalha na construção de espaços horizontais em sua constituição pedagógica, nos quais tanto os educandos/público como os educadores/artistas praticam o ato de aprender, assim como todos também exercem a função de ensinar.</p> 
                        <p>Através de uma prática pedagógica da autonomia dos sujeitos o Frestas busca uma des-hierarquização dos conhecimentos e dos valores para dissolver falsas dicotomias como popular/erudito, alta cultura/cultura de massa, saberes ancestrais/conhecimento científico, por exemplo.</p>
                        <p>Todo esse esforço tem como objetivo a construção de um Brasil mais justo em suas oportunidades de trabalho, estudo, renda, alimentação, moradia, lazer, cidadania e invenção imaginativa e expressão subjetiva.</p>
                    </RestOfParagraphs>
                </ContentTextAbout>
            </ContentContainerAboutFirst>  
        </AboutFirstContainer>
    ) 
}