# formacaoAngular

Cursos voltados para o desenvolvimento no Framework Angular.

-- Linhas para colocar dentro do package.json
"compile": "tsc",
"start": "tsc -w"
npm install -> instala os modulos node.js
npm run compile -> compila os arquivos TS e gera as versões em JS, compile é o nome colocado na linha de "compile", nome que quiser
npm start -> faz o sistema ficar se atualizando tempo todo.

-- Instalação do Angular 
- Instalar => npm install -g @angular/cli 
- Criar o projeto => ng new "nome do projeto" 
- Para rodar o projeto => ng serve --open

1 - TypeScript parte 1: Evoluindo seu JavaScript 
- Aprenda a configurar do zero seu ambiente 
- Compreenda as vantagens da tipagem estática 
- Modele suas classes utilizando o que há de melhor na linguagem 
- Aprenda a utilizar modificadores de acesso, herança e tipos genéricos 
- Conheça gradativamente os recursos do TypeScript compiler 
- Entenda o papel dos Type Definitions

2 - TypeScript parte 2: Avançando na linguagem 
- Aprenda a utilizar modificadores de acesso, herança e tipos genéricos 
- Entenda o papel das Enumerations 
- Crie um mini framework de atualização de view inspirado no JSX 
- Configure ainda mais seu compilador TS e tire máximo proveito do seu código

3 - Angular: Começando com o framework 
- Utilize os recursos do framework para acelerar o desenvolvimento 
- Aprenda a criar componentes Angular 
- Entenda como transmitir informação entre componentes 
- Integre dados com API’s REST 
- Transforme seus componentes em páginas

4 - Angular: Boas práticas em arquiteturas e formulários 
- Entenda como começar um projeto com melhores validações de tipos utilizando o modo strict 
- Organize melhor seu projeto Angular utilizando módulos 
- Melhore a performance da sua aplicação conhecendo o Lazy Loading 
- Aprenda a criar formulários simples com módulo de Formulários Template Driven 
- Crie formulários elaborados utilizando o módulo de Formulários Reativos - Desenvolva validações síncronas e assíncronas para seus formulários. 
- Aprenda como utilizar token JWT no seu projeto Angular

5 - Angular e RxJS: programação reativa
- Lidar com a biblioteca RxJS;
- Aplicar o padrão Observer.
- Utilizar os métodos next, error e complete;
- Desinscrever-se do observable através do unsubscribe;
- Utilizar o operador pipe para agrupar múltiplos operadores;
- Utilizar o operador tap para fazer debugging na aplicação;
- Transformar o fluxo de dados com o operador map.
- Transformar dados com pipes;
- Passar parâmetros e utilizar pipes encadeados;
- Criar um pipe customizado.
- Desenvolver uma busca dinâmica;
- Utilizar o pipe async;
- Encadear os operadores switchMap, filter e debounceTime para otimizar a performance da aplicação.