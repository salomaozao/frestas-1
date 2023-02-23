import { styled } from "@/styles";

export const ConstructionMain = styled('main', {
    backgroundColor: '$green',
    height: '100vh',
    width: '100vw',
})
export const ConstructionContent = styled('div', {
    margin: 'auto',
    width: '60%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5rem',

    h1:{
        fontFamily: 'Miriam Libre',
        fontSize: '$42pix',
        fontWeight: 'bold',
        color: '$white',
    }
})