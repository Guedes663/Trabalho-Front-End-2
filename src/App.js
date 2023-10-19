import React from 'react';
import axios from 'axios';
import { CardPersonagem } from './components/CardPersonagem/CardPersonagem';
import { DescricaoPersonagem } from './components/DescricaoPersonagem/DescricaoPersonagem.js';
import styled from 'styled-components';
import './App.css';
import logo from './assets/Rick-And-Morty-Logo.png';

class App extends React.Component {
    state = {
        personagens: [],
        personagemSelecionado: null,
        termoPesquisado: '',
        personagensOriginais: [] 
    }

    obterPersonagens = () => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((resposta) => {
                const personagens = resposta.data.results;
                this.setState({ 
                    personagens: personagens,
                    personagensOriginais: personagens
                });
                console.log(personagens);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    obterDadosFilho = (dados) => {
        this.setState({ personagemSelecionado: dados });
    }

    atualizarPesquisa = (event) => {
        const valorDigitado = event.target.value.toLowerCase();
        const personagensFiltrados = this.state.personagensOriginais.filter((personagem) => {
            return personagem.name.toLowerCase().includes(valorDigitado);
        });

        this.setState({
            termoPesquisado: valorDigitado,
            personagens: personagensFiltrados
        });
    }

    componentDidMount() {
        this.obterPersonagens();
    }

    Logo = styled.img`
        height: 8%;
        width: 8%;
    `

    ContainerDeCards = styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    `

    ContainerDePesquisa = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10%;
    `

    BarraDePesquisa = styled.input`
        width: 40%;
        padding: 1%;
        margin: 2%;
        border-radius: 1rem;
    `

    render() {
        return (
            <div>
                <header className='cabecalho'>
                    <this.Logo src={logo} alt='Logo do Rick and Morty' />
                </header>

                <body className='conteudoPrincipal'>
                    <this.ContainerDePesquisa>
                        {this.state.personagemSelecionado === null ?
                            <this.BarraDePesquisa
                                type='text'
                                placeholder='Pesquise por nome'
                                onChange={this.atualizarPesquisa}
                                value={this.state.termoPesquisado}
                            /> : <></>}
                    </this.ContainerDePesquisa>
                    <this.ContainerDeCards>
                        {this.state.personagemSelecionado === null ? this.state.personagens.map((personagem) => (
                            <CardPersonagem
                                key={personagem.id}
                                nomePersonagem={personagem.name}
                                origem={personagem.origin}
                                status={personagem.status}
                                genero={personagem.gender}
                                especie={personagem.species}
                                urlImagens={personagem.image}
                                enviarDadosParaPai={this.obterDadosFilho}
                            />
                        )) : <DescricaoPersonagem
                            nome={this.state.personagemSelecionado.nome}
                            origem={this.state.personagemSelecionado.origem.name}
                            status={this.state.personagemSelecionado.status}
                            genero={this.state.personagemSelecionado.genero}
                            especie={this.state.personagemSelecionado.especie}
                            imagem={this.state.personagemSelecionado.imagem}
                            enviarDadosParaPai={this.obterDadosFilho}
                        />}
                    </this.ContainerDeCards>
                </body>
            </div>
        );
    }
}

export default App;
