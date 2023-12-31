import Link from "next/link"
import Image from "next/image"

import { logo } from '@/assets/images'
import { buttonVariants } from "./ui/Button"
import { getAuthSession } from "@/lib/auth"

const Navbar = async () => {

    const session = await getAuthSession();

    return (
        <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                <Link href='/' className="flex gap-2 items-center">
                    <Image
                        src={logo}
                        alt='ThreadIt'
                        width={35}
                        height={35}
                        className='h-8 w-8 sm:h-6 sm:w-6'
                    />
                    <p className="hidden text-zinc-700 text-sm font-medium md:block">ThreadIt</p>
                </Link>

                {/* Search bar */}

                {session ? (
                    <Link href='/create-post' className={buttonVariants()}> Create Post </Link>
                ) : (
                    <Link href='/sign-in' className={buttonVariants()}> Sign In </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar