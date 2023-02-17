import { styled } from "@/styles";

export const AboutFirstContainer = styled('main', {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
})
export const ContentContainerAboutFirst = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: '100%',
    justifyContent: 'space-around',
})
export const IntroductionHeader = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
})
export const IntroductionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.8rem',
})
export const LogoAndOriginWordContainer = styled('section', {
    display: 'flex',
    gap: '1.2rem',
})
export const OriginWordContainer = styled('article', {
    display: 'flex',
    flexDirection: 'column',

    span: {
        fontFamily: 'Miriam Libre',
        fontSize: '$24pix',
        fontWeight: 400,
        color: '$white',

        paddingLeft: '1rem',
        borderLeft: '2px solid #F0EBE5',
    }, 
    p: {
        paddingLeft: '1rem',
        fontFamily: 'HK Grotesk',
        fontSize: '$24pix',
        fontStyle: 'italic',
        color: '$white', 
    },
})
export const DefinitionsWordContainer = styled('article', {
    display: 'flex',
    flexDirection: 'column',
})
export const DefinitionsList = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',

    p: {
        fontFamily: 'Miriam Libre',
        fontSize: '$24pix',
        fontWeight: 400,
        color: '$white',
    }
})
export const ContentTextAbout = styled('section', {
    display: 'flex',
    gap: '2.5rem',
    p:{
        fontFamily: 'HK Grotesk',
        fontSize: '$21pix',
        color: '$white',  
    }
})
export const TwoFirstParagraphs = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '45%',
})
export const RestOfParagraphs = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '55%',
})