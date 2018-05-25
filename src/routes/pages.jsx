// import PricingPage from "views/Pages/PricingPage.jsx";
import RegisterPage from "pages/register-page/RegisterPage";
import LoginPage from "pages/login";
// import RegisterPage from "views/Pages/RegisterPage.jsx";
// import LockScreenPage from "views/Pages/LockScreenPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";

const pagesRoutes = [
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  }
  // {
  //   path: "/pages/pricing-page",
  //   name: "Pricing Page",
  //   short: "Pricing",
  //   mini: "PP",
  //   icon: MonetizationOn,
  //   component: PricingPage
  // },
  // {
  //   path: "/pages/lock-screen-page",
  //   name: "Lock Screen Page",
  //   short: "Lock",
  //   mini: "LSP",
  //   icon: LockOpen,
  //   component: LockScreenPage
  // },
  // {
  //   redirect: true,
  //   path: "/pages",
  //   pathTo: "/pages/register-page",
  //   name: "Register Page"
  // }
  // { redirect: true, path: "/", pathTo: "/pages/login-page", name: "LoginPage" }
];

export default pagesRoutes;
