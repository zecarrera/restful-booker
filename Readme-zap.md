** Pre-conditions:
1 - Docker is installed
2 - Swagger file exists and doesn't contain syntax errors
3 - App is running
4 - Container running ZAP can connect to the app

** Command to run

*** Scan without html report
docker run --network=host -v $(pwd):/zap/wrk/:rw \
  --tty owasp/zap2docker-stable zap-api-scan.py \
  -t ./swagger.yaml -f openapi

 *Volume is needed since yaml file is a local file

*** Adding html report
docker run --user=root  --network=host -v $(pwd):/zap/wrk/:rw \
  --tty owasp/zap2docker-stable zap-api-scan.py \
  -t ./swagger.yaml -f openapi \
  -r api-scan-report.html

Explaining each bit:
--network="host" Added to allow docker container running ZAP to access the app running locally in the host machine, without this it tries to access localhost of the ZAP container, therefore fails to connect.