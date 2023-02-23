import { styled } from "../..";

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