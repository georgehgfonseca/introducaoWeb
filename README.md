# Introdução às tecnologias web: HTML, CSS e JavaScript

HTML (_HyperText Markup Language_), CSS (_Cascading Style Sheets_) e JavaScript são os pilares de sustentação dos sistemas web modernos:
- **HTML** é reponsável por definir o que deve ser exibido em tela, bem como a estrutura e hierarquia dos componentes;
- **CSS** é responsável por definir a aparência dos componentes em tela, define questões como tamanho, cores, fontes, espaçamentos;
- **JavaScript** permite que o usuário interaja com o sistema, tratando eventos como um clique em um botão, ou o carregamento de dados externos. 

Esse projeto apresenta uma introdução a essas três tecnologias através de pequenos exemplos, cada qual focado em um aspecto dessas tecnologias.

---

## 1. Instalação

Não é necessária nenhuma instalação. Basta abrir cada arquivo HTML no seu navegador preferido. Recomendo o uso do editor [VS Code](https://code.visualstudio.com/) com as seguintes extensões instaladas:
`Prettier`, `vscode-icons`, `HTML CSS Support`, `ESLint`

---

## 2. Exemplos

### Textos

Traz exemplos de tags ligadas a textos: `h1` `h2` `p` e suas propriedades CSS mais comuns: `color` `font-weight` `font-style` `font-size` `font-family` `text-decoration` `text-transform`

---

### Seletores CSS

Demonstra como os estilos css podem ser aplicados às tags por `class`, `id`, `tag`, e `style` (inline) e suas prioridades de aplicação em caso de conflitos. Traz também as tags `div` `hr` `br` `ul` `li` 

---

### Caixas

Apresenta como as propriedades css `border` `padding` e `margin` afetam a apresentação dos elementos (que podem ser interpretados como caixas)

---

### Tamanhos

Apresenta como o tamanho dos elementos pode ser definido pelas propriedades css `height` `width` com valores fixos em pixels, de acordo com o tamanho da tela `50vw`, ou ainda para ajustar ao conteúdo `fit-content`

---

### Posicionamento

Define como os elementos se dispõem na tela. As principais propriedades abordadas são `display` `justify-content` `align-items` `text-align`

---

### Links e imagens

Apresenta como hiperlinks podem ser introduzidos pela tag `a` e imagens pela tag `img`. A fonte de uma imagem pode ser uma URL ou um arquivo interno

---

### Formulários

Traz exemplos das tags `form` `label` `input` `button` e como elas podem ser combinadas para criar formulários. Apresenta ainda a vinculação de um script em JavaScript para lidar com o evento do clique no botão.

---

### Card

Apresenta como os elementos abordados podem ser combinados para criar componentes de interface harmoniosos

---

### Manipulação DOM

Apresenta como manipular a DOM com JavaScript no evento do clique do usuário em um botão. Com o método `addEventListener` podemos 'escutar' o evento de clique no botão; com `document.getElementById` podemos acessar um objeto da DOM; e com `myElement.appendChild` podemos adicionar programaticamente uma nova tag HTML em um elemento. Podemos ver essas funções em ação pelo exemplo de uma lista de tarefas, que podem ser adicionadas pelo usuário.

---

### Manipulação DOM v2

Nesse segundo exemplo, temos funcionalidades mais avançadas com relação ao exemplo anterior. Agora salvamos as tarefas em armazenamento interno usando o objeto `localStorage` e temos a opção de deletar tarefas (agora usamos um vetor JavaScript e seus métodos `push`, `splice` e `forEach`). Caso queira melhorar o design dessa página, pode fazê-lo como exercício.

---

### Fetch API

Apresenta como buscar dados de uma API através da função `fetch`. Nesse exemplo, com base no CEP informado, buscamos os dados (logradouro, bairro, localidade, etc) na API do Viacep (https://viacep.com.br/).

---

## 3. Próximos passos 

O mundo do desenvolvimento de software está em constante evolução. Atualmente é pouco usual criar sistemas web com HTML, CSS e JavaScript/PHP puros, o que era perfeitamente normal até os anos 2010.

Sem as bibliotecas modernas de desenvolvimento, a manipulação dos elementos na tela precisa ser feita manualmente com funções do JavaScript para manipular a DOM (arquivo HTML) criando, ou removendo elementos, o que é muito lento, verboso e propício a erros. 

Essas limitações, junto à demanda por sistemas web dinâmicos, responsivos e atraentes impulsionou o surgimento de diversas bibliotecas e tecnologias que potencializam a produtividade. Dentre elas podemos destacar:
- **[React.js](https://react.dev/)** - biblioteca JavaScript que facilita a atualização da página em resposta à alteração de algum estado;
- **[Next.js](https://nextjs.org/)** - framework para React.js que provê o carregamento otimizado das páginas e facilidade na construção de rotas da aplicação;
- **[Material UI](https://mui.com/)** - biblioteca de componentes com estilos pré-definidos e aparência similar ao padrão adotado pela Google;
- **[TypeScript](https://www.typescriptlang.org/)** - super-conjunto do JavaScript que permite a definição de tipos às variáveis e objetos;
- **[TailwindCSS](https://tailwindcss.com/)** - biblioteca que permite a definição de estilos inline de forma mais produtiva com um tema base;
- **[ReactNative](https://reactnative.dev/)** - biblioteca que permite a programação de aplicativos multi-plataforma em JavaScript usando tecnologias próximas ao HTML e CSS;
- **[Electron](https://www.electronjs.org/)** - biblioteca que permite a criação de aplicativos desktop em JavaScript;
- **[Vercel](https://vercel.com/)** - plataforma que permite o lançamento automático de páginas na web de forma gratuita (com limitações).
