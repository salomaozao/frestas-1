import {
	ArticleAbout,
	ArticleContent,
	HomeContainerSecond,
	ImageLateralContent,
	IntroductSection,
	LinkContainer,
	TextsContainer,
} from "@/styles/pages/Home/homeSecond";
import Image from "next/image";
import vector1 from "../../assets/home/second/vector1.svg";
import vector2 from "../../assets/home/second/vector2.svg";
import vector3 from "../../assets/home/second/vector3.svg";
import vector4 from "../../assets/home/second/vector4.svg";

export function HomeSecond() {
	return (
		<HomeContainerSecond>
			<TextsContainer>
				<IntroductSection>
					<Image src={vector1} alt="" />
					<p>
						O conhecimento<br></br>através das <br></br>frestas
					</p>
				</IntroductSection>
				<ArticleContent>
					<Image src={vector2} alt="" />
					<ArticleAbout>
						<p>
							O Instituto Frestas tem como seu objetivo<br></br>
							principal a promoção da educação, da<br></br>
							cultura, da arte, da tecnologia, dos direitos<br></br>
							humanos e da democracia. Produzimos<br></br>
							cursos e outros formatos de atuação<br></br>
							educacional assim como obras de arte de<br></br>
							diversas linguagens e mídias.
						</p>
						<LinkContainer href={`/sobre`}>
							<strong>Saiba mais</strong>
							<Image src={vector3} alt="Saiba mais" />
						</LinkContainer>
					</ArticleAbout>
				</ArticleContent>
			</TextsContainer>

			<ImageLateralContent>
				<Image src={vector4} alt="" />
			</ImageLateralContent>
		</HomeContainerSecond>
	);
}
