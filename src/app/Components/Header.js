import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://s.tmimgcdn.com/scr/1200x750/242400/food-delivery-custom-design-logo-template_242462-original.png"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/Signup</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
