import { useParams, useSearchParams } from "react-router-dom";

function Lessonage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const lessonUrl = `https://youtu.be/5fRkC2w7jwg?si=3G--5vHGSzN8JjUG`;
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-ink-900">{title + " " + id}</h1>
      </div>
      <div>
        <iframe
          width="100%"
          height="500"
          src={lessonUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Lessonage;
