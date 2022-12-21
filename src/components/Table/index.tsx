import { TableContainer, Tr, Tbody, Th, Thead, Button } from "./styles"
import { Trash, Pen } from "phosphor-react"
import { useState } from "react"

interface TableProps {
    props: []
}

interface TableTypes{
    name:string
    cpf: string
    occupation:string
    sector:string
}

export default function Table() {

    

    return (
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
                <Tr>
                    <Th>{}</Th>
                    <Th>{}</Th>
                    <Th>{}</Th>
                    <Th>{}</Th>
                    <Th>
                        <Button> <Pen size={24} color="#76AB72"/> </Button>
                        <Button> <Trash size={24} color="red"/> </Button>
                    </Th>
                </Tr>
            </Tbody>

        </TableContainer>
    )
}