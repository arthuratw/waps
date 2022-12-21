import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'
import { LayoutContainer, LeftNavBar, Body, LeftNavBarTitle, LeftNavBarButtonContainer, LogoutContainer } from "./styles";
import { Star, GridFour, Coins, UsersThree, CaretDown, SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/useAuth";
export function LogedDeafaultLayout() {
    const navigate = useNavigate();

    const [openOverlay, setOpenOverlay] = useState(false);

    const auth1 = useAuth();

    return (
        <div>
            <Header />
            <LayoutContainer>
                <LeftNavBar>
                    <LeftNavBarTitle>Dados</LeftNavBarTitle>

                    <LeftNavBarButtonContainer onClick={() => navigate('/home')}>
                        <GridFour size={18} style={{ marginRight: 15 }} />
                        DashBoard
                    </LeftNavBarButtonContainer>

                    <LeftNavBarButtonContainer>
                        <Coins size={18} style={{ marginRight: 15 }} />
                        Finanças
                    </LeftNavBarButtonContainer>

                    <LeftNavBarButtonContainer onClick={() => navigate('/home/avaible')}>
                        <Star size={18} style={{ marginRight: 15 }} />
                        Avaliação
                    </LeftNavBarButtonContainer>

                    <LeftNavBarTitle>Funcionários</LeftNavBarTitle>
                    <LeftNavBarButtonContainer onClick={() => setOpenOverlay(!openOverlay)}>
                        <UsersThree size={18} style={{ marginRight: 15 }} />
                        Gestão
                        {
                            openOverlay ? <CaretDown size={18} style={{ marginLeft: 15, rotate: '180deg' }} /> : <CaretDown size={18} style={{ marginLeft: 15 }} />
                        }
                    </LeftNavBarButtonContainer>
                    {
                        openOverlay ? (<div>
                            <LeftNavBarButtonContainer onClick={() => navigate('/home/employeerlist')}>Funcionários</LeftNavBarButtonContainer>
                            <LeftNavBarButtonContainer onClick={() => navigate('/home/sectorlist')}>Setores</LeftNavBarButtonContainer>
                        </div>

                        )
                            : <div></div>
                    }

                    <LogoutContainer onClick={() => auth1.singOut(auth1.auth)} > <SignOut size={18} style={{ marginRight: 15 }} /> Sair</LogoutContainer>
                </LeftNavBar>
                <Body>
                    <Outlet />
                </Body>
            </LayoutContainer>
        </div>
    )
}