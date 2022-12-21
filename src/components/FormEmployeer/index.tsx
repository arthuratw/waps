import { Button, FormContainer, Input, InputArea, Label, Title, Select } from "./styles"
import { useAuth } from "../../context/useAuth";
import { useContext, useEffect, useLayoutEffect, useState, useCallback } from "react";
import { AuthContext } from "../../context/auth";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export interface SectorTypes {
    value?: string
    label: string
}

export default function FormEmployeer() {
    const auth = useAuth()
    const [sectorsNames, setSectorsNames] = useState<SectorTypes[]>([])
    const [name, setName] = useState("")
    const [occupation, setOccupation] = useState("")
    const [cpf, setCpf] = useState("")
    const [employeerSector, setEmployeerSector] = useState("")
    const navigate = useNavigate()

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

   

    function handleSubmit(){
        auth.createEmployeer(name, cpf, occupation, employeerSector)
        
    }

    return (
        <FormContainer>

            <InputArea>
                <Label>
                    <Title>Nome</Title>
                    <Input
                        title="Nome"
                        onChange={e => setName(e.target.value)}
                    />
                </Label>

                <Label>
                    <Title>CPF</Title>
                    <Input
                        title="CPF"
                        onChange={e => setCpf(e.target.value)}
                    />
                </Label>

            </InputArea>

            <InputArea>
                <Label>
                    <Title>Cargo</Title>
                    <Input
                        title="Cargo"
                        onChange={e => setOccupation(e.target.value)}
                    />
                </Label>
                <Label>
                    <Title>Setor</Title>
                    <Select
                        placeholder="Selecione uma opção"
                        onChange={e => setEmployeerSector(e.target.value)}
                    >
                        {sectorsNames.map((sectorName) => (
                            <option value={sectorName.value}> {sectorName.label} </option>
                        ))}
                    </Select>
                </Label>
            </InputArea>

            <Button onClick={() => handleSubmit()} >Cadastrar</Button>


        </FormContainer>
    )
}