import Confirmation from "views/Confirmation";
import PersonalInfo from "views/PersonalInfo";
import Suscription from "views/Suscription";

const routes = [
  {
    path: "/suscipcion",
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
  {
    path: "/confirmacion",
    name: "Mag",
    back: false,
    component: Confirmation,
  },
];
export default routes;
