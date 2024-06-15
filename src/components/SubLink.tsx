import Link from "next/link"

export default function SubLink() {
    return (
        <div className="bg-primary-600">
            <div className="flex px-4">
                {SUB_LINK.map((link, index) => (
                    <Link href={link.link} key={index}>
                        <div
                            className={`py-2 px-2 text-sm grid place-content-center uppercase duration-200 font-bold ${index < 2 ? "text-blue-100 hover:text-primary-200" : "text-secondary-200 hover:text-primary-200"
                                }`}
                        >
                            {link.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}


const SUB_LINK = [
    {
        title: "redeem code",
        link: "#",
        active: true,
    },
    {
        title: "leaderboard",
        link: "#",
        active: true,
    },
    {
        title: "affiliates",
        link: "#",
        active: false,
    },
    {
        title: "provably fair",
        link: "#",
        active: false,

    },
    {
        title: "support",
        link: "#",
        active: false,

    },
];
