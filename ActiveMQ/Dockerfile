FROM rmohr/activemq:latest

ENV ACTIVEMQ_HOME /opt/activemq
ENV AGENT_VERSION=0.16.1
ENV AGENT_BASE=jmx_prometheus_javaagent
ENV AGENT=$AGENT_BASE-$AGENT_VERSION.jar
ENV AGENT_CONFIG=config.yaml
ENV AGENT_PORT=9404
ENV AGENT_OPTS="-javaagent:/$AGENT=$AGENT_PORT:/config.yaml"

ADD https://repo1.maven.org/maven2/io/prometheus/jmx/$AGENT_BASE/$AGENT_VERSION/$AGENT /
USER root
RUN chmod 0644 /$AGENT
COPY activemq/$AGENT_CONFIG /

USER activemq
WORKDIR $ACTIVEMQ_HOME
EXPOSE 61616 8161 9404

ENV ACTIVEMQ_OPTS_MEMORY="-Xms64M -Xmx1G"
ENV ACTIVEMQ_CONF=$ACTIVEMQ_HOME/conf
ENV ACTIVEMQ_OPTS="$AGENT_OPTS $ACTIVEMQ_OPTS_MEMORY -Djava.util.logging.config.file=logging.properties -Djava.security.auth.login.config=$ACTIVEMQ_CONF/login.config"

CMD ["/bin/sh", "-c", "bin/activemq console"]