import "../Styles/sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-container">
        <div className="logo">
          <img src="https://1.bp.blogspot.com/-3mgFT9b_Rxs/WuGt3zO6-HI/AAAAAAABUKc/68CJuoSd9rI-CdixCDwQqT_MPEG-1fIEACLcBGAs/s1600/google%2Btasks.PNG" alt="logo" height={60}/>
        </div>
        <div className="sidebar-nav">
          <ul>
            <li className="active">Scrumboard</li>
            <li>Backlog</li>
            <li>Reports</li>
            <li>Releases</li>
            <li>Components</li>
            <li>Issues</li>
            <li>Add Items</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
