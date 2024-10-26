"use client"
import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"
interface ICategoria {
    id: number,
    nome: string
}

export const Menu = () => {
    const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/categorias')
            .then((resposta) => {
                // quando e Arrey[123,456]
                setCategorias(resposta.data)
            })
            .catch((err: AxiosError) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <NavbarContainer >
                <NavbarInnerContainer>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLinkExtended href={"/"}
                                style={{
                                    color: `#fff`
                                }}>
                                Americanos

                            </NavbarLinkExtended>

                            <NavbarLink href={'/'}>
                                Home
                                

                            </NavbarLink>

                            {
                                        
                                        categorias.map((categoria) => (
                                            <NavbarLink
                                                key={categoria.id}
                                                href={`/categorias/${categoria.id}`}
                                            >
                                                {categoria.nome}
                                            </NavbarLink>
                                        ))
                                    }
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkExtended href={'/carrinho'}>
                            Car</NavbarLinkExtended>

                    </RightContainer>

                </NavbarInnerContainer>
            </NavbarContainer>
        </>
    )
}