docker run -d
    --name authentication_api_db_postgres
    -e POSTGRES_PASSWORD=
    -p 5432:5432
    -v ./db_scheme_postgres.sql:/docker-entrypoint-initdb.d/db_scheme_postgres.sql
    postgres