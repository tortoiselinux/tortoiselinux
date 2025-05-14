# 🐢 Tortoise Web Site

Este é o site oficial do TortoiseLinux. Documentações, informações importantes e materiais colaborativos serão publicados aqui.

Pull requests são muito bem-vindos! Correções, sugestões e melhorias serão avaliadas com carinho.

---

## 🚧 Desenvolvimento

Para desenvolver ou testar as funcionalidades deste site, siga o protocolo abaixo cuidadosamente. Ele evitará dores de cabeça tentando entender toda a "mágica da programação web".

### 🔁 Clonando o repositório

```bash
git clone https://github.com/tortoiselinux/tortoiselinux.git
```

### 📆 Instalando as dependências

```bash
npm install
```

### ⚙️ Configuração do ambiente

Algumas configurações precisam ser feitas manualmente para que todas as funcionalidades funcionem corretamente:

1. Crie um OAuth App no GitHub:  
   👉 [https://github.com/settings/developers](https://github.com/settings/developers)

1. Copie o conteúdo de `.env.example` para um novo arquivo `.env.local`

```bash
cp .env.example .env.local
```

1. Preencha os campos exigidos no `.env.local`

---

## 🔐 Como obter as variáveis do `.env.local`

Acesse os detalhes do seu OAuth App no GitHub. Você deverá:

- Copiar o **Client ID**
- Criar um novo **Client Secret** e copiá-lo também
- Colar ambos no seu `.env.local`

Para gerar um `AUTH_SECRET`, execute:

```bash
npx auth secret
```

Cole o valor gerado no campo correspondente do `.env.local`.

---

## 🐳 Subindo o ambiente

Com tudo configurado, rode:

```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:3000` e você terá um ambiente de desenvolvimento funcional.
