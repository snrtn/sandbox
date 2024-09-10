import itemView from "./itemView.styles";
import slides from "./itemView.data";
import SlideShow from "./SlideShow";

const ItemView = () => {
  return (
    <div className={itemView.container}>
      <div className={itemView.header}>
        <h2 className={itemView.title}>Style starts here</h2>
        <p className={itemView.description}>
          Discover the latest trends and elevate your wardrobe with our curated
          selections.
        </p>
      </div>
      <SlideShow slides={slides} />
    </div>
  );
};

export default ItemView;
