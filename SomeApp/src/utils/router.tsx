import { createBrowserRouter } from "react-router-dom";
import { ListOfManga } from "../pages/ListOfManga/ListOfManga";
import { InfoAboutManga } from "../pages/InfoAboutManga/InfoAboutManga";
import { ReadManga } from "../pages/ReaderManga/ReaderManga";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
 {
   path: "/",
   element: <Layout />,
   children: [
    {
        index: true, 
        element: <ListOfManga/>
    },
    
    {
      path: "/manga/:id",
      element: <InfoAboutManga/>
    }, 
   ]
 },


 {
   path: "/readmanga/:id",
   element: <ReadManga/>
 }
])

