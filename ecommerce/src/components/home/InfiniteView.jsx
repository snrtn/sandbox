import { useState, useRef, useEffect } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import ProductCard from "@common/ProductCard";
import productsData from "@mock/products.data";
import infiniteView from "./infiniteView.styles";

const getInitialItemsToLoad = (isMobile, isTablet, isLgTablet, isDesktop) => {
  if (isMobile) {
    return 16;
  } else if (isTablet) {
    return 16;
  } else if (isLgTablet) {
    return 15;
  } else if (isDesktop) {
    return 16;
  } else {
    return 20;
  }
};

const InfiniteView = () => {
  const loader = useRef(null);

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  const isLgTablet = useMediaQuery(1365);
  const isDesktop = useMediaQuery(1920);

  const [itemsToLoad, setItemsToLoad] = useState(() =>
    getInitialItemsToLoad(isMobile, isTablet, isLgTablet, isDesktop)
  );

  const [items, setItems] = useState(
    productsData.slice(
      0,
      getInitialItemsToLoad(isMobile, isTablet, isLgTablet, isDesktop)
    )
  );

  useEffect(() => {
    setItemsToLoad(
      getInitialItemsToLoad(isMobile, isTablet, isLgTablet, isDesktop)
    );
  }, [isMobile, isTablet, isLgTablet, isDesktop]);

  useEffect(() => {
    setItems(productsData.slice(0, itemsToLoad));
  }, [itemsToLoad]);

  const loadMore = () => {
    const additionalItems = itemsToLoad;
    setItems((prev) => [
      ...prev,
      ...productsData.slice(prev.length, prev.length + additionalItems),
    ]);
  };

  const shouldShowLoadMore =
    items.length >= 16 && items.length < productsData.length;

  return (
    <div className={infiniteView.container}>
      <h2 className={infiniteView.title}>
        Diversity of styles, variety of charm!
      </h2>
      <p className={infiniteView.description}>
        Open a new world of fashion just for you, with diverse collections and
        unique designs.
      </p>
      <div className={infiniteView.grid}>
        {items.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
      {shouldShowLoadMore && (
        <div ref={loader} className={infiniteView.loader}>
          <button className={infiniteView.button} onClick={loadMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default InfiniteView;
