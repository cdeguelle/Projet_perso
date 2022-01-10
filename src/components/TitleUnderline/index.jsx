import styled from 'styled-components'

const TitleUnderline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

const SmallUnderline = styled.span`
    background: white;
    width: 17px;
    height: 4px;
    display: inline-block;
    margin: 0 2px;
`

const BigUnderline = styled.span`
    background: linear-gradient(70deg, blue, pink);
    height: 4px;
    display: inline-block;
    width: 145px;
    margin: 0 2px;
`

function Footer() {

    return (
        <TitleUnderline>
            <SmallUnderline />
            <BigUnderline />
            <SmallUnderline />
        </TitleUnderline>
    )
}

export default Footer