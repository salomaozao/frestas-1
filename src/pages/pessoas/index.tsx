import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BeatrizBarrosContainer, Byography, LouiseBelmonteContainer, PeopleContainer, PeoplePage, RoleAndContact, TextAboutBeatriz, TextAboutContainer, TextAboutContainerBase, TextAboutContent, TextAboutLouise, TitlePageContainer, VectorAndImageContainer } from "@/styles/pages/pessoas";
import Image from "next/image";
import beatrizbarrosimage from '../../assets/people/beatrizbarros.png'
import louiseimage from '../../assets/people/louise.png'
import orangevector from '../../assets/people/orangevector.svg'
import purplevector from '../../assets/people/purplevector.svg'

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
            <VectorAndImageContainer>
              <TextAboutBeatriz>
                <TextAboutContent>
                  <h1>Beatriz Barros</h1>
                  <RoleAndContact>
                    <h2>Diretora Presidenta</h2>
                    <span>beatrizbarros@frestas.com</span>
                  </RoleAndContact>
                  <Byography>
                    <p>
                    Beatriz Barros é atriz, diretora teatral, dramaturga e educadora. Graduada em Ciências Sociais 
                    pela FFLCH-USP e formada em Música de Câmara pela Escola de Música do Estado de São Paulo. 
                    Em 2018, integrou a 17ª turma do Núcleo Experimental de Artes Cênicas do SESI. No teatro, foi 
                    indicada em 2015 ao Prêmio Shell de Teatro na Categoria Inovação com o grupo que foi cofundadora, 
                    o Pequeno Teatro de Torneado. Em 2018 ganhou com a sua atual companhia teatral - a CIA. MAR - 
                    o prêmio FEMSA São Paulo de Incentivo ao Teatro Infantil e Jovem na categoria Revelação. Ainda na 
                    área teatral, Beatriz assina a direção do espetáculo “O Avesso da Pele”, obra de livre inspiração 
                    a partir do livro que recebe o mesmo título e recebeu o Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                    felis ut adipiscing
                    </p>
                  </Byography>
                </TextAboutContent>
              </TextAboutBeatriz>
              <Image src={orangevector} alt=""/>
            </VectorAndImageContainer>
          </BeatrizBarrosContainer>
          <LouiseBelmonteContainer>
              <TextAboutLouise>
                <VectorAndImageContainer>
                  <TextAboutLouise>
                    <TextAboutContent>
                    <h1>Louise Belmonte</h1>
                    <RoleAndContact>
                      <h2>Diretora Executiva</h2>
                      <span>belmonte@frestas.com</span>
                    </RoleAndContact>
                    <Byography>
                      <p>
                        Louise se formou em Cinema na Fundação Armando Álvares Penteado, em São Paulo. 
                        Desde então, tem trabalhado com literatura, teatro e cinema. Dirigiu e escreveu 
                        o curta-metragem "La Mer", que foi exibido no Festival de Ouro Preto, um dos mais 
                        importantes festivais de cinema do Brasil. Juntamente com Rodrigo Pocidônio é uma das 
                        fundadoras do coletivo de arte contemporânea "Máquinas Desejantes". Em 2021 escreveu e 
                        co-dirigiu a peça "Antimadox", que estreou em São Paulo, contemplada pelo Programa 
                        Municipal de Fomento ao Teatro para a Cidade de São Paulo, em parceria com o Núcleo Performa. 
                        Em 2022, lançou o seu primeiro livro, intitulado "Primeira Pele" pela Editora Quelônio. 
                        Também em 2022, Louise foi aceita, Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                        felis ut adipiscing
                      </p>
                      </Byography>
                    </TextAboutContent>
                  </TextAboutLouise>
                </VectorAndImageContainer>
              </TextAboutLouise>
              <Image src={louiseimage} alt=""/>
          </LouiseBelmonteContainer>
        </PeopleContainer>

        <div>
          
        </div>
        
        <Footer color="green"/>
      </PeoplePage>
    )
  }
  