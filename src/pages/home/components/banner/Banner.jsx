import { IoMdSearch, IoIosCalendar } from "react-icons/io";
import Select from "./select/BannerSelect";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useState } from "react";

import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.min.css";

// Optional video extension
jarallaxVideo();

export default function Banner() {
  const [open, setOpen] = useState(false);
  const iconBtn = !open ? <IoIosArrowDown /> : <IoIosArrowUp />;

  const handleClick = () => {
    setOpen(!open);
  };

  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=JPe2mwq96cw'
  });

  return (
    <div className="banner jarallax">
      <div className="row">
        <h2 className="banner_title">Where do you want to go?</h2>
        <p className="banner_tagline" style={{ color: "white" }}>
          Trips, experiences, and places. All in one service.
        </p>
        <div className="banner_group">
          <form>
            <div className="banner_group_item">
              <input type="text" placeholder="Destination, city" />
              <IoMdSearch />
            </div>
            <Select
              name="Any month"
              value={["January", "May", "October", "December", "July"]}
              icon={<IoIosCalendar />}
            ></Select>
            <Select
              name="Sort by date"
              value={[1, 2, 3, 4, 5]}
              icon={<IoIosCalendar />}
            ></Select>
            <button className="banner_group_item button">Search</button>
          </form>

          {open && (
            <form>
              <Select
                name="All Categories"
                value={["January", "May", "October", "December", "July"]}
                icon={<IoIosCalendar />}
              ></Select>
              <Select
                name="Any Destinations"
                value={[1, 2, 3, 4, 5]}
                icon={<IoIosCalendar />}
              ></Select>
              <div className="banner_group_item">
                <input type="text" placeholder="Max budget ex. 500" />
                <IoMdSearch />
              </div>
            </form>
          )}

          <a onClick={handleClick} className="btn-open" type="button">
            {iconBtn} Advanced Search
          </a>
        </div>
      </div>
    </div>
  );
}
