create Burgers;
use Burgers;

CREATE TABLE `Burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(50) ,
  `devoured` Boolean,
  `date` TIMESTAMP  ,
  PRIMARY KEY (`id`)
);
