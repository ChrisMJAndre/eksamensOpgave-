# Banking Application

Jeg har valgt at bruge mig af Rest Client extension i Visual Studio Code.
Istedet for at bruge en anden applikation, fx postman. Rest Client tilader mig at ramme mine endpoints uden at gå ud af Visual Studio Code

## SSL

Denne Banking applikation indeholder også SSL encryption, kan ses ind i app.js

### How to RUN

Run "npm install" to download necessary dependencies

1. Open terminal and navigate to "BankingApp"
2. Run "./run.sh" in terminal
3. This command will start seaport, 2 servers, loadbalancer, and run the test file.

# Problems running

Hvis i ikke kan køre denne fil, så kan det være fordi i ikke har run/execute access.
På mac kan dette gøres ved at køre `sudo chmod 777 <fil_navn>`, og så kan i køre filen med ./<fil_navn> i terminalen.
