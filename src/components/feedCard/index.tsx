interface FeedProps {
  title: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md h-96">
      <div className="p-4">
        <h2 className="text-lg text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita
          perspiciatis, dicta iusto doloribus quae odio quis nam recusandae
          consequuntur, aliquid vero voluptatibus vitae quibusdam eveniet
          deleniti, repellendus sint sit.
        </p>
      </div>
    </div>
  );
}

export default FeedCard;
