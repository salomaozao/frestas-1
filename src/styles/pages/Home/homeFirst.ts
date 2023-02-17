import background1 from '../../../assets/home/first/background1.png'
import background2 from '../../../assets/home/first/background2.png'
import background3 from '../../../assets/home/first/background3.png'
import background4 from '../../../assets/home/first/background4.png'
import menuvector from '../../../assets/home/first/vector5.svg'
import { styled } from "../..";
import Link from 'next/link';

export const HomeContainerFirst = styled('main', {
    variants:{
        background:{
            1:{
                backgroundImage: `url(${background1.src})`,
                button:{
                    '&:first-child': {
                        backgroundColor: '$white',
                    }  
                }
            },
            2:{
                backgroundImage: `url(${background2.src})`,
            },
            3:{
                backgroundImage: `url(${background3.src})`,
            },
            4:{
                backgroundImage: `url(${background4.src})`,
            },
        }
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
})
export const HomeMenu = styled('header', {
    backgroundImage: `url(${menuvector.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    height: '66%',
    display: 'flex',
    alignItems: 'center',

    nav:{
        width: '70%',
        alignSelf: 'flex-start',
        paddingTop: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft:'-3rem',
    },
    img : {
        width: '20%',
        paddingLeft: '5rem',
    }

})
export const LinkNavigation = styled(Link, {

    overflow: 'hidden',
    cursor: 'pointer', 
    textDecoration: 'none',

    fontFamily: 'HK Grotesk',
    fontSize: '$24pix',
    color: '$white',  

})
export const CarrousselContainer = styled('nav', {
    alignSelf: 'end',
    paddingRight: '4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '-15rem',
    button:{
        width: '1.3rem',
        height: '1.3rem',
        borderRadius: '50%',
        background: 'transparent',
        border: '2px solid #F0EBE5',
        '&:focus':{
            backgroundColor: '$white',
        }
    }
    
})