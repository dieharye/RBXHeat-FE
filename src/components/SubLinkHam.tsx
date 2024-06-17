
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SUB_LINK } from "./SubLink"
import HouseIcon from '@mui/icons-material/House';
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
        background: {
            paper: '#0A1428',
        },
        text: {
            primary: '#fff'
        }
    },
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

interface HamProps {
    className: string
}
export default function SubLinkHam({ className }: HamProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={`${className} mb-2`}>
            <ThemeProvider theme={theme}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <HouseIcon />
                </Button>
                <Menu
                    className=""
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {SUB_LINK.map((link, index) => <MenuItem className="uppercase" key={index} onClick={handleClose}>{link.title}</MenuItem>)}
                    <MenuItem className="uppercase" onClick={handleClose}>Sigin In/Sign Out</MenuItem>
                </Menu>
            </ThemeProvider>
        </div>
    );
}




