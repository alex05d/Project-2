
CREATE TABLE user
(
    user_id INT
    AUTO_INCREMENT NOT NULL,
    email VARCHAR
    (50) NOT NULL,
    password VARCHAR
    (15) NOT NULL,
    PRIMARY KEY
    (user_id)
);
    CREATE TABLE owners
    (
        owner_id INT
        AUTO_INCREMENT NOT NULL,
    first_name VARCHAR
        (30) NOT NULL,
    last_name VARCHAR
        (30) NOT NULL,
    email VARCHAR
        (50) NOT NULL,
    phone_num VARCHAR
        (15) NOT NULL,
    PRIMARY KEY
        (owner_id)
);

        CREATE TABLE pets
        (
            pets_id INT
            AUTO_INCREMENT NOT NULL,
    owner_id INT NOT NULL,
    pets_name VARCHAR
            (30) NOT NULL,
    pet_type VARCHAR
            (30) NOT NULL,
    pet_weight INT NOT NULL,
    pet_birthday VARCHAR
            (30) NOT NULL,
    pet_gender VARCHAR
            (30) NOT NULL,
    pet_info VARCHAR
            (500) NOT NULL,
    PRIMARY KEY
            (pets_id),
    FOREIGN KEY
            (owner_id) REFERENCES owners
            (owner_id) ON
            DELETE CASCADE
);

            CREATE TABLE pet_feeding
            (
                feeding_id INT
                AUTO_INCREMENT NOT NULL,
    pet_id INT NOT NULL,
    pet_food VARCHAR
                (30) NOT NULL,
    food_amount	VARCHAR
                (30) NOT NULL,
    morining_feeding TIME,
    afternoon_feeding TIME,
    night_feeding TIME,
    PRIMARY KEY
                (feeding_id),
    FOREIGN KEY
                (pets_id) REFERENCES pets
                (pets_id)
);

                CREATE TABLE pet_vaccinations
                (
                    vac_id INT
                    AUTO_INCREMENT NOT NULL,
    pet_id INT NOT NULL,
    vac_name VARCHAR
                    (30) NOT NULL,
    vac_status BOOLEAN DEFAULT false,
    vac_due_date TIME,
    PRIMARY KEY
                    (vac_id),
    FOREIGN KEY
                    (pets_id) REFERENCES pets
                    (pets_id)
);

                    CREATE TABLE medication
                    (
                        med_id INT
                        AUTO_INCREMENT NOT NULL,
    pet_id INT NOT NULL,
    needs_meds BOOLEAN DEFAULT false,
    medication_name VARCHAR
                        (40),
    medication_time VARCHAR
                        (40),
    dosage VARCHAR
                        (40),
    PRIMARY KEY
                        (med_id),
    FOREIGN KEY
                        (pets_id) REFERENCES pets
                        (pets_id) ON
                        DELETE CASCADE
);

                        CREATE TABLE appointments
                        (
                            appt_id INT
                            AUTO_INCREMENT NOT NULL,
    pet_id INT NOT NULL,
    vet_name VARCHAR
                            (40) NOT NULL,
    vet_address VARCHAR
                            (40) NOT NULL,
    appt DATETIME,
    PRIMARY KEY
                            (appt_id),
    FOREIGN KEY
                            (pets_id) REFERENCES pets
                            (pets_id)
);

                            CREATE TABLE special_instructions
                            (
                                instruction_id INT
                                AUTO_INCREMENT NOT NULL,
    pet_id INT NOT NULL,
    instruction BOOLEAN DEFAULT false,
    info VARCHAR
                                (500) NOT NULL,
    PRIMARY KEY
                                (instruction_id),
    FOREIGN KEY

                                (pets_id) REFERENCES pets
                                (pets_id)
);

