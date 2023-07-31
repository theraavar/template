import clientPromise from '@/lib/mongodb'

export default async (req: any, res: any): Promise<void> => {
    try {
        const client = await clientPromise
        const db = client.db('database_name')

        const collection = await db
            .collection('name')
            .find({})
            .sort(-1)
            .limit(100)
            .toArray()

        res.json(collection)
    } catch (e) {
        console.error(e)
    }
}