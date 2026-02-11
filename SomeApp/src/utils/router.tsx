import { createBrowserRouter } from "react-router-dom";
import { ListOfManga } from "../pages/ListOfManga/ListOfManga";
import { InfoAboutManga } from "../pages/InfoAboutManga/InfoAboutManga";
import { ReadManga } from "../pages/ReaderManga/ReaderManga";

export const router = createBrowserRouter([
 {
   path: "/f",
   element: <ListOfManga/>
 },

 {
   path: "/ff",
   element: <InfoAboutManga/>
 }, 

 {
   path: "/",
   element: <ReadManga/>
 }
])

