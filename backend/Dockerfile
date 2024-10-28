# backend/Dockerfile
FROM node:20

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app/next-intro/backend

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Сборка приложения
RUN npm run build

# Указываем порт, который будет слушать приложение
EXPOSE 3001

# Запускаем Nest.js сервер
CMD ["npm", "run", "start:prod"]
