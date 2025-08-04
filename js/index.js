console.log("index.js loaded");

function showAuthorDesc() {
    // Cria o fundo escurecido
    const backgroundBlur = document.createElement('div');
    backgroundBlur.className = 'background-blur';
    document.body.appendChild(backgroundBlur);

    // Cria o container da descrição
    const authorDesc = document.createElement('div');
    authorDesc.className = 'author-description';
    authorDesc.innerHTML = `
        <h2>About the Author</h2>
        <p>
        Ewandro Rodrigues Silva is a software developer that loves creating efficient and user-friendly applications.
        </p>
        <p>
        With a passion for clean code and best practices, Ewandro has contributed to various projects, focusing on enhancing user experience and performance.
        </p>
    `;
    backgroundBlur.appendChild(authorDesc);

    // Cria o botão de fechar
    const closeAuthorDesc = document.createElement('button');
    closeAuthorDesc.textContent = 'Close';
    closeAuthorDesc.className = 'close-button';
    backgroundBlur.appendChild(closeAuthorDesc);

    // Função para remover elementos
    const removeElements = () => {
        backgroundBlur.remove();
        document.removeEventListener('click', handleClickOutside);
    };

    closeAuthorDesc.addEventListener('click', removeElements);

    backgroundBlur.addEventListener('click', (event) => {
        if (!authorDesc.contains(event.target) && event.target !== closeAuthorDesc) {
            removeElements();
        }
    });

    const handleClickOutside = (event) => {
        if (!authorDesc.contains(event.target) && event.target !== closeAuthorDesc) {
            removeElements();
        }
    };

    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 0);
}

// Inserção dinâmica de CSS responsivo
function insertCss(cssContent) {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);
}

insertCss(`
    .background-blur {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .author-description {
        background-color: white;
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 600px;
        width: 90%;
        text-align: center;
        font-family: sans-serif;
        border-radius: 8px;
    }

    .author-description h2 {
        margin-top: 0;
    }

    .close-button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #222;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        z-index: 1001;
    }

    .close-button:hover {
        background-color: #444;
    }

    @media (max-width: 480px) {
        .author-description {
            padding: 15px;
            font-size: 0.9rem;
        }

        .close-button {
            font-size: 0.9rem;
            padding: 8px 16px;
        }
    }
`);
