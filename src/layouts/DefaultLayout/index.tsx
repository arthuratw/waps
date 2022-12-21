import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from "./styles";
import { ToastContainer } from "react-toastify";

export function DeafaultLayout() {
    return (
        <div>
            <Header />
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>
        </div>
    )
}