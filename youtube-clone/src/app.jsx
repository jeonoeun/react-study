import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  //자식컴포넌트가 re-rendering 되는 것을 막기위해서 useCallback을 썼음.
  const search = useCallback((query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((video) => setVideos(video));
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <div className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
