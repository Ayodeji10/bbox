import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import RecentPost from "../components/recent";
import Modal from 'react-modal'
Modal.setAppElement('#root')

const Stories = () => {
    const [commentsModal, setCommentsModal] = useState(false)
    const [addCommentsodal, setAddCommentsModal] = useState(false)

    return (
        <div className="container-fluid">
            <div className="header">
                {/* navigation */}
                <Nav />
                <div className="container">
                    {/* stories  */}
                    <div className="stories">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="create">
                                    <p>Create New Story</p>
                                    <input type="text" placeholder="What’s on your mind?" />
                                </div>
                                <Modal isOpen={addCommentsodal} onRequestClose={() => setAddCommentsModal(false)}>
                                    <h1>helo</h1>
                                </Modal>
                                <div className="story-list" id="story-list">
                                    <div className="story">
                                        <div className="header">
                                            <h1>President Buhari Receives Jersey No10 From Gianni Infantino</h1>
                                            <div className="d-flex align-items-center">
                                                <p className="d-flex align-items-center"><img src="images/user.png" alt="user" /><span>Luther</span></p>
                                                <p className="d-flex align-items-center"><img src="images/clock.png" alt="clock" /><span>10 mins ago</span></p>
                                            </div>
                                        </div>
                                        <div className="body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi,
                                                mauris cras nec, aliquam nunc quis et proin.
                                                Turpis sed eros, scelerisque eget. Urna molestie adipiscing amet at ac et.
                                                Non leo amet in tempus augue faucibus tortor.
                                                Orci urna, maecenas eget sagittis, at viverra elementum augue natoque. Nunc
                                                massa habitasse pellentesque sagittis eget
                                                pulvinar blandit turpis enim. Consectetur massa porta vel, quis diam
                                                faucibus adipiscing. Dolor, in tellus, commodo
                                                dolor dui dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Eleifend nisi, mauris cras nec, aliquam nunc
                                                quis et proin. Turpis sed eros, scelerisque eget. Urna molestie adipiscing
                                                amet at ac et. Non leo amet in tempus augue
                                                faucibus tortor. Orci urna, maecenas eget sagittis, at viverra elementum
                                                augue natoque. Nunc massa</p>
                                            <a href className="d-flex align-items-center">Read More<i className="fas fa-angle-down" /></a>
                                        </div>
                                        <img src="images/s1.png" className="img-fluid story-img" alt="" />
                                        <div className="footer d-flex justify-content-between">
                                            <div className="d-flex align-items-center" onClick={() => setCommentsModal(true)} id="comments">
                                                <img src="images/comment-svgrepo-com 1.png" alt="comment" />
                                                <p className="mb-0">(24) Leave a comment</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div id="like-container">
                                                    <i className="far fa-heart" id="like" />
                                                    <span>Add to Favourite</span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-share-alt" id="share" />
                                                    <span>Share Post</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="story">
                                        <div className="header">
                                            <h1>Strike Continues until FG implements offer</h1>
                                            <div className="d-flex align-items-center">
                                                <p className="d-flex align-items-center"><img src="images/user.png" alt="user" /><span>James</span></p>
                                                <p className="d-flex align-items-center"><img src="images/clock.png" alt="clock" /><span>24 mins ago</span></p>
                                            </div>
                                        </div>
                                        <div className="body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi,
                                                mauris cras nec, aliquam nunc quis et proin.
                                                Turpis sed eros, scelerisque eget. Urna molestie adipiscing amet at ac et.
                                                Non leo amet in tempus augue faucibus tortor.
                                                Orci urna, maecenas eget sagittis, at viverra elementum augue natoque. Nunc
                                                massa habitasse pellentesque sagittis eget
                                                pulvinar blandit turpis enim. Consectetur massa porta vel, quis diam
                                                faucibus adipiscing. Dolor, in tellus, commodo
                                                dolor dui dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Eleifend nisi, mauris cras nec, aliquam nunc
                                                quis et proin. Turpis sed eros, scelerisque eget. Urna molestie adipiscing
                                                amet at ac et. Non leo amet in tempus augue
                                                faucibus tortor. Orci urna, maecenas eget sagittis, at viverra elementum
                                                augue natoque. Nunc massa</p>
                                            <a href className="d-flex align-items-center">Read More<i className="fas fa-angle-down" /></a>
                                        </div>
                                        <img src="images/s2.png" className="img-fluid story-img" alt="" />
                                        <div className="footer d-flex justify-content-between">
                                            <div className="d-flex align-items-center" onClick={() => setCommentsModal(true)} id="comments">
                                                <img src="images/comment-svgrepo-com 1.png" alt="comment" />
                                                <p className="mb-0">(89) Leave a comment</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div id="like-container">
                                                    <i className="far fa-heart" id="like" />
                                                    <span>Add to Favourite</span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-share-alt" id="share" />
                                                    <span>Share Post</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 saved-story">
                                <div className="searchbar d-flex align-items-center">
                                    <input type="text" placeholder="Search Stories" />
                                    <img src="images/search-normal.png" alt="" />
                                </div>
                                <div className="story-list">
                                    <header className="d-flex justify-content-between mb-2">
                                        <h1>Saved Stories</h1>
                                        <h1>(12)</h1>
                                    </header>
                                    <p>Nigeria not ripe enough to shun rotational presidency – Dr Dakum</p>
                                    <p>Ekiti 2022: Why PDP should zone its candidate to the south</p>
                                    <p>Only a restructured nigeria will help regain lost glory — Makinde</p>
                                    <p>This is not where we ought to be, says Ladoja</p>
                                    <p>Anambra PDP seeks accountability on N75b allegedly bequeathed to Obiano</p>
                                    <p>Elite consensus vital in nation-building – Olurode</p>
                                    <p>AbdulRazak: Torn between politicking and service in Kwara</p>
                                    <p>Plugs in Southern governors’ coalition</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recent posts */}
                    <RecentPost />
                    {/* footer  */}
                    <Footer />
                </div>
            </div>
            <Modal className="coments" isOpen={commentsModal} onRequestClose={() => setCommentsModal(false)}>
                <header>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="mb-0">Leave a comment</p>
                        <i className="fas fa-times" onClick={() => setCommentsModal(false)} />
                    </div>
                    <div className="comment-input d-flex align-items-center justify-content-between mb-5">
                        <input type="text" placeholder="Leave a comment" />
                        <img src="images/Group1.png" alt="" />
                    </div>
                    <div className="comment-section">
                        <div className="comment">
                            <header className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <img src="img/p2.png" alt="" />
                                    <h4 className="mb-0">@Adamson</h4>
                                </div>
                                <p className="mb-0">20 Mins Ago</p>
                            </header>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, mauris
                                    cras
                                    nec, aliquam nunc quis et proin.
                                    Turpis sed eros, scelerisque eget. Urna molestie adipiscing amet at ac et. Non
                                    leo
                                    amet in tempus augue faucibus tortor.
                                    Orci urna, maecenas eget sagittis.</p>
                                <h6>Reply</h6>
                            </div>
                        </div>
                        <div className="comment">
                            <header className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <img src="img/p2.png" alt="" />
                                    <h4 className="mb-0">@craig</h4>
                                </div>
                                <p className="mb-0">34 Mins Ago</p>
                            </header>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, mauris
                                    cras nec, aliquam nunc quis et proin.</p>
                                <h6>Reply</h6>
                            </div>
                        </div>
                        <div className="comment">
                            <header className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <img src="img/p2.png" alt="" />
                                    <h4 className="mb-0">@Adamson</h4>
                                </div>
                                <p className="mb-0">20 Mins Ago</p>
                            </header>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, mauris
                                    cras
                                    nec, aliquam nunc quis et proin.
                                    Turpis sed eros, scelerisque eget. Urna molestie adipiscing amet at ac et. Non
                                    leo
                                    amet in tempus augue faucibus tortor.
                                    Orci urna, maecenas eget sagittis.</p>
                                <h6>Reply</h6>
                            </div>
                        </div>
                        <div className="comment">
                            <header className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <img src="img/p2.png" alt="" />
                                    <h4 className="mb-0">@craig</h4>
                                </div>
                                <p className="mb-0">34 Mins Ago</p>
                            </header>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, mauris
                                    cras nec, aliquam nunc quis et proin.</p>
                                <h6>Reply</h6>
                            </div>
                        </div>
                    </div>
                </header>
            </Modal>
        </div>
    );
};

export default Stories;