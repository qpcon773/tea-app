import "styles/event.scss"

function Event() {

  return (
    <div className="contentBox event">
      <ul className="eventCardList">
        <li className="funCard">
          <a href="#" onClick={(e) => {
            e.preventDefault()
          }}>
            <p>
              日日茶籤（優惠券）
              <b>搖晃設備來獲取每日運籤</b>
            </p>
            <img src={require("imgs/icon/peanut-butter.svg").default} alt="" />
          </a>
        </li>
        <li className="funCard">
          <a href="#" onClick={(e) => {
            e.preventDefault()
          }}>
            <p>
              茶餘DIY動手做
              <b>一起回收茶渣，加入行動！</b>
            </p>
            <img src={require("imgs/icon/youtube.svg").default} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Event;
