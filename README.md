# Navigapp

Esse projeto é um protótipo de Navegador Direcional (Spatial/Directional Navigator) pensado para criar aplicações que recebem somente entradas de teclado do usuário.

## Como funciona?

A aplicação observa a ação de _KeyDown_ dos usuários e, a partir do código e do componente que está em foco, gerenciona o estado (a partir de um mapa de estados feito dentro da própria aplicação).  
Alguns materiais interessantes que usei como base:

- (SmartTV Navigation with React)[https://medium.com/norigintech/smart-tv-navigation-with-react-86bd5f3037b7]
- (BBC T.A.L)[https://bbc.github.io/tal/widgets/focus-management.html]
- (React Spatial Navigation, por NoriginMedia)[https://github.com/NoriginMedia/react-spatial-navigation]
- (React TV, por raphamorim)[https://github.com/raphamorim/react-tv]
- (Pass the Remote: User Input on TV Devices)[https://netflixtechblog.com/pass-the-remote-user-input-on-tv-devices-923f6920c9a8]

Todos os elementos listados foram utilizados **apenas para consulta**, permitindo assim elaborar um modelo mais robusto de gerenciamento de **foco**.  
Além disso, utilizei informações da famosa (JSON Movie List, de mikeleguedes)[https://github.com/mikeleguedes/json-movie-list] para a criação de um banco de dados fake (pois outros serviços de API necessitavam de mais informações do que o necessário para um teste).

## Sobre o projeto

O projeto foi criado utilizando o (Create React App)[https://github.com/facebook/create-react-app] baseando-se no template em Typescript.
Além disso, a aplicação também possui algumas outras bibliotecas, onde as principais são:

- eslint: garante a qualidade de código.
- @material-ui/core: biblioteca core do (Material UI)[https://material-ui.com/pt/] (utilizada **EXCLUSIVAMENTE** para inserir os ícones no sistema).

Importante citar, também, que todos os arquivos são compatíveis com Typescript.

## Rodando o projeto

Para rodar o projeto, abra um terminal, entre na pasta do projeto e utilize o comando `yarn start`.
