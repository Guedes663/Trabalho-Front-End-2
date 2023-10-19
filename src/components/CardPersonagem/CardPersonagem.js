import React from 'react';
import styled from 'styled-components';

export class CardPersonagem extends React.Component {
    state = {
        dadosParaPai: {
            genero: this.props.genero,
            origem: this.props.origem,
            status: this.props.status,
            especie: this.props.especie,
            imagem: this.props.urlImagens,
            nome: this.props.nomePersonagem
        }
    }

    enviarDadosParaPai = () => {
        this.props.enviarDadosParaPai(this.state.dadosParaPai);
    }

    WrapperCard = styled.div`
        margin: 1%;
    `

    Botao = styled.button`
        background-color: black;
        color: white;
        padding: 3%;
    `

    render() {
        return (
            <this.WrapperCard>
                <this.Botao onClick={this.enviarDadosParaPai}>
                    <img src={this.props.urlImagens} alt='Personagens de Rick and Morty' />
                    <h3>{this.props.nomePersonagem}</h3>
                </this.Botao>    
            </this.WrapperCard>
        );
    }
}
