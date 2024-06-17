import Image from "next/image"
interface WeaponProps{
    name: string,
    className: string
}

export default function Weapon({name, className}:WeaponProps) :JSX.Element{
    return (
        <div className={`bg-secondary-300 rounded m-2 p-2 ${className}`}>
            <Image src={`/images/${name}.png`} width={52} height={54} alt="" />
        </div>
    )
}