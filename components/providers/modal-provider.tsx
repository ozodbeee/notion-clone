'use client'

import { useEffect, useState } from 'react'
import CoverImageModal from '../modls/cover-image-modal'
import { SettingsModal } from '../modls/settings-modal'

const ModalProvider = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<>
			<SettingsModal />
			<CoverImageModal />
		</>
	)
}

export default ModalProvider
