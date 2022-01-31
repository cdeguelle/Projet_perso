import styled from 'styled-components'

export const Subtitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ isMobile }) => (isMobile ? '25px' : '50px')};
    color: ${({ theme }) => (theme === 'light' ? '#1d1d1f' : 'white')};
    margin-bottom: 0;
    margin-top: 50px;
`

export const Text = styled.p`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => (theme === 'light' ? '#1d1d1f' : 'white')};
`