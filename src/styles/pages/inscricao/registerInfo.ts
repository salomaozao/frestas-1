import { styled } from "@/styles";

export const FormContainerRegisterInfo = styled('section', {
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

    'input::placeholder' :{
        fontFamily: 'HK Grotesk',
        fontSize: '$18pix',
        color: '$black' ,
        fontWeight: 400,
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

export const CepAndStateInputs = styled('input', {
    width: '50%',
    margin: 0,
    variants:{
        field:{
            cep:{
                borderRight: '2px solid #5C2366',
            },
            state:{
                paddingLeft: '1rem',
            },
        }
    }
})
export const CityAndNeighborhoodInputs = styled('input', {
    width: '50%',
    margin: 0,

    variants:{
        field:{
            city:{
                borderRight: '2px solid #5C2366',
            },
            neighborhood:{
                paddingLeft: '1rem',
            },
        }
    },
    input:{
        width: '100%',
    }
})
export const NumberAndComplementInputs = styled('input', {
    width: '50%',
    margin: 0,

    variants:{
        field:{
            number:{
                borderRight: '2px solid #5C2366',
            },
            complement:{
                paddingLeft: '1rem',
            },
        }
    },
    input:{
        width: '100%',
    }
})

export const FormSubmitOrBack = styled('section', {
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
    img:{
        cursor: 'pointer',
    }
})

export const ButtonForm = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
})
