import { Employeer } from "../../components/Employeer"
import { AddEmployeer, Button, EmployeerListContainer, HeaderContainer, TableContainer, Tbody, Th, Thead, Title, Tr } from "./styles"
import { Pen, Plus, Trash } from 'phosphor-react'
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, where, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Table from "../../components/Table";

interface EmployeersType {
    name: string
    cpf: string
    occupation: string
    sector: string
}

export function EmployeerList() {
    const auth = useAuth();
    const navigate = useNavigate();
    const [employeersData, setEmployeersData] = useState<EmployeersType[]>([])

    useEffect(() => {
        async function findSector() {
            const sectorRef = collection(db, "sector")
            const employeerRef = collection(db, "employeers")
            const userRef = doc(db, "users", `${auth.user?.uid}`)
            const data = query(employeerRef, where("userRef", "==", userRef))
            const docSnap = await getDocs(data);

            const employeers: Array<EmployeersType> = []

            docSnap.forEach((document) => {

                async function getSectorName() {

                    const dados = doc(sectorRef, document.data().sectorRef)
                    const docSnap = await getDoc(dados);

                    let data = {
                        name: document.data().name,
                        cpf: document.data().cpf,
                        occupation: document.data().occupation,
                        sector: docSnap.data().sectorName,
                    }

                    employeers.push(data)

                }
                getSectorName()

            });

            setEmployeersData(employeers)
        }

        findSector()

    }, [])

    console.log(employeersData)
    return (
        <EmployeerListContainer>
            <HeaderContainer>
                <Title>Lista de Funcionários</Title>
                <AddEmployeer onClick={() => navigate("./createemployeer")}><Plus size={24} style={{ marginRight: 5 }} />Criar novo</AddEmployeer>
            </HeaderContainer>

            <TableContainer>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>CPF</Th>
                        <Th>Cargo</Th>
                        <Th>Setor</Th>
                        <Th></Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {employeersData.map((data) => (
                        <Tr>
                            <Th>{data.name}</Th>
                            <Th>{data.cpf}</Th>
                            <Th>{data.occupation}</Th>
                            <Th>{data.sector}</Th>
                            <Th>
                                <Button> <Pen size={24} color="#76AB72" /> </Button>
                                <Button> <Trash size={24} color="red" /> </Button>
                            </Th>
                        </Tr>
                    ))}

                </Tbody>

            </TableContainer>

        </EmployeerListContainer>
    )
}