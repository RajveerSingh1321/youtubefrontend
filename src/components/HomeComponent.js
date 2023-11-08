import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import HeaderComponent from "./Header";
import videos from "./videos.json";

function HomeComponent() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="sidebar">
          <div className="sidebarItem">Home</div>
          <div className="sidebarItem">Shorts</div>
          <div className="sidebarItem">Subscription</div>
          <div className="sidebarItem">Your Channel</div>
          <div className="sidebarItem">History</div>
          <div className="sidebarItem">Your Videos</div>
          <div className="sidebarItem">Watch Later</div>
          <div className="sidebarIteme">Made with  👑 <br/> RAJVEER SINGH
</div>
         
        </div>
        <div className="videos">
          {videos.map(function (video) {
            return (
              <VideoPreviewComponent
                title={video.title}
                description={video.description}
                url={video.thumbnail.url}
                views={video.views}
                channel={video.channelName}
                uploadedAt={video.uploadedAt}
                id={video.id}
              />
            );
          })}
          <VideoPreviewComponent title="This is first video 1" />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
