import Pages from "layouts/Pages.jsx";
import Dashboard from "layouts/Dashboard.jsx";

// var indexRoutes = [
//   // { path: "/rtl", name: "RTL", component: RTL },
//   { path: "/dashboard", name: "Home", component: Dashboard },
//   { path: "/", name: "Pages", component: Pages }
// ];

var indexRoutes = [
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
