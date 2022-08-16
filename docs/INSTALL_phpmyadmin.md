# Manual de Instação do phpmyadmin na VPS

OBS: Caso já tenha instalado o mysql, não se preocupe, ele será atualizado.

================================================

1. Fazer o update da VPS

```sudo apt update```

2. Fazer o upgrade da VPS

```sudo apt upgrade```

3. Instalar o mysql server

```sudo apt install mysql-server```

4. Para verificar a versão do mysql

```mysql --version```

5. Verificar se o mysql está rodando

```sudo systemctl status mysql```

6. Istalar o phpmyadmin

```sudo apt install phpmyadmin php-mbstring```

   6.1. Durante a instalação, escolha 'apache2' como web server

   6.2. Escolher 'Yes' para 'Configure database for phpmyadmin with dbconfig-common?'

   6.3. Definir a senha para o User phpmyadmin

7. Acessar a pasta do apache

```cd /etc/apache2/```

8. Editar o arquivo 'ports.conf', alterando o 'Listen 80' para 'Listen 81'

```sudo nano ports.conf```

9. Restart do apache

```sudo systemctl restart apache2```

   9.1. Verificar se o apache está rodando

   ```sudo systemctl status apache2```

10. Criar link para acessar o phpmyadmin

```sudo ln -s /usr/share/phpmyadmin /var/www/html```

11. Criar um novo usuário para o phpmyadmin

   11.1. Ainda no terminal, acesse o mysql:

   ```mysql -u root```

   11.2. Crie um novo usuário com senha para o phpmyadmin:

   ```CREATE USER 'novoUsuario'@'localhost' IDENTIFIED BY 'senha';```

   11.3. Para permitir todos os privilegios do BD ao novo usuário:

   ```GRANT ALL PRIVILEGES ON *.* TO 'novoUsuario'@'localhost' WITH GRANT OPTION;```

   11.4. Para garantir as mudanças, execute:

   ```FLUSH PRIVILEGES;```

   11.5. Digite:

   ```exit;```

12. Acessar o phpmyadmin

   ```http://IPdaVPS:81/phpmyadmin```

13. Para logar use o usuário criado no item 11.