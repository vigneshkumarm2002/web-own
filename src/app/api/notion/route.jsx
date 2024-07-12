import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function POST(req) {
  try {
    const { name, phone, email, lookingFor } = await req.json()
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: phone,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        LookingFor: {
          rich_text: [
            {
              text: {
                content: lookingFor,
              },
            },
          ],
        },
      },
    })
    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error creating page in Notion:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to create page in Notion' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
