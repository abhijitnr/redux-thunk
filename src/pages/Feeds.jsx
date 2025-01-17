import React, { useEffect } from "react";
import { getFeeds } from "../redux/feed/feed.actions";
import { useSelector, useDispatch } from "react-redux";

const Feeds = () => {
  // const [feeds, setFeeds] = useState([]);
  const feeds = useSelector((store) => store.feed.feeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds());
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
