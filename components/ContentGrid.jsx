import { getHasData } from "@/lib/helpers";

export default function ContentGrid(props) {
  const { config = [] } = props;

  const hasData = getHasData(config);

  if (!hasData) return <></>;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-1 content-grid`}>
      {hasData &&
        config.map((e, i) => (
          <div key={i} className="hover:bg-blue-200">
            {e.name}
          </div>
        ))}
    </div>
  );
}
