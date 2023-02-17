import { styled } from "@/styles";
import Image from "next/image";

export const FooterContainer = styled('main', {
    variants:{
        color:{
            blue:{
                backgroundColor: '$blue',
            },
            orange:{
                backgroundColor: '$orange',
            },
            purple:{
                backgroundColor: '$purple',
            },
            green:{
                backgroundColor: '$green',
            }
        }
    },
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '50vh',
})

export const FooterContent = styled('main', {
    width: '90%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
})
export const LogoAndVectorContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '5rem',
})
export const LogoImage = styled(Image, {
    
})
export const ContactsAndVectorContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    gap: '2.5rem',
})
export const ImageMidContainer = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
})
export const ContactsContainer = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    
    h1: {
        fontFamily: 'Miriam Libre',
        fontSize: '$24pix',
        fontWeight: 'bold',
        color: '$white',
    },
    p:{
        fontFamily: 'HK Grotesk',
        fontSize: '$24pix',
        fontWeight: 400,
        color: '$white',
    }
})
export const ParagraphsOfContacts = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

export const SocialContainer = styled('section', {

})
export const TopContainerOfSocial = styled('div', {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    h1: {
        fontFamily: 'Miriam Libre',
        fontSize: '$24pix',
        fontWeight: 'bold',
        color: '$white',
    },
})
export const BottomContainerOfSocial = styled('div', {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
})
export const LinksOfSocialMedia = styled('div',{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
})