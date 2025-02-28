import Landing from "@/components/Landing";

import dataSource from "@/data/source";

export default async function Home() {
  const res = await dataSource();

  return <Landing data={res} />;
}
