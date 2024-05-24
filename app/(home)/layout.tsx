import { ChildProps } from '@/types'
import Navbar from './_components/navbar'

const HomeLayout = ({ children }: ChildProps) => {
	return (
		<div className='h-full'>
			<Navbar />
			<main className='h-full mt-40'>{children}</main>
		</div>
	)
}

export default HomeLayout
