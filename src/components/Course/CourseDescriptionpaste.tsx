import { CourseDescriptionContainer, DescriptionImageContainer, TopContainerOfDescription } from "@/styles/pages/cursos/courseDescription";
import Image from "next/image";
import courseimage from '../../assets/course/courseimage.png'

export function CourseDescriptionPaste(){
    return(
        <CourseDescriptionContainer>
            <TopContainerOfDescription page='paste'>
                <DescriptionImageContainer>
                    <Image src={courseimage} alt=""/>
                </DescriptionImageContainer>
                <p>
                    O tempo cronológico ou o tempo a experiência? A finitude da vida, a iminência da
                    morte, os prazos, as expectativas, a memória: passado, presente e futuro. Elaborar
                    nossa relação com o tempo sempre foi um dos maiores desafios do pensamento
                    humano. O curso lança olhares parciais e específicos - tendo a consciência de que é
                    impossível esgotar o tema - sobre algumas obras e artistas do teatro, cinema e da 
                    literatura. Iremos adentrar a temporalidade através de perspectivas artísticas, esse
                    caminho aberto. Longe de propor respostas totalizantes e finais, aqui nos interessa 
                    a pergunta. Para isso, recorremos a artistas que se desafiaram continuamente,
                    desbravando assim novas possibilidade de percepção e experienciação do tempo,
                    tanto nos aspectos formais quanto nos temáticos de suas obras: Homero, James
                    Joyce, Jorge Luís Borges, Elena Garro, Andrei Tarkóvski, Alain Resnais, Agnès
                    Varda, Lucrecia Martel, Tadeusz Kantor, Robert Wilson, Sarah Kane e Elfriede
                    Jelinek comporão nosso território de exploração. Por sua sua vez Santo Agostinho,
                    Hegel, Deleuze, Jean-Pierre-Sarrazac e Jorge Larrosa nos darão as ferramentas
                    teóricas necessárias para nossa jornada.
                </p>
            </TopContainerOfDescription>
        </CourseDescriptionContainer>
    )
}