import React from "react";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHome,
  faSearch,
  faSearchPlus,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function Dashboard() {
  return (
    <>
      <div className="homeSidebar d-flex flex-column flex-shrink-0 p-3 text-white">
        <a
          href="#"
          className="d-flex logo align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img src={Logo} alt="" />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white" aria-current="page">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>

              <p>Search</p>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
              <p>Your Library</p>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
              <p>Create Playlist</p>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon icon={faShieldHeart}></FontAwesomeIcon>
              <p>Liked Songs</p>
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
