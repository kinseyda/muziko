export default function Centered(content: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col content-center justify-center items-center">
      {content.children}
    </div>
  );
}
