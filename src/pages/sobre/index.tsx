import { AboutFirst } from "@/components/About/AboutFirst";
import { AboutContainer} from "@/styles/pages/sobre";
import { AboutThird } from "@/components/About/AboutThird";
import { Footer } from "@/components/Footer";
import { AboutSecond } from "@/components/About/AboutSecond";
import { Header } from "@/components/Header";

export default function About() {
    return (
      <>
        <AboutContainer>
          <Header background="green"/>
          <AboutFirst/> 
          <AboutSecond/> 
          <AboutThird/>
        </AboutContainer>
        <Footer color="purple"/>
      </>
    )
  }

  {/* <ImageContainer>
          <Image src={home} alt=""/>
          <Image1 src={vector1} alt=""/>
        </ImageContainer> */}