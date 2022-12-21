import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SectorTypes } from "../../components/FormEmployeer";
import { useAuth } from "../../context/useAuth";
import { db } from "../../services/firebase";
import { Title, AvaibleContainer, SubTitle, Label, Select, SelectTitle, Button, Logo, LogoContainer, LogoEscrita, LogoName, Div } from "./styles";
import logowaps from '../../assets/logo.svg'
import logowapsescrita from '../../assets/logo-escrita.svg'

export function Avaible() {

    const auth = useAuth();
    const [sectorsNames, setSectorsNames] = useState<SectorTypes[]>([])
    const [avaibleSector, setAvaibleSector] = useState("")

    useEffect(() => {
        async function findSector() {
            const sectorRef = collection(db, "sector")
            const userRef = doc(db, "users", `${auth.user?.uid}`)
            const data = query(sectorRef, where("userRef", "==", userRef))

            const docSnap = await getDocs(data);

            const sectors: Array<SectorTypes> = []

            docSnap.forEach((doc) => {
                let data = {
                    value: doc.id,
                    label: doc.data().sectorName
                }

                sectors.push(data)
            });
            setSectorsNames(sectors)
        }

        findSector()

    }, [])

    return (
        <AvaibleContainer>
            <Title>Essa página é exclusivamente para você!</Title>
            <SubTitle>Somos felizes em tê-lo(a) aqui!</SubTitle>

            <Label>
                <SelectTitle>Selecione o setor</SelectTitle>
                <Select
                    placeholder="Selecione uma opção"
                    onChange={e => setAvaibleSector(e.target.value)}
                >
                    {sectorsNames.map((sectorName) => (
                        <option value={sectorName.value}> {sectorName.label} </option>
                    ))}
                </Select>
            </Label>

            <Button>Iniciar avaliação</Button>
            <Div>
                <LogoContainer>
                    <Logo />
                    <LogoEscrita />
                </LogoContainer>
                <LogoName>Soluções Administrativas <br /> Personalizadas</LogoName>
            </Div>
        </AvaibleContainer>
    )
}