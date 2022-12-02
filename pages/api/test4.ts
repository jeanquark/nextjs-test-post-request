// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	console.log('[api/test4] req.method: ', req.method)
	console.log('[api/test4] req.body: ', req.body)
	

	res.status(200).json({ name: 'jeanquark4' })
}


export const config = {
	api: {
		bodyParser: false
	}
};