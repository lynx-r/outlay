import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const order = await import(`./order${params.order}.json`)
  return { order }
}