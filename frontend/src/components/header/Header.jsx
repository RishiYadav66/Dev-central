import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <h3>Products</h3>
        </div>
        <div className="header-mid">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <h4 style={{ margin: "8px", fontSize: "15px" }}>
              Hi!{" "}
              <span
                style={{
                  color: "#0151f0d8",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                {user ? (user.displayName ? user.displayName : "User") : ""}
              </span>
            </h4>
            {/* <Button size="small" variant="outlined">
              Log in
            </Button> */}
            <Button
              onClick={() => auth.signOut()}
              size="small"
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
