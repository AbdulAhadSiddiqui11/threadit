import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'

import UserAuthForm from '@/components/UserAuthForm'
import { logo } from '@/assets/images'

const SignIn: FC = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className="flex flex-col space-y-2 text-center">
                <Image
                    src={logo}
                    alt='ThreadIt'
                    width={35}
                    height={35}
                    className='mx-auto h-12 w-12'
                />
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                <p className='text-sm max-w-xs mx-auto'>
                    By continuing, you agree to our User Agreement and Privacy Policy.
                </p>

                <UserAuthForm />

                <p className='px-8 text-center text-sm text-zinc-700'>
                    New to ThreadIt? {' '}
                    <Link href='/sign-up' className='hover:text-zinc-800 text-sm underline underline-offset-4'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn
