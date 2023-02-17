import { styled } from "@/styles";
import Image from "next/image";
import Link from "next/link";

export const CoursesPage = styled('main', {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',

    variants: {
        page:{
            actually:{
                backgroundColor: '$white',
            },
            paste: {
                backgroundColor: '$purple',
            }
        }
    }
})
export const CoursesContainer = styled('div', {
    marginBottom: '6rem',
    width: '80%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    gap: '5rem',

    h1:{
        fontFamily: 'Miriam Libre', 
        fontWeight: 'bold',
        fontSize: '4.75rem',
        marginTop: '5%',
    },
    variants: {
        page:{
            actually:{
                h1:{
                    color: '$purple'
                } 
            },
            paste: {
                h1:{
                    color: '$white'
                }
            }
        }
    }
})
export const CoursesNavigation = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
})
export const ChoiceLink = styled(Link, {
    width: '30%',
    padding: '.5rem 0',
    borderRadius: '12px',

    fontFamily: 'Miriam Libre',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textAlign: 'center',
    overflow: 'hidden',
    cursor: 'pointer', 
    textDecoration: 'none',

    variants: {
        color:{
            purple:{
                backgroundColor: '$purple',
                color: '$white',  
            },
            white: {
                backgroundColor: '$white',
                color: '$purple',
            }
        },
        border:{
            purple: {
                border:'$purple 2px solid',
            },
            white: {
                border:'$white 2px solid',
            }
        }
    }
})
export const CourseContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
})
export const CourseMain = styled('article', {
    display: 'flex',
    overflow: 'hidden',
    cursor: 'pointer', 

    // '&:hover': {
    //     borderTop:'2px solid #E74214',
    //     cursor: 'pointer', 
    //     h2: {
    //         color: '$orange',
    //     },
    //     h4: {
    //         color: '$orange',
    //     },
    //     p: {
    //         color: '$orange',
    //    }
    // }
})


export const CourseMainInfo = styled('section', {
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '2rem 3rem 1rem 2rem',

    borderTop: '2px solid #5C2366',
    borderRight: '2px solid #5C2366',

    h2:{
        fontFamily: 'Miriam Libre', 
        fontWeight: 'bold',
        fontSize: '$32pix',
    },
    h4:{
        fontFamily: 'Hk Grotesk', 
        fontSize: '$24pix',
    },
    variants: {
        page:{
            actually:{
                borderTop: '2px solid #5C2366',
                borderRight: '2px solid #5C2366',
                h2:{
                    color: '$purple'
                }, 
                h4: {
                    color: '$black',
                }
            },
            paste: {
                borderTop: '2px solid #F0EBE5',
                borderRight: '2px solid #F0EBE5',
                h2:{
                    color: '$white'
                }, 
                h4: {
                    color: '$white',
                }
            }
        }
    }

})
export const CourseDate = styled('section', {
    width: '17%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    

    fontFamily: 'Miriam Libre',
    fontWeight: 'bold',
    fontSize: '$21pix',
    

    p: {
        width: '100%',
        height: '100%',
        padding: '2rem 3rem 1rem 2rem',
    }, 
    variants: {
        page:{
            actually:{
                color: '$black',
                borderTop: '2px solid #5C2366',
                borderRight: '2px solid #5C2366', 
            },
            paste: {
                color: '$white', 
                borderTop: '2px solid #F0EBE5',
                borderRight: '2px solid #F0EBE5', 
            }
        }
    }
})
export const Paragraph = styled('p', {
    variants:{
        page:{
            actually:{
                borderBottom: '2px solid #5C2366',
            },
            paste:{
                borderBottom: '2px solid #F0EBE5',
            },
        },
    },
    width: '100%',
    height: '100%',
    padding: '2rem 3rem 1rem 2rem',

})

export const CourseExtraInfo = styled('section', {
        width: '13%',
    
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    
        fontFamily: 'Miriam Libre',
        fontWeight: 'bold',
        fontSize: '$21pix',
    p: {
        width: '100%',
        height: '100%',
        padding: '2rem 3rem 1rem 2rem',
    },
    variants: {
        page:{
            actually:{
                color: '$black', 
                borderTop: '2px solid #5C2366',
            },
            paste: {
                color: '$white', 
                borderTop: '2px solid #F0EBE5',
            }
        }
    }
})
