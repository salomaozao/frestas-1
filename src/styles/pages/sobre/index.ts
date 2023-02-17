import { styled } from "@/styles";
import Image from "next/image";

export const AboutContainer = styled('main', {
    backgroundColor: '$green',
    display: 'flex',
    flexDirection: 'column',
})
export const ImageContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})
export const Image1 = styled(Image, {
    marginTop: '-12rem',
})
