# Setup Node Exporter Using Systemd

To install Node Exporter on a Linux server, you can use the following steps:
* [Setup Node Exporter](#setup-node-exporter)
* [Setup Prometheus](#setup-prometheus)
* [Setup Grafana](#setup-grafana)


## Setup Node Exporter

1. Download and extract the Node Exporter binary from the Prometheus website.

[https://github.com/prometheus/node_exporter/releases](https://github.com/prometheus/node_exporter/releases)

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
tar -xvf node_exporter-1.8.2.linux-amd64.tar.gz
sudo mv node_exporter-1.8.2.linux-amd64/node_exporter /usr/local/bin/
rm -rf node_exporter-1.8.2.linux-amd64.tar.gz node_exporter-1.8.2.linux-amd64
```

2. Create a service file for Node Exporter with your preferred text editor.

```bash
sudo nano /etc/systemd/system/node_exporter.service
```

Add the following content to the file:

```bash
[Unit]
Description=Node Exporter Service
After=network.target

[Service]
ExecStart=/usr/local/bin/node_exporter
WorkingDirectory=/usr/local/bin
StandardOutput=inherit
StandardError=inherit
Restart=on-faild
User=root

[Install]
WantedBy=multi-user.target
```

Reload the systemd daemon and start the Node Exporter service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable node_exporter.service
sudo systemctl start node_exporter.service
```

## Setup Prometheus

1. Download and extract the Prometheus binary from the Prometheus website.
```bash
wget https://github.com/prometheus/prometheus/releases/download/v2.28.1/prometheus-2.28.1.linux-amd64.tar.gz
tar xvf prometheus-2.28.1.linux-amd64.tar.gz
sudo mv prometheus-2.28.1.linux-amd64/prometheus /usr/local/bin/
sudo mv prometheus-2.28.1.linux-amd64/promtool /usr/local/bin/
```

2. Create a dedicated user for Prometheus.
```bash
sudo useradd --no-create-home --shell /bin/false prometheus
```

Create a direcoty for Prometheus configuration files and data:
```bash
sudo mkdir /etc/prometheus
sudo mkdir -p /var/lib/prometheus/data
sudo mv prometheus/prometheus.yaml /etc/prometheus/
```

Change the ownership of the configuration files and data directory to the Prometheus user:
  ```bash
  sudo chown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus
  sudo chmod -R 775 /etc/prometheus /var/lib/prometheus
  ```

3. Create a service file for Prometheus with your preferred text editor.

```bash
sudo nano /etc/systemd/system/prometheus.service
```

Add the following content to the file:

```bash
[Unit]
Description=Prometheus Service
After=network.target

[Service]
ExecStart=/usr/local/bin/prometheus \
  --config.file=/etc/prometheus/prometheus.yaml \
  --storage.tsdb.path=/var/lib/prometheus/data \
  --web.listen-address=:9090
User=prometheus
Restart=always

[Install]
WantedBy=multi-user.target
```

Reload the systemd daemon and start the Prometheus service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable prometheus.service
sudo systemctl start prometheus.service
sudo systemctl status prometheus.service
```