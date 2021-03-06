FROM node:14-stretch

RUN mkdir -p /home/node/.vscode-server/extensions && \
    chown -R node /home/node/.vscode-server
USER node
