import React, { useState, useEffect } from 'react';

const CampgroundList = () => {
    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
      
        const mockCampgrounds = [
            {
                _id: 1,
                title: "Campground 1",
                description: "Description of campground 1",
                location: "Location of campground 1",
                images: [{ url: "https://example.com/image1.jpg" }]
            },
            {
                _id: 2,
                title: "Campground 2",
                description: "Description of campground 2",
                location: "Location of campground 2",
                images: []
            }
        ];
        setCampgrounds(mockCampgrounds);
    }, []);

    return (
        <div>
            <div id="cluster-map"></div>
            <h1>All Campgrounds</h1>
            <div>
                <a href="/campgrounds/new">Add Campground</a>
            </div>
            {campgrounds.map(campground => (
                <div key={campground._id} className="card mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            {campground.images.length ? (
                                <img className="img-fluid" alt="" src={campground.images[0].url} />
                            ) : (
                                <img className="img-fluid" alt="" src="https://res.cloudinary.com/dxfjxmly7/image/upload/v1641310820/Yelpcamp/yyubiifgytscr1mrwdyw.jpg" />
                            )}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{campground.title}</h5>
                                <p className="card-text">{campground.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">{campground.location}</small>
                                </p>
                                <a className="btn btn-primary" href={`/campgrounds/${campground._id}`}>View {campground.title}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CampgroundList;
