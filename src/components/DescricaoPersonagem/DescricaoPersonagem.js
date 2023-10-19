import React from 'react';
import styled from 'styled-components';

export class DescricaoPersonagem extends React.Component {

    enviarDadosParaPai = () => {
        this.props.enviarDadosParaPai(null);
    }

    Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 2%;
    `
    ImagemPersonagem = styled.img`
        width: 20%;
        border: 0.5rem solid;
        border-radius: 1rem;
    `

    Botao = styled.button`
        width: 20%;
        padding: 1% 0%;
        font-size: 1.4rem;
        background-color: black;
        color: white;
        border-radius: 1rem;
    `
    Info = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20%;
        align-items: center;
    `

    render() {
        return (
            <this.Container>
                <h1>{this.props.nome}</h1>
                <this.ImagemPersonagem src={this.props.imagem} alt={this.props.nome} />
                <this.Info>  
                    <h2>Origem: {this.props.origem}</h2>
                    <h2>Status: {this.props.status}</h2>
                    <h2>Espécie: {this.props.especie}</h2>
                    <h2>Gênero: {this.props.genero}</h2>
                </this.Info>    
                <this.Botao onClick={this.enviarDadosParaPai}>Voltar</this.Botao>
            </this.Container>
        );
    }
}
