import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "ijjsarhl",
    dataset: "production",
    apiVersion: "2023-12-18",
    useCdn: false
})

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const posts = await client.fetch(`*[_type == "post"]`);

    if (posts) {
        return {
            posts
        }
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}