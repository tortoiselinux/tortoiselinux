# Dockerfile
FROM node:20.12.2

# Cria diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install

# Gera Prisma Client
RUN npx prisma generate

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando de inicialização (dev ou produção)
CMD ["npm", "run", "dev"]
