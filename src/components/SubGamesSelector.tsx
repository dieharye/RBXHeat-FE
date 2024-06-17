
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GAME_LIST } from "./GamesSelector"
import AppsIcon from '@mui/icons-material/Apps';
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
        text:{
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
export default function SubGamesSelector({ className }: HamProps) {
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
                    <AppsIcon />
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
                    {GAME_LIST.map((game, index) => <MenuItem className="uppercase" key={index} onClick={handleClose}>{game.title}</MenuItem>)}
                </Menu>
            </ThemeProvider>
        </div>
    );
}




