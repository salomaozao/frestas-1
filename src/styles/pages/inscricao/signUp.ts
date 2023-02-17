import Image from "next/image";
import { styled } from "../..";

export const SignUpContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '3.5rem',
    width: '80%',
    height: '80%',

    h1:{
        fontFamily: 'Miriam Libre', 
        fontWeight: 'bold',
        color: '$purple',
        fontSize: '$76pix',
    },
    h2:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: '$purple',
        fontSize: '$42pix',
    }
})
export const TitleAndSubtitle = styled('header', {

})
export const ContentOfThePage = styled('main', {
    display: 'flex',
    width: '100%',
})
export const SummaryOfOrderContainer = styled('section', {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    h3:{
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: '$purple',
        fontSize: '$24pix',
    },
    p: {
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: '$black',
        fontSize: '$24pix',
    },
    span: {
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        color: '$purple',
        fontSize: '$24pix',
    }
})
export const FormContainerSignUp = styled('section', {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        //gap: '1rem',
    
    h4: {
        fontFamily: 'HK Grotesk', 
        fontSize: '$24pix',
        color: '$purple',  
        fontWeight: 500,
        paddingLeft: '4rem',
    },
    form: {
        paddingLeft: '4rem',
        display: 'flex',
        flexDirection: 'column',
    },
    input:{
        backgroundColor: '$white',
        border: 'none',
        borderBottom: '2px solid #5C2366',
        padding: '2rem 0 1rem 0',
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',

    },
    'FormContainer > input' : {
        width: '70%',
    },
    'input::placeholder' :{
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        color: '$black' ,
        fontWeight: 400,
    },
    'input:focus': {
        boxShadow: '0 0 0 0',
        outline: '0',
        backgroundColor: '$white',
    },
    /* Cor de fundo e texto do autocomplete */
    'input:-webkit-autofill' :{
    '-webkit-box-shadow': '0 0 0 70px #F0EBE5 inset',
    '-webkit-text-fill-color': '#000000 !important',
    },

})

export const FieldOfCheckboxSocialName = styled('section',{
    padding: '1rem 0 0',
    display: 'flex',
    gap: '1rem',

    span: {
    fontFamily: 'HK Grotesk',
    fontSize: '$18pix',
    color: '$black',  
    fontWeight: 400,
    },
    input: {
    backgroundColor: '$white',
    border: '2px solid #5C2366',
    }
})

export const SubmitButtonContainer = styled('section', {
    display: 'flex',
    justifyContent: 'end',
    marginTop: '2rem',
    gap: '1rem',

    button: {
        color: '$purple',
        backgroundColor: '$white',
        border: 'none',
    
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        fontWeight: 400,
        cursor: 'pointer', 
    },
    img:{
        cursor: 'pointer', 
    }
})

export const CellAndCpfContainer = styled('section', {
    display: 'flex',
    
})
export const CellInput = styled('section', {
    width: '50%',
    borderRight: '2px solid #5C2366',
    input:{
        width: '100%',
    }
})
export const CpfInput = styled('section', {
    width: '50%',
    input: {
        width: '100%',
        paddingLeft: '1rem',
    }
})