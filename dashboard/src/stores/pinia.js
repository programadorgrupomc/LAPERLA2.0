import { createPinia } from "pinia";
import { useUserStore } from "./storeLogin";
import { useRecoveryStore } from "./recoveryStore";
import { usePuestosVacantesStore } from "./StoreWork/storePuestosVacantes";

const pinia = createPinia();

pinia.use(useUserStore);
pinia.use(useRecoveryStore);
pinia.use(usePuestosVacantesStore);

export default pinia;
