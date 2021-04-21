import Thumbnail from "./Thumbnail";

function Results({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Thumbnail key={item.id} result={item} />
      ))}
    </div>
  );
}

export default Results;
