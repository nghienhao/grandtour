import "./Footer.scss";
import { CiMobile4, CiMapPin, CiClock2   } from "react-icons/ci";
import { CgFacebook,  } from "react-icons/cg";
import { FaTwitter, FaPinterest  } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";



export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_list row">
        <div className="footer_item">
          <h2 className="footer_title">Our Awards</h2>
          <p>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
            <img style={{marginTop: "30px"}} width={246} height={113} src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />

        </div>
        <div className="footer_item">
          <h2 className="footer_title">Contact Info</h2>
          <ul className="footer_item_info">
            <li><CiMobile4 />1-567-124-44227</li>
            <li><CiMapPin />184 Main Street East Perl Habour 8007</li>
            <li><CiClock2 />Mon - Sat 8.00 - 18.00 Sunday CLOSED</li>
          </ul>
          <ul className="footer_socials">
            <li><a href="" style={{background: "#2d5f9a"}}><CgFacebook color="white" size={18} /></a></li>
            <li><a href="" style={{background: "#00c3f3"}}><FaTwitter color="white" size={18} /></a></li>
            <li><a href="" style={{background: "#cc181e"}}><FaPinterest color="white" size={18} /></a></li>
            <li><a href="" style={{background: "#bd081c"}}><FiInstagram color="white" size={18} /></a></li>
            <li><a href="" style={{background: "#405de6"}}><TfiYoutube color="white" size={18} /></a></li>
          </ul>
        </div>
        <div className="footer_item">
        <h2 className="footer_title">Recent Trips</h2>
            <ul className="footer_img">
                <li><img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Image Footer" /></li>
                <li><img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="Image Footer" /></li>
                <li><img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="Image Footer" /></li>
                <li><img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="Image Footer" /></li>
                <li><img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="Image Footer" /></li>
                <li><img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="Image Footer" /></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
