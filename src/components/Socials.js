import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 ">
        <li>
          <a href="http://www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.Twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.Pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://www.Instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://www.Youtube.com" target="_blank">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
