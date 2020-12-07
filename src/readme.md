### Database Dump

Et database dump af MongoDB kan findes i dump-database folder.
Folderen indeholder både et dump for Accounts og Clients.

1. I compass (MondoDB) kan i vælge "fill in field individually - connect
2. Opret en ny database, navn "Banking"
3. Opret 2 collections, "accounts" og "clients".
4. Det er vigtigt at databasen og dine collections heder det samme, så systemet kan oprette en forbindelse til din database.
5. Gå ind på en collection og add data, her kan du tilføje mine database dumps

### Database setup

1. navigere til db.js filen
2. URL'en burde være "mongodb://localhost/<database name>"

### How to RUN

1. Open terminal and navigate to "BankingApp"
2. Run "npm install" to download necessary dependencies
3. Run "./run.sh" in terminal
4. This command will start seaport, 2 servers, loadbalancer, and run the test file.

# Problems running

Hvis i ikke kan køre denne fil, så kan det være fordi i ikke har run/execute access.
På mac kan dette gøres ved at køre `sudo chmod 777 <fil_navn>`, og så kan i køre filen med ./<fil_navn> i terminalen.
