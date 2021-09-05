import React from 'react'
import { Container, Footer, Header, Main, Sidebar, Widget } from '../../styles/Model'

const Home = () => {
    return (
        <>
            
            <Container className="contenedor">

                <Header className="header">
                    <h1>Header</h1>
                </Header>

                <Main className="contenido">
                    <h2>Sub Titulo</h2>
                    <p>Lorem Ejemplo</p>
                </Main>

                <Sidebar className="sidebar">Sidebar</Sidebar>

                <Widget className="widget-1">Widget-1</Widget>
                <Widget className="widget-2">Widget-2</Widget>

                <Footer className="footer">Footer</Footer>

            </Container>
        </>
    )
}

export default Home
