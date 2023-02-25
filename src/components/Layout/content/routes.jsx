import { Route, Routes, useLocation } from "react-router-dom";
import CotnetntComponent from "./content";
import { sidebar } from '../../../utils/sidebar';
import Card from "./Card";
import { documents } from "../../../utils/document";
import Generic from "../../../pages/Generic";
import { spravochniks } from "../../../utils/spravochnik";
import { xisobod } from "../../../utils/xisobod";
import { registrs } from "../../../utils/registr";
import { AnimatePresence } from 'framer-motion'


const ContentBase = () => {
  const location = useLocation();
  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <Routes key={location.pathname} location={location} >
        <Route path='/' element={<CotnetntComponent />} >
          {sidebar?.map(({ path, data, key, Element }) => {
            return <Route key={key} path={path} element={!Element ? <Card data={data} /> : Element} />
          })}
          {documents.map(({ path, key }) => {
            return <Route path={path} key={key} element={<Generic />} />
          })}
          {spravochniks.map(({ path, key,Element }) => {
            return <Route path={path} key={key} element={Element} />
          })}
          {xisobod.map(({ path, key }) => {
            return <Route path={path} key={key} element={<Generic />} />
          })}
          {registrs.map(({ path, key }) => {
            return <Route path={path} key={key} element={<Generic />} />
          })}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default ContentBase;