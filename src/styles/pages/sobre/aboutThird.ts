import { styled } from "@/styles";
import Image from 'next/image'

export const AboutThirdContainer = styled('main', {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10rem auto',
})
export const AsideVectorLeft = styled('aside', {
})

export const ContentContainerAboutThird = styled('div', {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    gap:'5.5rem',

    h1:{
        fontFamily: 'Miriam Libre',
        fontSize: '$42pix',
        fontWeight: 'bold',
        color: '$white',
    }
})
export const ContainerTextBoxes= styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    marginLeft: '3rem',
})
export const SectionOfBordersAndContainerText = styled('article', {
    display: 'flex',
    alignItems: 'flex-end',

    p: {
        paddingTop: '1rem',
        fontFamily: 'HK Grotesk',
        fontSize: '$21pix',
        fontWeight: 400,
        color: '$white',  
    },
})
export const AsideVectorRight = styled('aside', {
})
export const BordersImages = styled(Image, {
    alignSelf: 'flex-start',
})