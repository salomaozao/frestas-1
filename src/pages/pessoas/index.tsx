import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
	PeoplePage,
	Title,
	PersonRow,
	PersonDesc,
	SubtitleRow,
	PersonImage,
	PersonRowReverse,
	PersonDescReverse,
	ProfArea,
	TitleP,
	ProfDesc,
	SearchInput,
	TextScroll,
	TextScrollReverse,
	ProfSmall,
	ProfRow,
	CarouselController,
	CarDot,
	CarouselImage,
	PersonGrid,
	GridImage,
	ColabArea,
	ColabGrid,
	ColabGridImage,
} from "@/styles/pages/pessoas";
import { Input } from "@mui/material";
import Image from "next/image";
import beatrizbarrosimage from "../../assets/people/beatrizbarros.png";
import louiseimage from "../../assets/people/louise.png";
import orangevector from "../../assets/people/orangevector.svg";
import purplevector from "../../assets/people/purplevector.svg";
import yellowvector from "../../assets/people/yellowvector.svg";
import SearchIcon from "../../assets/people/searchIcon.png";
import Pessoa_mold from "../../assets/people/pessoas_moldura_3.png";
import CarouselArrow from "../../assets/people/CarouselArrow.png";

import FotoJulia from "../../assets/people/julia.png";

export default function Peoples() {
	return (
		<PeoplePage>
			<Header background="orange" />

			<Title>
				<span>Diretoria</span>
			</Title>
			<div>
				<PersonRow>
					<PersonImage
						src={beatrizbarrosimage}
						alt="Beatriz Barros"
					></PersonImage>
					<PersonDesc>
						<h1>Beatriz Barros</h1>
						<SubtitleRow>
							<p>Diretora Presidente</p>
							<span>beatrizbarros@frestas.com</span>
						</SubtitleRow>
						<TextScroll>
							Beatriz Barros é atriz, diretora teatral, dramaturga e educadora.
							Graduada em Ciências Sociais pela FFLCH-USP e formada em Música de
							Câmara pela Escola de Música do Estado de São Paulo. Em 2018,
							integrou a 17ª turma do Núcleo Experimental de Artes Cênicas do
							SESI. No teatro, foi indicada em 2015 ao Prêmio Shell de Teatro na
							Categoria Inovação com o grupo que foi cofundadora, o Pequeno
							Teatro de Torneado. Em 2018 ganhou com a sua atual companhia
							teatral - a CIA. MAR - o prêmio FEMSA São Paulo de Incentivo ao
							Teatro Infantil e Jovem na categoria Revelação. Ainda na área
							teatral, Beatriz assina a direção do espetáculo “O Avesso da
							Pele”, obra de livre inspiração a partir do livro que recebe o
							mesmo título e recebeu o
						</TextScroll>
					</PersonDesc>
				</PersonRow>

				<PersonRowReverse>
					<PersonImage src={louiseimage} alt="Beatriz Barros"></PersonImage>
					<PersonDescReverse>
						<h1>Beatriz Barros</h1>
						<SubtitleRow>
							<p>Louise Belmonte</p>
							<span>belmonte@frestas.com</span>
						</SubtitleRow>
						<TextScrollReverse>
							Louise se formou em Cinema na Fundação Armando Álvares Penteado,
							em São Paulo. Desde então, tem trabalhado com literatura, teatro e
							cinema. Dirigiu e escreveu o curta-metragem "La Mer", que foi
							exibido no Festival de Ouro Preto, um dos mais importantes
							festivais de cinema do Brasil. Juntamente com Rodrigo Pocidônio é
							uma das fundadoras do coletivo de arte contemporânea "Máquinas
							Desejantes". Em 2021 escreveu e co-dirigiu a peça "Antimadox", que
							estreou em São Paulo, contemplada pelo Programa Municipal de
							Fomento ao Teatro para a Cidade de São Paulo, em parceria com o
							Núcleo Performa. Em 2022, lançou o seu primeiro livro, intitulado
							"Primeira Pele" pela Editora Quelônio. Também em 2022, Louise foi
							aceita,
						</TextScrollReverse>
					</PersonDescReverse>
				</PersonRowReverse>

				<PersonRow>
					<PersonImage
						src={beatrizbarrosimage}
						alt="Beatriz Barros"
					></PersonImage>
					<PersonDesc>
						<h1>Rodrigo Pocidônio</h1>
						<SubtitleRow>
							<p>Diretora Executivo</p>
							<span>pocidonio@frestas.com</span>
						</SubtitleRow>
						<TextScroll>
							Pocidônio é dramaturgo, diretor de teatro e poeta. É bacharel em
							Artes Cênicas e mestre em Artes da Cena, ambos pela UNICAMP. Foi
							membro fundador da companhia de teatro "Academia de Palhaços", na
							qual trabalhou durante mais de dez anos como diretor criativo,
							ator e dramaturgo em mais de dez produções diferentes. Tem
							participações internacionais como ator em festivais de teatro como
							World Stage Design Taiwan, 2017, com a obra "Adeus, Palhaços
							Mortos", de Matei Vișniec, dirigida por José Roberto Jardim; e no
							XVIII Festival de Teatro La Habana de Cuba, 2019, com a peça "Fim
							de Partida", de S. Beckett, dirigida por Yoshi
						</TextScroll>
					</PersonDesc>
				</PersonRow>
			</div>

			<div>
				<ProfArea>
					<TitleP>Professores</TitleP>

					<ProfDesc>
						<section>
							<h1>{"Guilherme Meuzovo"}</h1>
							<SearchInput>
								<Input placeholder="Buscar" />
								<Image src={SearchIcon} alt="." />
							</SearchInput>
						</section>
						<ProfRow>
							<div>
								<ProfSmall>
									<h3>Cursos que ministrou</h3>
									<span>LABORATÓRIO DE TRANSFIGURAÇÃO MAUHSUAS</span>
								</ProfSmall>
								<TextScrollReverse>
									Guilherme Yazbek é ator, diretor teatral e pesquisador. Mestre
									em Artes Cênicas pela ECA-USP (2022) e bacharel (2010) pela
									mesma instituição, com habilitação em Direção Teatral. Sua
									pesquisa continuada localiza-se no cruzamento das artes
									cênicas com as artes visuais, a dança e a arquitetura. Foi
									orientador do Núcleo Experimental de Artes Cênicas do Sesi-SP,
									onde trabalhou com profundidade a técnica de improvisação
									Viewpoints. Foi também professor da Escola Móbile – onde
									lecionou Teatro e Corpo em Movimento. Como formação
									complementar, participou do treinamento das técnicas Suzuki e
									Viewpoints na SITI Company (NY) e do Laboratoire d’Étude du
									Mouvement, sob a coordenação
								</TextScrollReverse>
							</div>
							<div>
								<Image src={Pessoa_mold} alt="moldura" />
							</div>
						</ProfRow>
						<CarouselController>
							<CarouselImage src={CarouselArrow} alt="." reverse />
							<CarDot />
							<CarDot active />
							<CarDot />
							<CarDot />
							<CarDot />
							<CarDot />
							<CarDot />
							<CarouselImage src={CarouselArrow} alt="." />
						</CarouselController>
					</ProfDesc>

					<PersonGrid>
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
						<GridImage src={FotoJulia} alt="pessoa" />
					</PersonGrid>
				</ProfArea>

				<ColabArea>
					<TitleP>Colaboradores</TitleP>

					<div>
						<div>
							<Image src={Pessoa_mold} alt="moldura" />
							<h1>Guilherme Oporra</h1>
							<p>Designer | Linkedin</p>
						</div>
						<ColabGrid>
							<ColabGridImage src={FotoJulia} alt="pessoa" />
							<ColabGridImage src={FotoJulia} alt="pessoa" />
							<ColabGridImage src={FotoJulia} alt="pessoa" />
							<ColabGridImage src={FotoJulia} alt="pessoa" />
							<ColabGridImage src={FotoJulia} alt="pessoa" />
							<ColabGridImage src={FotoJulia} alt="pessoa" />
						</ColabGrid>
					</div>
				</ColabArea>
			</div>
			<Footer color="green" />
		</PeoplePage>
	);
}
