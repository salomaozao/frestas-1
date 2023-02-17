import { BottomContainerOfSocial, ContactsAndVectorContainer, ContactsContainer, FooterContainer, FooterContent, ImageMidContainer, LinksOfSocialMedia, LogoAndVectorContainer, LogoImage, ParagraphsOfContacts, SocialContainer, TopContainerOfSocial, } from "@/styles/footer";
import Image from "next/image";
import vectorleft from '../../assets/footer/vector1.svg'
import vectormid from '../../assets/footer/vector2.svg'
import vectorright from '../../assets/footer/vector3.svg'
import logo from '../../assets/footer/frestaslogo.svg'
import instagram from '../../assets/footer/instagramicon.svg'
import twitter from '../../assets/footer/twittericon.svg'
import linkedin from '../../assets/footer/linkedinicon.svg'
import Link from "next/link";

interface FooterProps {
    color: 'blue'|'orange'|'purple'|'green'
}
export function Footer({ color }: FooterProps){
    return(
        <FooterContainer color={color}>
            <FooterContent>
                <LogoAndVectorContainer>
                    <Image src={vectorleft} alt=""/>
                    <LogoImage src={logo} alt=""/>
                </LogoAndVectorContainer>
                <ContactsAndVectorContainer>
                    <ContactsContainer>
                        <h1>Contato diretores</h1>
                        <ParagraphsOfContacts>
                            <p>beatrizbarros@frestas.com</p>
                            <p>belmonte@frestas.com</p>
                        </ParagraphsOfContacts>
                    </ContactsContainer>
                    <ImageMidContainer>
                        <Image src={vectormid} alt=""/>
                    </ImageMidContainer>
                </ContactsAndVectorContainer>
                <SocialContainer>
                    <TopContainerOfSocial>
                        <Image src={vectorright} alt=""/>
                        <h1>contato@frestas.com</h1>
                    </TopContainerOfSocial>
                    <BottomContainerOfSocial>
                        <LinksOfSocialMedia>
                            <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={instagram} alt=""/></Link>
                            <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={twitter} alt=""/></Link>
                            <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={linkedin} alt=""/></Link>
                        </LinksOfSocialMedia>
                    </BottomContainerOfSocial>
                </SocialContainer>
            </FooterContent>
        </FooterContainer>
    )
}