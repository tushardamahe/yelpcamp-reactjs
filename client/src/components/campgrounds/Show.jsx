import { useState } from "react";

const ShowCamgrounds = ({ campground, currentUser }) => {
  const [reviews, setReviews] = useState(campground.reviews);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
  };

  const handleReviewDelete = (reviewId) => {
    const updatedReviews = reviews.filter((review) => review._id !== reviewId);
    setReviews(updatedReviews);
  };

  return (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        {currentUser && (
          <div>
            <h2>Leave a Review</h2>
            <form
              onSubmit={handleReviewSubmit}
              className="mb-3 validated-form"
              noValidate
            >
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        )}

        {reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{review.author.username}</h5>

              {currentUser && review.author.equals(currentUser._id) && (
                <form onSubmit={() => handleReviewDelete(review._id)}>
                  <button type="submit" className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCamgrounds;
