package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

var sleepCounter = prometheus.NewCounter(
	prometheus.CounterOpts{
		Name: "ping_request_count",
		Help: "No of request handled by Ping handler",
	},
)

var sleepDuration = prometheus.NewHistogramVec(prometheus.HistogramOpts{
	Name: "http_response_time_seconds",
	Help: "Duration of HTTP requests.",
}, []string{"path"})

func sleepHandler(w http.ResponseWriter, req *http.Request) {
	timer := prometheus.NewTimer(sleepDuration.WithLabelValues("/sleep"))
	defer timer.ObserveDuration()

	sleepTime := rand.Intn(10) + 1
	time.Sleep(time.Duration(sleepTime) * time.Second)

	sleepCounter.Inc()
	fmt.Fprintf(w, "Slept for %d seconds\n", sleepTime)
}

func rootHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Go sleep application")
}

func main() {
	prometheus.MustRegister(sleepCounter)
	prometheus.MustRegister(sleepDuration)

	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/sleep", sleepHandler)
	http.Handle("/metrics", promhttp.Handler())
	http.ListenAndServe(":8082", nil)

}
