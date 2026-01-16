import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const month = await import(`./month${params.month}.json`)
  return { month }
}