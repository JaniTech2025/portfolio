import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

async function fetchAndLogPortfolio() {
  try {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    console.log("Documents found:", querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.error("Error fetching portfolio collection:", error);
  }
}

fetchAndLogPortfolio();
