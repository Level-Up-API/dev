Installation du projet:

Entrer dans le dossier du projet et lancez la commande:

npm install

<u>pour lancer le projet:</u>

npm start

npm start remplace la commande se trouvant dans les "scripts" dans le package.json:

"nodemon ./bin/www" 

<a href="http://localhost:3000/">L'app tourne sur le port 3000</a>
<br>
<br>
Express App:

https://expressjs.com/fr/starter/generator.html

JOI:

https://hapi.dev/module/joi/

Sequelize:

https://sequelize.org/

Sequelize version 5

https://sequelize.org/v5/ https://sequelize.org/v5/manual/getting-started.html


Commandes Sequelize:

Sequelize CLI [Node: 10.15.0, CLI: 5.5.0, ORM: 5.11.0]

npx sequelize [command] 

Commands: <br> 
  $ sequelize db:migrate                        Run pending migrations <br>   
  $ sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps  <br>   
  $ sequelize db:migrate:status                 List the status of all migrations <br>   
  $ sequelize db:migrate:undo                   Reverts a migration <br>   
  $ sequelize db:migrate:undo:all               Revert all migrations ran <br>   
  $ sequelize db:seed                           Run specified seeder <br>   
  $ sequelize db:seed:undo                      Deletes data from the database <br>   
  $ sequelize db:seed:all                       Run every seeder <br>   
  $ sequelize db:seed:undo:all                  Deletes data from the database <br>   
  $ sequelize db:create                         Create database specified by configuration <br>   
  $ sequelize db:drop                           Drop database specified by configuration <br>   
  $ sequelize init                              Initializes project <br>   
  $ sequelize init:config                       Initializes configuration <br>   
  $ sequelize init:migrations                   Initializes migrations <br>   
  $ sequelize init:models                       Initializes models <br>   
  $ sequelize init:seeders                      Initializes seeders <br>   
  $ sequelize migration:generate                Generates a new migration file       [aliases: migration:create] <br>   
  $ sequelize model:generate                    Generates a model and its migration  [aliases: model:create] <br>   
  $ sequelize seed:generate                     Generates a new seed file            [aliases: seed:create] <br>   

Options:
  --version  Show version number                                         [boolean]
  --help     Show help                                                   [boolean]
  
  
<a href="https://sequelize.org/master/manual/migrations.html">Doc migrations pour démarche de base avec les commandes sequelize</a>