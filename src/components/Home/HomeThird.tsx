import styles from './HomeThird.module.css'
import imaginarvector from '../../assets/home/third/imaginarvector.svg'
import resistirvector from '../../assets/home/third/resistirvector.svg'
import aprendervector from '../../assets/home/third/aprendervector.svg'
import { ContentContainer, ContentTopics, HomeContainerThird, LinkContainer, Publication, PublicationsGrid, Topic } from '@/styles/pages/Home/homeThird'
import Image from 'next/image'
import fundo from '../../assets/home/third/fundo.png'


export function HomeThird(){
    return (
        <HomeContainerThird>
            
                <ContentTopics >
                    <Topic>
                        <span>IMAGINAR</span>
                        <Image src={imaginarvector} alt="Imaginar"/>
                    </Topic>
                    <Topic>
                        <span>RESISTIR</span>
                        <Image src={resistirvector} alt="Resistir"/>
                    </Topic>
                    <Topic>
                        <span>APRENDER</span>
                        <Image src={aprendervector} alt="Aprender"/>
                    </Topic>               
                </ContentTopics>
            
            <ContentContainer>
                <h1>Últimas publicações</h1>
                <PublicationsGrid>
                    <Publication>
                        <h2>Conheça 5 <br></br>curiosidades sobre <br></br>Patti Smith</h2>
                        <p>
                            Lorem ipsum dolor sit amet,<br></br> 
                            consectetur adipiscing elit.<br></br> 
                            Maecenas eu odio sit amet<br></br> 
                            est ultrices lobortis. Aliquam<br></br>  
                            molestie purus interdum<br></br> 
                            felis mattis, sed venenatis<br></br> 
                        </p>
                        <LinkContainer href={`/`}><strong>Leia mais</strong></LinkContainer>
                    </Publication>
                    <Publication>
                        <h2>Conheça 5 <br></br>curiosidades sobre <br></br>Patti Smith</h2>
                        <p>
                            Lorem ipsum dolor sit amet,<br></br> 
                            consectetur adipiscing elit.<br></br> 
                            Maecenas eu odio sit amet<br></br> 
                            est ultrices lobortis. Aliquam<br></br>  
                            molestie purus interdum<br></br> 
                            felis mattis, sed venenatis<br></br> 
                        </p>
                        <LinkContainer href={`/`}><strong>Leia mais</strong></LinkContainer>
                    </Publication>
                    <Publication>
                        <h2>Conheça 5 <br></br>curiosidades sobre <br></br>Patti Smith</h2>
                        <p>
                            Lorem ipsum dolor sit amet,<br></br> 
                            consectetur adipiscing elit.<br></br> 
                            Maecenas eu odio sit amet<br></br> 
                            est ultrices lobortis. Aliquam<br></br>  
                            molestie purus interdum<br></br> 
                            felis mattis, sed venenatis<br></br> 
                        </p>
                        <LinkContainer href={`/`}><strong>Leia mais</strong></LinkContainer>
                    </Publication>
                </PublicationsGrid>
            </ContentContainer>
        </HomeContainerThird>
    )
}