import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BeatrizBarrosContainer, Byography, LouiseBelmonteContainer, PeopleContainer, PeoplePage, RoleAndContact, TextAboutBeatriz, TextAboutContent, TextAboutLouise, TitlePageContainer, VectorAndImageContainerBeatriz, VectorAndImageContainerLouise, VectorImageOrange, VectorImagePurple, VectorImageYellow } from "@/styles/pages/pessoas";
import Image from "next/image";
import beatrizbarrosimage from '../../assets/people/beatrizbarros.png'
import louiseimage from '../../assets/people/louise.png'
import orangevector from '../../assets/people/orangevector.svg'
import purplevector from '../../assets/people/purplevector.svg'
import yellowvector from '../../assets/people/yellowvector.svg'

export default function Peoples() {
    return (
      <PeoplePage>
        <Header background="orange"/>
        
        <PeopleContainer>
          <TitlePageContainer>
            <h1>Diretoria</h1>
          </TitlePageContainer>
          <BeatrizBarrosContainer>
            <Image src={beatrizbarrosimage} alt=""/>
            <VectorAndImageContainerBeatriz>
              <TextAboutBeatriz>
                <TextAboutContent>
                  <h1>Beatriz Barros</h1>
                  <RoleAndContact>
                    <h2>Diretora Presidenta</h2>
                    <span>beatrizbarros@frestas.com</span>
                  </RoleAndContact>
                  <Byography>
                    <p>
                    Beatriz Barros é atriz, diretora teatral, dramaturga, educadora e sócia-produtora do Instituto Frestas. 
                    Graduada em Ciências Sociais pela FFLCH-USP pelo Núcleo Experimental de Artes Cênicas do SESI. 
                    Foi indicada em 2015 ao Prêmio Shell de Teatro na Categoria Inovação. Em 2018 ganhou com a sua 
                    atual companhia teatral - a CIA. MAR - o prêmio São Paulo de Incentivo ao Teatro. Como diretora teatral, 
                    Beatriz estreia, em 2023, o espetáculo “O Avesso da Pele” no SESC Paulista, assinando a direção e a dramaturgia. 
                    Na área da educação, trabalhou no CCBB, no Museu Judaico e na clínica ABREH 
                    (atendendo pacientes com transtorno do Espectro Autista, TDAH e Dislexia).
                    </p>
                  </Byography>
                </TextAboutContent>
              </TextAboutBeatriz>
              <VectorImageOrange src={orangevector} alt=""/>
            </VectorAndImageContainerBeatriz>
            <VectorImageYellow src={yellowvector} alt=""></VectorImageYellow>
          </BeatrizBarrosContainer>
          <LouiseBelmonteContainer>
                <VectorAndImageContainerLouise>
                  <VectorImagePurple src={purplevector} alt=""/>
                  <TextAboutLouise>
                    <TextAboutContent>
                    <h1>Louise Belmonte</h1>
                    <RoleAndContact>
                      <h2>Diretora Executiva</h2>
                      <span>belmonte@frestas.com</span>
                    </RoleAndContact>
                    <Byography>
                      <p>
                      Louise Belmonte é escritora, diretora de cinema e teatro, atriz, educadora e sócia-produtora do Instituto Frestas. 
                      Formada em cinema na FAAP (2017), pós graduada na Formação de Escritores do Instituto Vera Cruz (2022) e, 
                      mestranda no MFA de Escrita Criativa em Espanhol na New York University (em andamento). 
                      Em 2022 lançou seu romance de estreia, “Primeira Pele” pela Editora Quelônio.
                      </p>
                      </Byography>
                    </TextAboutContent>
                  </TextAboutLouise>
                </VectorAndImageContainerLouise>
              <Image src={louiseimage} alt=""/>
          </LouiseBelmonteContainer>
        </PeopleContainer>

        <div>
          
        </div>
        
        <Footer color="green"/>
      </PeoplePage>
    )
  }
  