import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FilterList } from "@mui/icons-material";
import Allquestions from "./Allquestions";
const Main = ({ questions }) => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions </h2>
          <Link to="/add-question">
            <Button size="small" variant="contained">
              Ask Question
            </Button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions && questions.length} questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Votes</Link>
              </div>
              <div className="main-tab">
                <Link>Views</Link>
              </div>
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Oldest</Link>
              </div>
            </div>

            <button className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </button>
          </div>
        </div>
      </div>
      <div className="questions">
        {questions.map((e, key) => (
          <>
            <div key={key} className="question">
              <Allquestions question={e} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
