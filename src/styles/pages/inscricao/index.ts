import { styled } from "@/styles";
import { Field } from "formik";

export const PageSubscription = styled('main', {
    backgroundColor: '$white',
    width: '100vw',
    height: '100vh',
})
export const SubscriptionContainer = styled('main', {
    backgroundColor: '$white',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
})

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
export const FieldCourse = styled(Field, {
    display: 'none',
})