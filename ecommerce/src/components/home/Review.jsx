import SlideShow from "./SlideShow";
import itemView from "./itemView.styles";
import { Link } from "react-router-dom";
import slides from "./review.data";

const Review = () => {
  const categories = [
    { title: "All", link: "/all" },
    { title: "Men", link: "/men" },
    { title: "Women", link: "/women" },
  ];

  return (
    <div className={`!pb-10 ${itemView.container}`}>
      <div className={itemView.header}>
        <h2 className={itemView.title}>Galerie de styles</h2>
        <div className="flex gap-4 overflow-x-auto pt-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/review/${category.link}`}
              className="text-base duration-300 text-cLightBlack hover:text-cBlack"
            >
              #{category.title}
            </Link>
          ))}
        </div>
      </div>
      <SlideShow slides={slides} />
    </div>
  );
};

export default Review;
