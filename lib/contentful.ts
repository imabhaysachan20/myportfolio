import { createClient } from 'contentful';

const client = createClient({
  space: "qobtwzbejzhp",
  accessToken: "l8hHCjsKSpua0Nh2ai_a0zqrwPy5Gzhf22hsAS7b8oU",
});

// export async function fetchReviews() {
//   const entries = await client.getEntries({
//     content_type: 'reviews',
//   });
//   return entries.items;
// }
