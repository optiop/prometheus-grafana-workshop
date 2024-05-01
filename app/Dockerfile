FROM openjdk:21-oracle
ADD target/app-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["java","-jar","app.jar"]