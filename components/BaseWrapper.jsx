export default function BaseWrapper(props) {
  const { children } = props;
  return <div className="max-w-2xl mx-auto flex flex-col">{children}</div>;
}
