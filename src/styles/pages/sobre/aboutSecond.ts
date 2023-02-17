import { styled } from "@/styles";
import fundomain from '../../../assets/about/home.png'

export const AboutSecondContainer = styled('main', {
    height: '200vh',
    backgroundImage: `url(${fundomain.src})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',

    img: {
        flex: 1,
    }

})
export const EmptyDiv = styled('div', {
    height: '45%',
    width: '100%',
})
export const ConatinerOfImageAndText = styled('div', {
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    height: '55%'
})
export const ContentContainerAboutSecond = styled('section', {
    alignSelf: 'start',
    padding: '5rem 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '8rem',

    

    h1:{
        fontFamily: 'Miriam Libre',
        fontSize: '$42pix',
        fontWeight: 'bold',
        color: '$green',
        padding: '0',
    }
})
export const ContainerContentAboutSecond = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})
export const ParagraphsContainer = styled('section',{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
})
export const ParagraphAndBorderContainer = styled('article',{
    display: 'flex',
    alignItems: 'start',
    gap: '1rem',
    padding: '0 10%',//vai ter que ser na vdd pro content com as bordas 
    p:{
        fontFamily: 'HK Grotesk',
        fontSize: '$24pix',
        fontWeight: 400,
        color: '$black',
        paddingTop: '2rem',
    }

})