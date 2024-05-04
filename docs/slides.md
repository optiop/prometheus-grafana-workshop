## Node Exporter Visualisation


![Big picture](./assets/nodeexporter.drawio.svg)


----

### Step 1 - Grafana

Use this command to start Grafana in Docker:

```bash
docker run --name=grafana -p 3000:3000 grafana/grafana
```
<br /> 

Then checkout the following URL 👨‍💻

```
localhost:3000
```

----

### Step 2 - Prometheus

Run Prometheus in Docker:

```bash
docker run --name=prometheus -p 9090:9090 \
  quay.io/prometheus/prometheus
```

<br />

Check out the following URL 👨‍💻


```
localhost:9090
```

----

### Step 3 - Node Exporter

Run Node Exporter in Docker:

```bash
docker run --name=node-exporter -p 9100:9100 \
    prom/node-exporter
```
<br/>

```
localhost:9100
```

----

### Step 4 - Docker Compose

```yaml
version: '3.8'

services:
  node-exporter:
    image: prom/node-exporter
    ports:
      - 9100:9100

  prometheus:
    image: quay.io/prometheus/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus/:/etc/prometheus/

  grafana:
    image: grafana/grafana
    ports:
      - 3000:3000
```

```bash
docker-compose up
```