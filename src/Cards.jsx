import React from 'react'
function Cards(){
    return( <div className="cards">
    <div className="card">
      <img src="https://f4.bcbits.com/img/a2164492178_10.jpg" alt="pic" className="card_img"/>
      <div className="card_info">
        <span className="card_category"></span>
        <h3 className="card_title"></h3>
        <a href="#" target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  </div>)
}
export default Cards;