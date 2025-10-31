export default function HeadingContent({ title, description }) {
  return (
    <div className="space-y-1.5 w-[100%] ">
      <h1 className="capitalize text-lg  font-medium">{title}</h1>
      <p className="TextP first-letter:uppercase">{description}</p>
    </div>
  );
}
