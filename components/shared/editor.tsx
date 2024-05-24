import { useEdgeStore } from '@/lib/edgestore'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { useTheme } from 'next-themes'

interface EditorProps {
	onChange: (value: string) => void
	initialContent?: string
	editable?: boolean
}

const Editor = ({ onChange, editable, initialContent }: EditorProps) => {
	const { resolvedTheme } = useTheme()
	const { edgestore } = useEdgeStore()

	const handleUpload = async (file: File) => {
		const res = await edgestore.publicFiles.upload({ file })

		return res.url
	}

	const editor = useCreateBlockNote({
		uploadFile: handleUpload,
	})

	return (
		<BlockNoteView
			editor={editor}
			theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
		/>
	)
}

export default Editor
