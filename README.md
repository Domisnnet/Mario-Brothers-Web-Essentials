![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/Mario-Brothers-Web-Essentials?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Domisnnet/Mario-Brothers-Web-Essentials?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/Mario-Brothers-Web-Essentials?style=for-the-badge)

<h2 id="sobre-o-projeto">1. ⭐ Super Mario Bros - O Filme 🍄🎬</h2>

![Status do Deploy](https://img.shields.io/badge/Status-Online-brightgreen?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Hosting](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/blob/main/LICENSE)

![Super Mario Bros - O Filme](src/imagens/mario.png)

Bem-vindo ao repositório oficial do **Super Mario Bros - O Filme**! Esta é uma landing page imersiva e responsiva criada com **HTML, CSS e JavaScript Vanilla**, inspirada no universo visual do filme da Illumination/Nintendo. O projeto apresenta um vídeo de fundo em loop, um modal premium com o trailer oficial e um design temático completo.

---

## 📚 Tabela de Conteúdo

| 💻 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :--------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Instalação](https://img.shields.io/badge/6%20-%20Instalação-009688)](#instalacao) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#creditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Acessar-FF9800)](#como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Funções](https://img.shields.io/badge/4%20-%20Funções-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="tecnologias-utilizadas">2. ⚙️ Tecnologias Utilizadas</h2>

| Camada | Tecnologias | Descrição |
| :-------------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| **Estrutura** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Marcação semântica da landing page. |
| **Estilo** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estilos, animações e layout responsivo com Vanilla CSS. |
| **Interação** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Modal de trailer com controle de vídeo HTML5 nativo. |
| **Hosting** | ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white) | Hospedagem estática via CDN do GitHub, custo zero. |
| **Tipografia** | ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Fonte Poppins em múltiplos pesos para leitura elegante. |

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Clique no botão abaixo para entrar no Reino dos Cogumelos:

<div align="left">
  <a href="https://domisnnet.github.io/Mario-Brothers-Web-Essentials/" target="_blank">
    <img alt="Botão Acessar" src="src/imagens/botão.webp" height="70" width="70" />
  </a>
</div>

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades Principais</h2>

| Funcionalidade | Descrição |
| :-------------------------------- | :------------------------------------------------------------------------------------------ |
| 🎬 **Vídeo de Fundo em Loop** | Vídeo `mario.mp4` em autoplay, mudo e totalmente responsivo cobrindo a viewport. |
| 🪟 **Modal com Trailer** | Modal com backdrop escurecido e transição suave para exibir o trailer do filme. |
| ▶️ **Player HTML5 Premium** | Elemento `<video>` nativo com bordas arredondadas, brilho vermelho e controles nativos. |
| 🔴 **Botão de Fechar Animado** | Botão circular que roda 90° e muda de cor no hover para uma UX premium. |
| 📱 **Layout Responsivo** | Media queries adaptam o conteúdo para desktop, tablet e mobile sem quebrar o design. |
| 🖼️ **Tipografia Personalizada** | Google Fonts Poppins com múltiplos pesos para hierarquia visual fiel ao estilo do filme. |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

### 🎥 Vídeo de Fundo Full-Screen

O vídeo de fundo usa `object-fit: cover` combinado com `transform: scale(1.35)` para preencher toda a tela sem barras pretas, independente do aspect ratio da janela. Uma pseudo-camada `::after` aplica um gradiente escuro lateral para garantir legibilidade do texto.

### 🎭 Sistema de Modal Puro em JS

O modal é controlado com apenas `classList.toggle("aberto")` e manipulação direta do atributo `src` do elemento `<video>` — zero dependências externas. O play/pause é gerenciado programaticamente no abrir/fechar.

---

<h2 id="instalacao">6. 🚀 Instalação e Configuração Local</h2>

```bash
# Clonar o repositório
git clone https://github.com/Domisnnet/Mario-Brothers-Web-Essentials.git

# Acessar a pasta
cd Mario-Brothers-Web-Essentials
```

O GitHub Pages atualiza automaticamente em alguns segundos após o push.

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Siga os passos abaixo para sugerir melhorias:

| Fase | Ação | Link / Comando |
| :----: | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/fork) |
| **02** | **Branch** | `git checkout -b feature/MinhaMelhoria` |
| **03** | **Commit** | `git commit -m 'feat: add nova funcionalidade'` |
| **04** | **Push** | `git push origin feature/MinhaMelhoria` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/compare) |

### 🐛 Encontrou um problema?

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/Mario-Brothers-Web-Essentials?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/issues)
[![Report Bug](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/issues/new)

---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Por que o vídeo de fundo está com zoom? ❓</strong></summary>
<p>🎬 <strong>Resposta:</strong> O arquivo <code>mario.mp4</code> possui barras pretas (letterbox) no topo e na base. Aplicamos um <code>transform: scale(1.35)</code> combinado com <code>object-fit: cover</code> para cortar essas bordas e garantir que o vídeo ocupe plenamente toda a viewport.</p>
</details>

<details>
<summary><strong>Por que o modal usa um elemento video ao invés de um iframe? ❓</strong></summary>
<p>▶️ <strong>Resposta:</strong> Como o vídeo do trailer está hospedado localmente (<code>vídeo/mario.mp4</code>), usamos o elemento nativo <code>&lt;video&gt;</code> do HTML5 para streaming direto, sem depender da API do YouTube ou de serviços externos.</p>
</details>

<details>
<summary><strong>O site funciona em dispositivos mobile? ❓</strong></summary>
<p>📱 <strong>Resposta:</strong> Sim! O layout é totalmente responsivo usando media queries para adaptar os componentes — abaixo de 1200px o vídeo de fundo é substituído por uma cor sólida e o layout reordena os elementos verticalmente.</p>
</details>

<details>
<summary><strong>Posso utilizar este projeto como base para o meu portfólio? ❓</strong></summary>
<p>🤝 <strong>Resposta:</strong> Com certeza! O projeto é <strong>Open Source</strong> sob a <strong>Licença MIT</strong>. Sinta-se livre para clonar, estudar e adaptar — apenas lembre-se de dar os devidos créditos ao autor original.</p>
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Explore o projeto completo no repositório oficial:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FMario--Brothers--Web--Essentials-E91E63?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials)

---

<h2 id="creditos">10. 📝 Créditos & Reconhecimentos</h2>

| Atribuição | Responsável / Recurso | Descrição |
| :------------------ | :--------------------------- | :------------------------------------------------------ |
| **Frontend Dev** | **DomisDev** | Design, HTML/CSS/JS e configuração de deploy. |
| **Fonte do Filme** | **Nintendo / Illumination** | Personagens, logotipo e identidade visual do universo. |
| **Infraestrutura** | **GitHub Pages** | Hospedagem estática gratuita via CDN global. |
| **Apoio Técnico** | **Google Gemini** | Padronização, refinamento e auxílio no desenvolvimento. |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está sob a [![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/Domisnnet/Mario-Brothers-Web-Essentials/blob/main/LICENSE)

---

<h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub</h2>

<a href="https://github.com/Domisnnet">
  <img src="src/imagens/DomisDev.png" width="90" style="border-radius: 50%" alt="DomisDev GitHub">
</a>