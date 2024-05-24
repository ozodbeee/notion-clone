'use client'

import { ModeToggle } from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { useConvexAuth } from 'convex/react'
import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
	const { isAuthenticated, isLoading } = useConvexAuth()
	const scrolled = useScrolled()

	return (
		<div
			className={cn(
				'z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between',
				scrolled && 'border-b shadow-sm'
			)}
		>
			<Logo />
			<div className='flex items-center gap-x-2'>
				{isLoading && <Loader />}

				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode='modal'>
							<Button size={'sm'} variant={'outline'}>
								Log In
							</Button>
						</SignInButton>

						<SignInButton mode='modal'>
							<Button size={'sm'}>Det Notion Free</Button>
						</SignInButton>
					</>
				)}

				{isAuthenticated && !isLoading && (
					<>
						<Button variant={'ghost'} size={'sm'} asChild>
							<Link href={'/documents'}>Enter Notion</Link>
						</Button>
						<UserButton afterSignOutUrl='/' />
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	)
}
