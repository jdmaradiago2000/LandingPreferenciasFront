cd cobros_LandingPreferencias

dotnet restore

dotnet build -c Release /nodereuse:false /p:EnvironmentName=Development /p:DeployOnBuild=true /p:WebPublishMethod=Package

dotnet publish nginx.conf --output publish_output

dotnet test nginx.conf --logger "trx;LogFileName=testresults.trx" /p:CollectCoverage=true "/p:CoverletOutputFormat=\"cobertura,opencover\""