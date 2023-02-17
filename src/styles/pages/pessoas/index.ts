import { styled } from "@/styles";
import containerbeatriz from '../../../assets/people/containerbeatriz.svg'
import containerlouise from '../../../assets/people/containerlouise.svg'

export const PeoplePage = styled('main', {
    backgroundColor: '$white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const PeopleContainer = styled('div', {
    width: '100%',
    height: '90%',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    paddingBottom: '4rem',

})

export const TitlePageContainer = styled('header', {
    width: '25%',
    borderBottom: '2px solid $orange',
    display: 'flex',
    justifyContent: 'end',

    h1:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        fontSize: '$64pix',
        color: '$orange',
    }
})

export const BeatrizBarrosContainer = styled('section', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
})

export const VectorAndImageContainer = styled('section',{
    display: 'flex',
    width: '100%',
    paddingLeft: '-5rem',

    img:{
        alignSelf: 'start',
        
    }
})

export const TextAboutContainerBase = styled('section', {
    width: '954px',
    height: '638px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
})

export const TextAboutBeatriz = styled(TextAboutContainerBase, {
    backgroundImage: `url(${containerbeatriz.src})`,
    backgroundSize: 'cover',
    marginTop: '5rem',
    marginLeft: '-10rem',
})

export const TextAboutContent = styled('article', {
    width: '85%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    h1:{
        fontSize: '$52pix',
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: 'white',
    },    
    
})

export const RoleAndContact = styled('section', {
    display: 'flex',
    h2:{
        fontSize: '$24pix',
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: 'white',
        paddingRight: '1rem',
        borderRight: '2px solid #F0EBE5'
    },
    span:{
        fontSize: '$24pix',
        fontFamily: 'Miriam Libre',
        color: 'white',
        paddingLeft: '1rem',
    }
})

export const Byography = styled('section',{
    p:{
        fontFamily: 'HK Grotesk',
        fontSize: '21pix',
        color: '$white',
        lineHeight: 2,  
    }
})

export const LouiseBelmonteContainer = styled('section', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    justifyContent: 'end',
})

export const TextAboutLouise = styled(TextAboutContainerBase, {
    backgroundImage: `url(${containerlouise.src})`,
    backgroundSize: 'cover',
    marginRight: '-20rem',

    
})
