## Card Post Facebook
### 01 -  No exercício inicial, vamos desenvolver nosso primeiro componente React. Como ponto de partida, escolhemos recriar o cartão de post do Facebook, utilizando-o como o nosso primeiro componente React. Para isso, é necessário que tenha seguido os primeiros passos da instalação do Vite. Siga os seguintes passos:
1- Entre na pasta Aula 01 ( cd '.\Aula 01\') <br/>
2 - Baixe as dependências ( npm install) <br/>
3 - Inicie o servidor ( npm run dev) <br/>
4 - Na Pasta src/ crie um pasta components <br/>
5 - Dentro da pasta components crie o componente Card e o componenente Header  <br/>
6 - Dentro de App.jsx importe os componentes Header e Card  <br/>
7 - Dentro das pastas dos componentes crie um arquivo style.module.css e import no index.jsx seguindo o padrão do componente exemplo do exercício
Siga o modelo de Card no figma e faça a estilização.
Link:https://www.figma.com/file/PmW9qaDyiJQ1LfELrCN3Te/POST-FACEBOOK?type=design&node-id=0%3A1&mode=design&t=7wAsTvtrS1aDwyzp-1
** Dica para adição de ícones utilize  a biblioteca react-icons 
** Para instalá-la utilize o comando npm install react-icons
Link: https://react-icons.github.io/react-icons/

### 02 - Após fazer a configurações da instalação do Tailwind CSS, refaça a estilização do componente utilizando o framework.


### 03 - Crie um array que representa uma lista com pelo menos cinco posts do Facebook. Cada post deve conter as informações conforme a lista de objetos a seguir:
```javascript 
const posts = [
    {id:1, user:"Fulano de Tal", content:"Conteúdo do meu post", avatar:"path avatar",since:"12 h", likes:12, comments:[
        {id:1, content:"Que legal esse post"}
        {id:2, content:"Muito bom esse curso"}
        ],
        banner:"./path da imagem"
        }
    {id:2, user:"Sicrano", content:"Conteúdo do meu post", avatar:"path avatar",since:"1 h", likes:0, comments:[
        {id:1, content:"muito ruim esse post"}
        {id:2, content:"Muito bom esse curso"}
        ],
        banner:"./path da imagem"
        }
]
```
### Você deve renderizar esses posts de modo que, se tiverem pelo menos um comentário, esse comentário deverá ser exibido. Se houver mais de um comentário, os comentários serão exibidos em forma de lista. Se houver um banner, ele deve ser exibido no card; caso contrário, somente o texto do card deverá ser exibido.