const menuItems = [
  { title: "Home", link: "/", submenu: [] },
  {
    title: "About Us",
    link: "",
    submenu: [
      { label: "National Board", link: "/national_board" },
      { label: "Local Organizations", link: "/local_organizations" },
      { label: "Partners", link: "/partners" },
      { label: "History", link: "/history" },
    ],
  },
  {
    title: "Our Programs",
    link: "",
    submenu: [
      { label: "Flagship Programs", link: "/flagship_programs" },
      { label: "Elite Programs", link: "/elite_programs" },
      { label: "Priority Programs", link: "/priority_programs" },
    ],
  },
  {
    title: "Media",
    link: "",
    submenu: [
      { label: "Magazine", link: "/magazine" },
      { label: "Broadcast", link: "/broadcast" },
      { label: "Social Media", link: "/social_media" },
      { label: "Blogs", link: "/blogs" },
    ],
  },
  {
    title: "Get Involved",
    link: "",
    submenu: [
      { label: "Join Us", link: "/register" },
      { label: "Donate", link: "/donate" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
  { title: "My JCI", link: "/login", submenu: [] },
];

export default menuItems;
