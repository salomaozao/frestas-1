import { styled } from "@/styles";
import Image from "next/image";
import backgroundPurple from '../assets/header/headervectorpurple.svg'
import backgroundOrange from '../assets/header/headervectororange.svg'
import backgroundGreen from '../assets/header/headervectorgreen.svg'
import backgroundBlue from '../assets/header/headervectorblue.svg'

export const HeaderContainer = styled('main', {
    backgroundColor: '$green',

})
export const HeaderNavigation = styled('nav', {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '3rem',
    paddingRight: '3rem',
    paddingLeft: '3rem',
    height:'25vh',
    width: '100%',
    variants:{
        background:{
            purple:{
                backgroundImage: `url(${backgroundPurple.src})`,
            },
            orange:{
                backgroundImage: `url(${backgroundOrange.src})`
            },
            green:{
                backgroundImage: `url(${backgroundGreen.src})`
            },
            blue:{
                backgroundImage: `url(${backgroundBlue.src})`
            }
        }
    },
    backgroundSize: 'cover',
})