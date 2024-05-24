import { ConvexClientProvider } from '@/components/providers/convex-provider'
import ModalProvider from '@/components/providers/modal-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Notion',
	description:
		"A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team",
	icons: {
		icon: '/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProvider>
					<EdgeStoreProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange
							storageKey='notion-theme'
						>
							<Toaster position='bottom-center' />
							<ModalProvider />
							{children}
						</ThemeProvider>
					</EdgeStoreProvider>
				</ConvexClientProvider>
			</body>
		</html>
	)
}
