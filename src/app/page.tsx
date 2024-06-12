import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="bg-primary-600 flex items-center gap-0.5 px-4">
        {SUB_LINK.map((link, index) => (
          <Link href={link.link} key={index}>
            <div
              className={`py-3 px-3 grid place-content-center uppercase font-bold ${
                index < 2 ? "text-primary-200" : "text-secondary-100"
              }`}
            >
              {link.title}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

const SUB_LINK = [
  {
    title: "redeem code",
    link: "#",
  },
  {
    title: "leaderboard",
    link: "#",
  },
  {
    title: "affiliates",
    link: "#",
  },
  {
    title: "provably fair",
    link: "#",
  },
  {
    title: "support",
    link: "#",
  },
];
