import type { PageServerLoad } from "./$types";
import months from './months.json';

export const load: PageServerLoad = () => {
  return {
    months
  }
}