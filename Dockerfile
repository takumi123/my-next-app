# ベースイメージとしてNode.jsの最新のLTSバージョンを使用
FROM node:lts-alpine

# AWS CLIのインストールに必要なツールをインストール
RUN apk add --no-cache \
    python3 \
    py3-pip \
    groff \
    less \
    bash

# 仮想環境を作成してアクティベート
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# pipをアップグレードしてAWS CLIをインストール
RUN pip3 install --no-cache-dir --upgrade pip && \
    pip3 install --no-cache-dir awscli

# 作業ディレクトリを作成
WORKDIR /app

# vs codeアクセス用
RUN mkdir -p /root/.vscode-server && \
    chmod -R 777 /root/.vscode-server


# package.jsonとpackage-lock.jsonを先にコピーして依存関係をインストール
COPY my-next-app/package*.json ./

# Next.jsアプリケーションの依存関係をインストール
RUN npm install

# AWS Amplify CLIをグローバルにインストール
RUN npm install -g @aws-amplify/cli

# 残りのソースコードをコンテナにコピー
COPY my-next-app/ .


# ポート3000を開放
EXPOSE 3000

# アプリケーションを構築して開発サーバーを起動
CMD ["npm", "run", "dev"]