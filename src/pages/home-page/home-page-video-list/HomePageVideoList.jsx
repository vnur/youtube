import "./home-page-video-list.css";
import { youtubeFetchData } from "../../../api/YoutubeApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const HomePageVideoList = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["youtube-video"],
    queryFn: youtubeFetchData,
    getNextPageParam: (lastpage) => {
      return lastpage.nextPageToken ?? undefined;
    },
    refetchInterval:false,
    refetchOnWindowFocus:false,
    staleTime:Infinity
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
    return () =>  window.removeEventListener("scroll", handleScroll);

  }, [hasNextPage, fetchNextPage]);

  return (
      <div className="home-page-video-list__container">
        {data?.pages[0].YouTubeData.map((item) => {
          return (
            <div key={item.videoId} className="video_list_card">

              <div>
              <img src={item.videoThumbnail} alt={item.title} />
              </div>

              <div className="home-page__description">
                 <div>
                  <img className="description-channel_thumbnail" src={item.channelThumbnail} alt="" />
                 </div>
                  <div>{item.title}</div>
              </div>
            </div>
          );
        })}
     <div>

     </div>
      </div>
  );
};
