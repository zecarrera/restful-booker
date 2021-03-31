Pre-conditions:
1 - Swagger file exists and doesn't contain syntax errors
2 - App is running
3 - Container running ZAP can connect to the app

Command to run


docker run --user=root --network="host" -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable:2.10.0 zap-api-scan.py \
   -t ./swagger.yaml -f openapi -r api-scan-report.html -I

Explaining each bit:
--network="host" Added to allow docker container running ZAP to access the app running locally in the host machine, without this it tries to access localhost of the ZAP container, therefore fails to connect.

