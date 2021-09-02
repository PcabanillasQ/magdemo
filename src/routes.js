import Confirmation from "views/Confirmation";
import PersonalInfo from "views/PersonalInfo";
import Suscription from "views/Suscription";

const routes = [
  {
    path: "/suscipcion",
    name: "Suscribirme",
    component: Suscription,
  },
  {
    path: "/datos",
    name: "Tus Datos",
    component: PersonalInfo,
  },
  {
    path: "/confirmacion",
    name: "Mag",
    component: Confirmation,
  },
];
export default routes;
