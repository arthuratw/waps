import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { Pen, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { db } from "../../services/firebase";
import { AddSector, Button, SectorListContainer, HeaderContainer, TableContainer, Tbody, Th, Thead, Title, Tr } from "./styles";

export interface SectorTypes {
    name: string
}

export function SectorList() {
    const auth = useAuth()
    const [sectorsNames, setSectorsNames] = useState<SectorTypes[]>([])

    useEffect(() => {
        async function findSector() {
            const sectorRef = collection(db, "sector")
            const userRef = doc(db, "users", `${auth.user?.uid}`)
            const data = query(sectorRef, where("userRef", "==", userRef))

            const docSnap = await getDocs(data);

            const sectors: Array<SectorTypes> = []

            docSnap.forEach((doc) => {
                let data = {
                    name: doc.data().sectorName
                }

                sectors.push(data)
            });
            setSectorsNames(sectors)
        }

        findSector()

    }, [])

    return (
        <SectorListContainer>
            <HeaderContainer>
                <Title>Lista de Setores</Title>
                <AddSector><Plus size={24} style={{ marginRight: 5 }} />Criar novo</AddSector>
            </HeaderContainer>

            <TableContainer>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th></Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {sectorsNames.map((data) => (
                    <Tr>
                        <Th>{data.name}</Th>
                        <Th>
                            <Button> <Pen size={24} color="#76AB72" /> </Button>
                            <Button> <Trash size={24} color="red" /> </Button>
                        </Th>
                    </Tr>
                    ))}

                </Tbody>

            </TableContainer>

        </SectorListContainer>
    )
}