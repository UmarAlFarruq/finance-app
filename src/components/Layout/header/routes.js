import { Route, Routes, useLocation } from "react-router-dom";
import { sidebar } from "../../../utils/sidebar";
import Navbar from "./navbar";
import { documents } from './../../../utils/document';
import { spravochniks } from "../../../utils/spravochnik";
import { xisobod } from "../../../utils/xisobod";
import { registrs } from "../../../utils/registr";
import { AnimatePresence } from 'framer-motion'


const HeaderBase = () => {
    const location = useLocation();
    return (
        <div className='nocopy' >
            <AnimatePresence exitBeforeEnter >
                <Routes key={location.pathname} location={location} >
                    <Route path="/" element={<Navbar />} />
                    {sidebar.map(({ path, key, data, hidden }) => {
                        return !hidden && <Route key={key} path={path} element={<Navbar />} />
                    })}
                    {documents.map(({ path, key }) => {
                        return <Route path={path} key={key} element={<Navbar data={documents} />} />
                    })}
                    {spravochniks.map(({ path, key }) => {
                        return <Route path={path} key={key} element={<Navbar data={spravochniks} />} />
                    })}
                    {xisobod.map(({ path, key }) => {
                        return <Route path={path} key={key} element={<Navbar data={xisobod} />} />
                    })}
                    {registrs.map(({ path, key }) => {
                        return <Route path={path} key={key} element={<Navbar data={registrs} />} />
                    })}
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default HeaderBase;