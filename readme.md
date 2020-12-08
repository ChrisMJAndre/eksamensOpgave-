### Database Dump

Et database dump af MongoDB kan findes i dump-database folder.
Folderen indeholder både et dump for Accounts og Clients.

Download MongoDB (database) og Compass (GUI til MongoDB)

1. I compass (MondoDB) kan i vælge "fill in field individually - connect
2. Opret en ny database, navn "Banking"
3. Opret 2 collections, "accounts" og "clients".
4. Det er vigtigt at databasen og dine collections heder det samme, så systemet kan oprette en forbindelse til din database.
5. Gå ind på en collection og add data, her kan du tilføje de inkluderede database dumps

### Database setup

Setup i koden:

1. navigere til db.js filen
2. URL'en burde være "mongodb://localhost/(database name)"
3. Hvis database og collections er sat op rigtigt skal url'en være - "mongodb://localhost/Banking"

### How to RUN

1. Åbne en terminal
2. cd til "rc", cd til "BankingApp"
3. Kør "npm install" i terminal for at download node_modules
4. kør one-click-run løsningen - "./run.sh"
5. Starter seaport, 2 servers, load balancer og kører test filen

# Problems running

Hvis i ikke kan køre denne fil, så kan det være fordi i ikke har run/execute access.
På mac kan dette gøres ved at køre `sudo chmod 777 <fil_navn>`, og så kan i køre filen med ./<fil_navn> i terminalen.
