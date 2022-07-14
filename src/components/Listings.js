import React, { useState, useEffect } from "react";
import JobPost from "./JobPost";
import data from "../data.json";
import closeTag from "./../images/icon-remove.svg";

const Listings = () => {
  return (
    <>
      <main className="job-listings">
        <section className="filters container">
          <div className="filter-container">
            <>
              <div className="selectedTagContainer">
                <span></span>
                <button className="closeTag">
                  <img src={closeTag} alt="Remove Tag" />
                </button>
              </div>
            </>
          </div>
          <button className="btn-clear">Clear</button>
        </section>
        {/* Loop over the posts */}
        <>
          <JobPost />
        </>
      </main>
    </>
  );
};

export default Listings;
