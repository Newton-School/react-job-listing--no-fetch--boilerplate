import React from "react";

const JobPost = () => {
  return (
    <section className="jobpost container">
      <div className="jobpost-description">
        <img className="jobpost-logo" />
        <div className="jobpost-main">
          <div className="jobpost-head">
            <h3 className="jobpost-name"></h3>
            <div className="post-tag">
              <span className="jobpost-category new">New!</span>
              <span className="jobpost-category featured">Featured</span>
            </div>
          </div>
          <h2 className="jobpost-position"></h2>
          <p className="jobpost-info">
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="jobpost-tags">
        <div className="tag-container">
          <div className="jobpost-tag"></div>
        </div>
      </div>
    </section>
  );
};

export default JobPost;
