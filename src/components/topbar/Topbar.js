import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"> Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend , post, video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight"></div>
      <div className="topbarLinks">
        <span className="topbarLinks">Homepage</span>
        <span className="topbarLinks">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assests/person/14.jpg" alt="" className="topbarimg"/>
    </div>
  );
}
