
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayiut} from "./layout";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayiut/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    )
};

export {App};