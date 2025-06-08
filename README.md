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
