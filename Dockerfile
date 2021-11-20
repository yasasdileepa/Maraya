FROM fusuf/whatsasena:latest

RUN git clone https://github.com/yasasdileepa/Maraya /root/Maraya
WORKDIR /root/Maraya/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
