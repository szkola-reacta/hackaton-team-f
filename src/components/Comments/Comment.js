import React from "react";
import StarRatingComponent from "react-star-rating-component";
import "./styles.scss";

function Comment({ data: item }) {
  return (
    <div className="comment">
      <div className="comment__header">
        <StarRatingComponent name="rate" value={item.rate} editing={false} />
        <div className="comment__user">Vanessa May</div>
        <div className="comment__date">{item.dateAdded}</div>
      </div>
      <div className="comment__content">
        {item.comment}
      </div>
      <div className="comment__footer">
        
      </div>
    </div>
  );
}

export default Comment;