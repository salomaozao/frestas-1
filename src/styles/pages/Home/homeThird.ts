import Link from "next/link";
import { styled } from "../..";
import fundo from '../../../assets/home/third/fundo.png'
import backgroundvector from '../../../assets/home/third/backgroundvector.svg'


export const HomeContainerThird = styled('main', {
    backgroundImage: `url(${fundo.src})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
})
export const ContentTopics = styled('section', {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8rem auto',
    padding: '6rem 0',

    span:{
        fontFamily: 'Miriam Libre',
        fontSize: '$36pix',
        fontWeight: 'bold',
        color: '$white',
    }
})

export const Topic = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
})

export const ContentContainer = styled('section', {
    backgroundImage: `url(${backgroundvector.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    

    width: '100%',
    padding: '9rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '5.5rem',
    
    h1:{
        fontFamily: 'Miriam Libre',
        fontSize: '$36pix',
        fontWeight: 'bold',
        color: '$white',
        padding: '0 0 0 2rem',
    }
})
export const PublicationsGrid = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})
export const Publication = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    padding: '2.375rem 0 0 2.375rem',
    borderTop: `0.2rem #F0EBE5 solid`,

    h2: {
        fontFamily: 'Miriam Libre',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '$white',
    },
    p: {
        fontFamily: 'Miriam Libre',
        fontSize: '1rem',
        fontWeight: 400,
        color: '$white',
        margin: '.6rem 0 1.6rem 0',
    }
})
export const LinkContainer = styled(Link,{
    overflow: 'hidden',
    cursor: 'pointer', 
    textDecoration: 'none',
    alignSelf: 'flex-end',
    borderBottom: '0.2rem #F0EBE5 solid',

    strong: {
        fontSize: '$16pix',
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: 'white',
    },
})



