# Introdução às tecnologias web: HTML, CSS e JavaScript

Esse projeto apresenta as principais tags HTML e propriedades CSS através de exemplos. Cada arquivo html traz exemplos relacionados a um conceito abordado em aula.

## Instalação

Não é necessária nenhuma instalação. Basta abrir cada arquivo html no seu navegador preferido.

## Textos

Traz exemplos de tags ligadas a textos: `h1` `h2` `p` e suas propriedades css mais comuns: `color` `font-weight` `font-style` `font-size` `font-family` `text-decoration` `text-transform`

## Seletores CSS

Demonstra como os estilos css podem ser aplicados às tags por `class`, `id`, `tag`, e `style` (inline) e suas prioridades de aplicação em caso de conflitos. Traz também as tags `div` `hr` `br` `ul` `li` 

## Bordas, padding e margem

Apresenta como as propriedades css `border` `padding` e `margin` afetam a apresentação dos elementos

## Tamanhos

Apresenta como o tamanho dos elementos pode ser definido pelas propriedades css `height` `width` com valores fixos em pixels, de acordo com o tamanho da tela `50vw`, ou ainda para ajustar ao conteúdo `fit-content`

## Posicionamento

Define como os elementos se dispõem na tela. As principais propriedades abordadas são `display` `justify-content` `align-items` `text-align`

## Links e imagens

Apresenta como hiperlinks podem ser introduzidos pela tag `a` e imagens pela tag `img`. A fonte de uma imagem pode ser uma URL ou um arquivo interno

## Formulários

Traz exemplos das tags `form` `label` `input` `button` e como elas podem ser combinadas para criar formulários. Apresenta ainda a vinculação de um script em JavaScript para lidar com o evento do clique no botão.

## Card

Apresenta como os elementos abordados podem ser combinados para criar componentes de interface harmoniosos

## Manipulação DOM

Apresenta como manipular a DOM com JavaScript no evento do clique do usuário em um botão. Temos o exemplo de uma lista de tarefas, que podem ser adicionadas pelo usuário.

## Manipulação DOM v2

Nesse segundo exemplo, temos funcionalidades mais avançadas com relação ao exemplo anterior. Agora salvamos as tarefas em armazenamento interno e temos a opção de deletar tarefas. Caso queira melhorar o design dessa página, pode fazê-lo como exercício.

## Fetch API

Apresenta como buscar dados de uma API através da função `fetch``. Nesse exemplo, com base no CEP informado, buscamos os dados (logradouro, bairro, localidade, etc) na API do Viacep (https://viacep.com.br/).

## Próximos passos 

O mundo do desenvolvimento de software está em constante evolução. Atualmente é pouco usual criar aplicações com HTML, CSS e JavaScript/PHP puros, o que era perfeitamente normal até os anos 2010.
Sem as bibliotecas modernas de desenvolvimento, a manipulação dos elementos na tela precisa ser feita manualmente com funções do JavaScript para manipular a DOM (arquivo HTML) criando, ou removendo elementos, o que é muito lento, verboso e propício a erros. 
Essas limitações, junto à demanda por sistemas web dinâmicos, responsivos e atraentes impulsionou o surgimento de diversas bibliotecas e tecnologias que potencializam a produtividade. Dentre elas podemos destacar:
- **React.js** - biblioteca JavaScript que facilita a atualização da página em resposta à alteração de algum estado;
- **Next.js** - framework para React.js que provê o carregamento otimizado das páginas e facilidade na construção de rotas da aplicação;
- **Material UI** - biblioteca de componentes com estilos pré-definidos e aparência similar ao padrão adotado pela Google;
- **TypeScript** - super-conjunto do JavaScript que permite a definição de tipos às variáveis e objetos;
- **TailwindCSS** - biblioteca que permite a definição de estilos inline de forma mais produtiva com um tema base;
- **ReactNative** - biblioteca que permite a programação de aplicativos multi-plataforma em JavaScript usando tecnologias próximas ao HTML e CSS;
- **Electron** - biblioteca que permite a criação de aplicativos desktop em JavaScript.
