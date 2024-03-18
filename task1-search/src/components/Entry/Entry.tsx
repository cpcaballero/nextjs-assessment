import { memo } from "react";

interface IProp {
  title: string;
  body: string;
}

const Entry: React.FC<IProp> = memo(({ title, body }) => {
  return (
    <div className="flex flex-col pb-3" key={title + body}>
      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
        {title}
      </dt>
      <dd className="text-lg font-semibold">{body}</dd>
    </div>
  );
});

export default Entry;
