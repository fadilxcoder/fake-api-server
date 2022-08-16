# Notes

- RUN `php run` to populate with dummy data
- File should be name : `db.json`
- URL for API : https://my-json-server.typicode.com/fadilxcoder/fake-api-server
- JSON server fake api - Glitch URL : https://json-server-fake-api.glitch.me/
- `id: 1,` should be present in order to query specific data
- Can use `<URL>?_id=xxxxx` for queries
- Newman github action
- Command : `npm run start` - Start local JSON server

# Docs

- https://github.com/marketplace/actions/composer-php-actions (Use the Composer CLI in your Github Actions.)
- https://github.com/marketplace/actions/setup-php-environment (Setup PHP environment)
- https://crontab.guru/ (Cron)
- Cron `*/2 * * * *` (At 2 minutes interval) / `0 6,18 * * *` (At 12 hours interval 06H00 - 18H00) 

### Github Action

- `.github/workflows/newman.yml`
- `.github/workflows/cron.yml`