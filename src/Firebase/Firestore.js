import {db} from './FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

export const importAppLayout = async (layoutLocation) => {
    const docRef = doc(db, "usersAppData", layoutLocation);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return(docSnap.data());
      } else {
        return(false)
      }
}
