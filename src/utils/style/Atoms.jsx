import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right: 0.5rem;
    color: white;
    padding: 15px;
    &:hover {
        border: 1px solid white;
        box-shadow: 2px 2px 2px 1px white;
    }
`

export const TitleHidden = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; 
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; 
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`