import Avatar from "../../components/Avatar";
import FeedGrid from "../../components/FeedGrid";

function FeedPage() {
  return (
    <>
      <div>
        <Avatar realname="Jéssica de Brito" nickname="@jessdebrito" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;
