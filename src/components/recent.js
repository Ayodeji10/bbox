import React from "react";

const RecentPost = () => {

    return (
        <div className="recent-posts">
            <h1>Recent Posts</h1>
            <div className="row">
                <div className="col-lg-3 post">
                    <img src="images/14229187_493a17df495d4ff1b99455527096adbe_jpeg_jpeg9914af07aec808795719a23a4a46f53e 1.png" alt="" />
                    <p>President Buhari Receives Jersey No10 From Gianni Infantino</p>
                    <div className="favourite d-flex justify-content-center align-items-center"><i className="far fa-heart" /></div>
                </div>
                <div className="col-lg-3 post">
                    <img src="images/pexels-george-ikwegbu-2379429 1.png" alt="" />
                    <p>Obadje - “God Told me to Join APC”</p>
                    <div className="favourite d-flex justify-content-center align-items-center"><i className="far fa-heart" /></div>
                </div>
                <div className="col-lg-3 post">
                    <img src="images/pexels-greta-hoffman-9705698 1.png" alt="" />
                    <p>Political Diversity has caused more to family integration</p>
                    <div className="favourite d-flex justify-content-center align-items-center"><i className="far fa-heart" /></div>
                </div>
                <div className="col-lg-3 post">
                    <img src="images/pexels-uncoveredlens-3620411 1.png" alt="" />
                    <p>Strike Continues until FG implements offers - ASUU</p>
                    <div className="favourite d-flex justify-content-center align-items-center"><i className="far fa-heart" /></div>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;