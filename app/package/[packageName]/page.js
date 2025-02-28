import PackageDetails from "@/components/PackageDetails";

import dataSource from "@/data/source";

export default async function PackagePage() {
  const res = await dataSource();

  return <PackageDetails data={res} />;
}
