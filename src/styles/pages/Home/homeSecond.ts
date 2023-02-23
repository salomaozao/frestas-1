import Link from "next/link";
import { styled } from "../..";

export const HomeContainerSecond = styled('main', {
    backgroundColor: '$green',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
    // width: '100vw',
})
export const TextsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
})
export const IntroductSection = styled('section', {
    display: 'flex',

    p: {
        alignSelf: 'end',
        fontFamily: 'Miriam Libre',
        fontSize: '$58pix',
        fontWeight: 'bold',
        color: '$white',
    }
})
export const ArticleContent = styled('section',{
    display: 'grid',
    gridTemplateAreas: `"head head head head" "aside d aaside a" "img side side b"`,
    gridTemplateColumns: '2fr 1fr 2fr 1fr',
    gridTemplateRows: 'auto 1fr 1fr',
    gap: '3rem',

    img:{
        maxWidth: '522px',
        gridArea: 'img',
    }
})
export const ArticleAbout = styled('article', {
    gridArea: 'aaside',
    
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '2.875rem', 
    
  
    fontFamily: 'HK Grotesk',
    fontSize: '21pix',
    color: '$white',  
})

export const LinkContainer = styled(Link,{
    overflow: 'hidden',
    cursor: 'pointer', 
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '.45rem',

    strong: {
        fontSize: '$21pix',
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: 'white',
    },
})

export const ImageLateralContent = styled('aside',{
    height: '100vh',
    display: 'flex',

    img: {
        maxHeight: '100%',
        objectFit: 'cover',
    }
})