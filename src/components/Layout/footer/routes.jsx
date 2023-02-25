
import { Route, Routes } from "react-router-dom";
import { sidebar } from "../../../utils/sidebar";
import FooterBase from './index';



const Footer = () => {
    return (
        <div className='nocopy' >
            <Routes >
                <Route path="/" element={<FooterBase />} />
                {sidebar.map(({ path, key, data, hidden }) => {
                    return !hidden && <Route key={key} path={path} element={<FooterBase />} />
                })}
            </Routes>
        </div>
    );
}

export default Footer;