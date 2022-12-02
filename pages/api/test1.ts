// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	console.log('[api/test1] req.method: ', req.method)
    console.log('[api/test1] req.body: ', req.body)
	const { name } = req.body
	console.log('[api/test1] name: ', name)

	res.status(200).json({ name })
}
