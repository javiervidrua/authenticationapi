FROM postgres:latest

ENV POSTGRES_DB postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD changeme

# Setup the tables
COPY ./scheme/db_scheme_postgres.sql /docker-entrypoint-initdb.d/
# Setup the info
COPY ./setup_postgres.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

CMD ["docker-entrypoint.sh", "postgres"]