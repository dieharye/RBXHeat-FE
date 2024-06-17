import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

interface ButtonProps {
    onClick: () => void,
    showChat: boolean
}

export default function ChatToggleButton({onClick, showChat}:ButtonProps) {
    return (
        <button className="z-50 text-primary-500 rounded-full h-[40px] w-[40px] backdrop-blur-sm hover:backdrop-blur-lg hover:blur-sm bg-white/30 fixed xl:top-full duration-200 bottom-[10%] right-[20px]" onClick={onClick}>
            {showChat ? '>':<ChatOutlinedIcon/> }
        </button>
    )
}