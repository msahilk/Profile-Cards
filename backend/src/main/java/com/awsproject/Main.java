package com.awsproject;

import com.awsproject.customer.Customer;
import com.awsproject.customer.CustomerRepository;
import com.awsproject.customer.Gender;
import com.github.javafaker.Faker;
import com.github.javafaker.Name;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import s3.S3Buckets;
import s3.S3Service;

import java.util.Random;

@SpringBootApplication(scanBasePackages = {"com.awsproject", "s3"})
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Bean
    CommandLineRunner runner(
            CustomerRepository customerRepository,
            PasswordEncoder passwordEncoder) {
        return args -> {
            createRandomCustomer(customerRepository, passwordEncoder);
            //testBucketUploadAndDownload(S3Service, s3Buckets);
        };
    }

    private static void testBucketUploadAndDownload(S3Service S3Service, S3Buckets s3Buckets) {
        S3Service.putObject(s3Buckets.getCustomer(),
                            "foo",
                            "Hello World".getBytes()
        );

        byte[] obj = S3Service.getObject("full-stack-project-one", "foo");

        System.out.println("awesome" + new String(obj));
    }

    private static void createRandomCustomer(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        var faker = new Faker();
        Random random = new Random();
        Name name = faker.name();
        String firstName = name.firstName();
        String lastName = name.lastName();
        int age = random.nextInt(16, 99);
        Gender gender = age % 2 == 0 ? Gender.MALE : Gender.FEMALE;
        String email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@awsproject.com";
        Customer customer = new Customer(
                firstName +  " " + lastName,
                email,
                passwordEncoder.encode("password"),
                age,
                gender);
        customerRepository.save(customer);
        System.out.println(email);
    }

}
