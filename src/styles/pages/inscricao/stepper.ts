import { styled } from "../..";

export const ButtonContent = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2rem',

    button:{
        color: '$purple',
        backgroundColor: '$white',
        border: 'none',

        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        fontWeight: 400,
        cursor: 'pointer',
    },
})

export const ButtonForm = styled('button', {
    width: '',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '1rem',
})

export const FormContainerSignUp = styled('section', {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',

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

    'input::placeholder' :{
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        color: '$black' ,
        fontWeight: 400,
    }
    ,
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

    p: {
        padding: '1rem 0',
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        fontWeight: 'bold',
        color: '$purple',
    }

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

export const CpfAndPhone = styled('section', {
    borderBottom: '2px solid #5C2366',
    display: 'flex',
})

export const PhoneInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        border: 'none',
        borderRight: '2px solid #5C2366',
    }
})

export const CpfInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        paddingLeft: '1rem',
        border: 'none',
    }
})

export const EthnicityAndGender = styled('section', {
    borderBottom: '2px solid #5C2366',
    display: 'flex',
})

export const EthnicityInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        border: 'none',
        borderRight: '2px solid #5C2366',
    }
})

export const GenderInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        border: 'none',
    }
})

export const BirthAndSchool = styled('section', {
    borderBottom: '2px solid #5C2366',
    display: 'flex',
})

export const BirthInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        border: 'none',
        paddingRight: '0.5rem',
        borderRight: '2px solid #5C2366',
    }
})
export const SchoolInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        paddingLeft: '1rem',
        border: 'none',
    }
})

export const StateAndCity = styled('section', {
    borderBottom: '2px solid #5C2366',
    display: 'flex',
})

export const StateInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        border: 'none',
        paddingRight: '0.5rem',
        borderRight: '2px solid #5C2366',
    }
})
export const CityInput = styled('div', {
    width: '50%',
    input: {
        width: '100%',
        paddingLeft: '1rem',
        border: 'none',
    }
})





