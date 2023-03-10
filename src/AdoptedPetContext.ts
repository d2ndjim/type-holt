import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";


const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem Ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
