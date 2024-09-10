import SlideView from "@home/SlideView";
import ItemView from "@home/ItemView";
import GroupView from "@home/GroupView";
import InfiniteView from "@home/InfiniteView";
import Review from "@home/Review";

const HomeView = () => {
  return (
    <div>
      <SlideView />
      <ItemView />
      <GroupView />
      <InfiniteView />
      <Review />
    </div>
  );
};

export default HomeView;
