import { z } from 'zod'

const formSchema = z.object({
	username: z.string().min(2).max(50)
})

export default function NewRoundForm(): JSX.Element {
	return <section></section>
}