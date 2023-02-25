import { Routes, Route, } from "react-router-dom";
import Layout from "../pages/layout";
import NotFound from "../components/notFound";
import { sidebar } from './../utils/sidebar';
import { documents } from "../utils/document";
import { spravochniks } from "../utils/spravochnik";
import { xisobod } from "../utils/xisobod";
import { registrs } from "../utils/registr";
// import Generic from "../pages/Generic";

const Root = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {sidebar.map(({ path, key }) => {
                    return <Route key={key} path={path} element={<Layout />} />
                })}
                {documents?.map(({ path, key }) => {
                    return <Route key={key} path={path} element={<Layout />} />
                })}
                {spravochniks?.map(({ path, key }) => {
                    return <Route key={key} path={path} element={<Layout />} />
                })}
                {xisobod?.map(({ path, key }) => {
                    return <Route key={key} path={path} element={<Layout />} />
                })}
                {registrs?.map(({ path, key }) => {
                    return <Route key={key} path={path} element={<Layout />} />
                })}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default Root;