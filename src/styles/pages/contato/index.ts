import { styled } from "@/styles";
import backgroundvector from '../../../assets/contact/vector.svg'

export const ContactPage = styled('div', {
    backgroundColor: '$green'
})
export const ContactUsContainer = styled('main', {
    backgroundColor: '$white',
    
})

export const PageContent = styled('div',{
    backgroundImage: `url(${backgroundvector.src})`,
    backgroundSize: 'cover',//contain apos certa largura
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
})

export const SectionForm = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
})
export const ContactContent = styled('section', {
    margin: '4rem',
    width: '80%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    h1:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        fontSize: '$76pix',
        color: '$green',
    }

})
export const FormContainer = styled('section', {
    display: 'flex',
    width: '100%',
    margin: '4rem',
    h2:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        fontSize: '$24pix',
        color: '$green',
        width: '25%',
    }
})
export const Form = styled('form', {
    display: 'flex',
    width: '100%',
    marginTop: '-2.5rem',
    justifyContent: 'space-between'
})
export const InputsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    input:{
        backgroundColor: '$white',
        border: 'none',
        borderBottom: '2px solid #175F2F',
        padding: '2rem 0 1rem 0',
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
    },
    'input::placeholder' :{
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        color: '$black' ,
        fontWeight: 'bold',
    },
    'input:focus': {
        boxShadow: '0 0 0 0',
        outline: '0',
    }, 
    'input:-webkit-autofill' :{
        '-webkit-box-shadow': '0 0 0 70px #F0EBE5 inset',
        '-webkit-text-fill-color': '#000000 !important',
    },
})
export const LogoAndSocialContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    h2:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        fontSize: '$24pix',
        color: '$green',
        paddingBottom: '1rem',
        paddingRight:'3rem',
    }
})
export const SocialContacts = styled('div', {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
})
export const TextAreaContainer = styled('div', {
    display: 'flex',
    alignItems: 'end',
    width: '40%',
    borderBottom: '2px solid #175F2F',
    paddingBottom: '1rem',

    textarea:{
        width: '100%',
        backgroundColor: '$white',
        border: 'none',
        padding: '2rem 0 1rem 0',
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        resize: 'none',
        height: '100%',
    },
    'textarea::placeholder' :{
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        color: '$black' ,
        fontWeight: 'bold',
    },
    'textarea:focus': {
        boxShadow: '0 0 0 0',
        outline: '0',
    }, 
    button:{
        backgroundColor: '$white',
        border: 'none',
        cursor: 'pointer',
    }
})