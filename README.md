# Buscador de CEP

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Stack: HTML/CSS/JS](https://img.shields.io/badge/Stack-HTML%2FCSS%2FJavaScript-111827)](index.html)

Aplicação web estática para consultar endereços a partir de um CEP usando a API pública do ViaCEP. O projeto foi pensado para ser simples de executar, leve e fácil de adaptar, com interface responsiva construída em HTML, CSS e JavaScript puro.

## Funcionalidades

- Consulta de CEP com retorno de endereço completo.
- Validação básica para aceitar apenas CEPs com 8 dígitos.
- Interface responsiva com visual moderno e componentes em Tailwind via CDN.
- Uso de ícones do Phosphor para melhorar a experiência visual.
- Botão para refazer a consulta sem recarregar manualmente a página.

## Instalação e Configuração

Este projeto não usa `npm`, variáveis de ambiente ou etapa de build. As dependências visuais são carregadas por CDN.

### Requisitos

- Navegador moderno.
- Um servidor local simples para evitar limitações do `file://` ao chamar a API.

### Como executar localmente

1. Abra a pasta do projeto no VS Code ou no seu editor preferido.
2. Inicie um servidor local na raiz do projeto.
3. Acesse `index.html` pelo navegador.

Exemplos de servidor local:

```bash
python -m http.server 8000
```

ou, se preferir, use a extensão Live Server no VS Code.

## Uso

Versão publicada na Vercel: [projeto-buscadorde-cep.vercel.app](https://projeto-buscadorde-cep.vercel.app/)

1. Digite um CEP válido no campo de busca.
2. Clique em **Buscar CEP**.
3. A aplicação exibe CEP, logradouro, bairro, localidade e UF retornados pelo ViaCEP.
4. Clique em **Fazer outra consulta** para iniciar uma nova busca.

Exemplo de CEP:

```text
60764070
```

## Estrutura do Projeto

- [index.html](index.html): estrutura principal da interface e carregamento dos recursos externos.
- [index.js](index.js): lógica de consulta ao ViaCEP, validação do CEP e renderização dos dados.
- [style.css](style.css): estilos adicionais do projeto.
- [assets](assets): imagens e ícone do favicon usados na interface.
- [LICENSE](LICENSE): texto da licença do projeto.

## Contribuição

Contribuições são bem-vindas. Se quiser colaborar:

1. Crie uma branch para sua alteração.
2. Mantenha o código simples e consistente com a estrutura atual.
3. Valide manualmente a busca de CEP antes de abrir um pull request.
4. Descreva claramente o que foi alterado e por quê.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Autoria

Domingos Muratori Neto