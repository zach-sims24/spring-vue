package com.example.springvue.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {

    /*
    Steps to add data source:
    1) Added spring-boot-starter-data-jpa (database resources), spring-boot-starter-data-rest (REST resources), spring-boot-starter-hateoas (REST architecture resources),
    and mysql:mysql-connector-java (runtime connector for the mysql database driver) dependencies to the build.gradle file (refresh gradle project afterwards)
    2) Added datasource properties to the applications.properties file
    3) Created this class, DatabaseConfig.java, which instantiates configuration beans based on the active spring profile
    4) Created the models package and added a class which could represent our user model (User.java) and a class which could represent our address model (Address.java)
    5) Created the repositories package and added a repository interface for interacting with user models and added a repository interface for interacting with address models
     */

    // These spring beans will be instantiated when the spring.profiles.active is set to prd
    @Bean
    @Primary
    @Profile("prd")
    public DataSource productionDataSource() {
        return this.productionDataSourceProperties().initializeDataSourceBuilder().type(HikariDataSource.class).build();
    }

    @Bean
    @Primary
    @ConfigurationProperties("spring.datasource.prd")
    public DataSourceProperties productionDataSourceProperties() {
        return new DataSourceProperties();
    }

    // These spring beans will be instantiated when the spring.profiles.active is set to tst (running a local data source for now)
    @Bean
    @Profile("tst")
    public DataSource localDataSource() {
        return this.localDataSourceProperties().initializeDataSourceBuilder().type(HikariDataSource.class).build();
    }

    @Bean
    @ConfigurationProperties("spring.datasource.local")
    public DataSourceProperties localDataSourceProperties() {
        return new DataSourceProperties();
    }
}
