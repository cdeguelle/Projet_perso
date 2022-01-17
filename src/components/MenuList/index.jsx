import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const HeaderLink = styled.a`
    display: block;
    padding: 15px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#aaa')};
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
    &:after {
        transition: all 0.5s;
    }
    &:after {
        transition: all 0.5s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 1px;
        content: '.';
        color: transparent;
        background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')};
        visibility: none;
        opacity: 0;
        z-index: -1;
        border-radius: 5px;
    }
    &:hover {
        color: white;
    }
    &:hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }
`

export default function MenuListComposition({ menuItems }) {
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const theme = useSelector(selectTheme)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <i className="fas fa-bars" style={{ fontSize: '2rem' }}></i>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start'
                                        ? 'left top'
                                        : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {menuItems.map((menuItem) => (
                                            <MenuItem onClick={handleClose}>
                                                <HeaderLink theme={theme} href={menuItem.href}>{menuItem.text}</HeaderLink>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    )
}
