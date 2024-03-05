import Image from "next/image";
import Link from "next/link";
interface BannerProps {
    name: string;
    position: string;
    social: {
        name: string;
        show: boolean;
        link: string[];
    }[]
    ;
}

export default function Banner({ name, position, social }: BannerProps) {
    const logo = [
        "/images/logo/light/linkedin.svg",
        "/images/logo/light/github-circle.svg",
        "/images/logo/light/website.svg",
        "/images/logo/light/mail.svg"
    ]

    return (
        <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start">
                {/* TODO: On hover text gradient animate */}
                <h1 className="transition-all duration-300 ease-in-out text-lavender-macaron bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text hover:text-transparent w-fit">
                    <Link href={"/"}>
                        {name}
                    </Link>
                </h1>
                <h2 className="duration-300 ease-in-out text-black/70 text-md hover:-skew-x-12 w-fit">
                    <Link href={"https://en.wikipedia.org/wiki/Software_engineering"}>
                        {position}
                    </Link>
                </h2>
                {/* <div className="transition-all bg-animation"></div> */}
            </div>
            <div className="flex items-center justify-center gap-4 pr-1 my-4 overflow-x-auto md:justify-end">
                {
                    // TODO: Pulsing 
                    social.map((item, index) => (
                        <Link key={index} href={item.link.join("")}>
                            <Image
                                priority
                                src={logo[index]}
                                height={48}
                                width={48}
                                alt={item.name}
                                className={"scale-90 hover:scale-100 ease-in-out duration-300"}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
}