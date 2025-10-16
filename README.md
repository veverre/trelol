# trelol
"Trello like" app

## Docker Build Setup

This is a pnpm monorepo. Before building Docker images locally, you need to prepare the workspace files:

```bash
./prepare-docker-build.sh
```

Then you can build and run with Docker Compose:

```bash
docker-compose build
docker-compose up
```

Or in development mode:

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build
```

**Note:** The `prepare-docker-build.sh` script is run automatically by the CI workflow. You only need to run it manually for local Docker builds.
