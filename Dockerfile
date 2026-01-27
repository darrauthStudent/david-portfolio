# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar solo dependencias de producción si es necesario
# (para SSR - Server Side Rendering)
COPY package*.json ./
RUN npm ci --production && npm cache clean --force

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist ./dist

# Exponer el puerto (ajusta según tu configuración)
EXPOSE 4321

# Comando para ejecutar la aplicación
# Para sitios estáticos, usa un servidor simple
CMD ["node", "./dist/server/entry.mjs"]
