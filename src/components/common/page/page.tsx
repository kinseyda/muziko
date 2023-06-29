import { useEffect } from "react";

export default function Page(props: {
  children: React.ReactNode;
  title: string;
}) {
  useEffect(() => {
    document.title = `${props.title ? ` ${props.title} | ` : ""}Muziko`;
  }, [props.title]);
  return <div className="h-full w-full">{props.children}</div>;
}
