import { ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata) {
    const id = params.id

    const result = await fetch(`https://.../${id}`).then((res) => res.json())

    /* Any of the metadata options that we want to generate needs to be in the return statement. */
    return {
        title: result.title
    }
}

/* This will populate our routes. */
export async function generateStaticParams() {
    return getPaths()
}

/* This function will return the ids used in the generateStaticParams() function. */
async function getPaths() {
    const paths: string[] = []

    /* We need to insert the code to fetch the ids from our data. */

    return paths
}

/* This is what is displayed on each page as pulled from the params. */
const Page = ({ params, searchParams }: Props) => {
    return (
        <div>
            {params.id}
        </div>
    )
}