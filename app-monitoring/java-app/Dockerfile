FROM maven:3.9.6-eclipse-temurin-21-alpine AS build

WORKDIR /app
ADD . .
RUN mvn package


FROM openjdk:21-oracle
WORKDIR /app
COPY --from=build /app/target/app-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["java","-jar","app.jar"]