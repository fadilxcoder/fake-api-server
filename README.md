# Notes

- RUN `php run` to populate with dummy data
- File should be name : `db.json`
- URL for API : https://my-json-server.typicode.com/fadilxcoder/fake-api-server
- `id: 1,` should be present in order to query specific data
- Can use `<URL>?_id=xxxxx` for queries
- Newman github action
- Command : `npm run start` - Start local JSON server



```
name: Newman Api tester
on:
  push:
    branches:
      - master
jobs:
  test-api:
    runs-on: ubuntu-latest
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # INstall Node on the runner
      - name: Install Node
        uses: actions/setup-node@v3
        with:
          node-version: "17.x"

      # Install the newman command line utility and also install the html extra reporter
      - name: Install newman
        run: |
          npm install -g newman
          npm install -g newman-reporter-htmlextra

      # Make directory to upload the test results
      - name: Make Directory for results
        run: mkdir -p test-results

      # Run the POSTMAN collection
      - name: Run POSTMAN collection
        run: |
          newman run fake-api-server.postman_collection.json -r htmlextra --reporter-htmlextra-export test-results/htmlreport.html --reporter-htmlextra-darkTheme

      # Upload the contents of Test Results directory to workspace
      - name: Output the run Details
        uses: actions/upload-artifact@v3
        with:
          name: newman-run-reports
          path: test-results
```