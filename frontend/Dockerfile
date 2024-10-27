# frontend/Dockerfile
FROM node:20

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app/next-intro

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Сборка приложения
RUN npm run build

# Указываем порт, который будет слушать приложение
EXPOSE 3000

# set user
RUN chown -R node /app/next-intro
USER node

# Запускаем Next.js сервер
CMD ["npm", "start"]
