import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/badge";

export default function Stacks() {
    const imageClass = "hover:scale-110 duration-150 opacity-80 hover:opacity-100 hover:rotate-12 transition-all ease-in-out duration-300"

    return (
        <div className="pt-3 pb-6 my-3 text-center transition-all duration-300 ease-in-out rounded-lg group/container bg-lavender-macaron/15 hover:bg-lavender-macaron/30 ring-2 ring-lavender-macaron/50 hover:ring-lavender-macaron">
            <div className="flex justify-center ">
                <Badge className="px-4 transition-all duration-300 ease-in-out rounded-full bg-white/0 group-hover/container:bg-white">
                    <h1 className="my-2 transition-all duration-300 ease-in-out bg-gradient-to-r from-lavender-macaron via-raspberry-ganache to-golden-honeycomb hover:to-lavender-macaron hover:via-raspberry-ganache hover:from-golden-honeycomb bg-clip-text group-hover/container:text-transparent">Primary Toolbelt</h1>
                </Badge></div>
            <div className="grid grid-cols-3 gap-4 px-1 md:grid-cols-4 xl:grid-cols-7">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://git-scm.com/"} >
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/git.svg"
                                height={64}
                                width={64}
                                alt="Git"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/git.svg"
                                height={64}
                                width={64}
                                alt="Git"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Git</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://vercel.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/vercel.svg"
                                height={64}
                                width={64}
                                alt="Vercel"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/vercel.svg"
                                height={64}
                                width={64}
                                alt="Vercel"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Vercel</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://tailwindcss.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/tailwind.svg"
                                height={64}
                                width={64}
                                alt="Tailwind CSS"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/tailwind.svg"
                                height={64}
                                width={64}
                                alt="Tailwind CSS"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.typescriptlang.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/typescript.svg"
                                height={64}
                                width={64}
                                alt="Typescript"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/typescript.svg"
                                height={64}
                                width={64}
                                alt="Typescript"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://ui.shadcn.com/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/shadcnui.svg"
                                height={64}
                                width={64}
                                alt="Shadcn/ui"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/shadcnui.svg"
                                height={64}
                                width={64}
                                alt="Shadcn/ui"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Shadcn/ui</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={"https://www.prisma.io/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/prisma.svg"
                                height={64}
                                width={64}
                                alt="Prisma"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/prisma.svg"
                                height={64}
                                width={64}
                                alt="Prisma"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">Prisma</span>
                </div>
                <div className="flex flex-col items-center justify-center col-span-3 md:col-span-1">
                    <Link href={"https://www.postgresql.org/"}>
                        <div className="relative inline-flex group">
                            <div
                                className="absolute duration-300 ease-in-out opacity-0 transitiona-all -inset-px bg-gradient-to-r from-raspberry-ganache via-lavender-macaron to-golden-honeycomb rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Image
                                priority
                                src="/images/logo/light/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                // className={`${imageClass} inline group-hover/container:hidden`}
                                className={imageClass}
                            />
                            {/* <Image
                                priority
                                src="/images/logo/dark/postgresql.svg"
                                height={64}
                                width={64}
                                alt="PostgreSQL"
                                className={`${imageClass} hidden group-hover/container:inline`}
                            /> */}
                        </div>
                    </Link>
                    <span className="mt-2 text-lg">PostgreSQL</span>
                </div>
            </div>
        </div>
    );
}
