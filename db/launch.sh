docker build . -t authentication_api_db_postgres

docker run -d --rm --name container_authentication_api_db_postgres -p 5432:5432 authentication_api_db_postgres