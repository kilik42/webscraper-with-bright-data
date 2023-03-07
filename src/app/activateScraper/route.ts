// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }
type Body ={
    search: string;
}
export async function POST(req: Request & Body) {
    const search = req.body.search;
    }

