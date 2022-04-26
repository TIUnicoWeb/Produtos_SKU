# namedidaIntegracao

# Esse projeto foi criado para sincronizar e corrigir divergência de preços entre os produtos da loja magento (https://lojista.imaginariumnamedida.com.br/) e o banco de dados (LINX)

# This is model project to start a new service - below steps for after clone project

### Project setup - Hades - Clone hades repository

```
cd hades && git clone https://github.com/TIUnicoWeb/hades_052.git .
```

### Project change files configuration

```
change variables ambiente in .env in / and /frontend/.env and serviceConfig.json, serviceConfig-dev.json and package.json
```

### Project setup - Remove modules e install again in "/", "/frontend" and /hades

```
rm -rf node_modules && rm -rf package-lock.json && npm install
```

### Project start backend

```
node index.js
```

### Compiles and hot-reloads for development frontend

```
cd /frontend && npm run serve
```

### Compiles and minifies for production

```
npm run build
```
