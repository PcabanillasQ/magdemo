import { lazy } from "react";
// import Confirmation from "views/Confirmation";
// import PersonalInfo from "views/PersonalInfo";
// import Suscription from "views/Suscription";

const Suscription = lazy(() => import("views/Suscription"));
const PersonalInfo = lazy(() => import("views/PersonalInfo"));
const Confirmation = lazy(() => import("views/Confirmation"));

const routes = [
  {
    path: "/suscripcion",
    name: "Suscribirme",
    back: false,
    component: Suscription,
  },
  {
    path: "/datos",
    name: "Tus Datos",
    back: true,
    component: PersonalInfo,
  },
];

export const routesPrivated = [
  {
    path: "/confirmacion",
    name: "Mag",
    back: false,
    component: Confirmation,
  },
];

export default routes;
