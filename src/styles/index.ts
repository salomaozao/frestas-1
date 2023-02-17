import { createStitches } from '@stitches/react'

export const { config, styled, globalCss, keyframes, getCssText, theme, createTheme, css } = createStitches({
    theme: {
        colors: {
            white: '#F0EBE5',
            orange: '#E74214', 
            green: '#175F2F',
            purple: '#5C2366',
            blue: '#5280C0',
            black: '#000000'
        },
        fontSizes: {

            '18pix': '1.2rem',
            '21pix': '1.25rem',
            '24pix': '1.5rem',
            '32pix': '2rem',
            '36pix': '2.25rem',
            '42pix': '2.7rem',
            '52pix': '3.25rem',
            '58pix': '3.625rem',
            '64pix': '4rem',
            '76pix': '4.5rem',
        },
    }
})