use dt;

CREATE TABLE IF NOT EXISTS user (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  google_id VARCHAR(255) NOT NULL,
  `role` VARCHAR(64) NOT NULL DEFAULT 'customer'
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS store (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  open_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  closed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS product (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  store_id INT,
  `name` VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  thumbnail_src VARCHAR(255),
  `description` VARCHAR(255) DEFAULT NULL,
  FOREIGN KEY(store_id) REFERENCES store(id) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS cart (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  is_paid TINYINT NOT NULL DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS cart_product (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  cart_id BIGINT,
  product_id BIGINT,
  quantity INT DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY(cart_id) REFERENCES cart(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `order` (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  cart_id BIGINT,
  ordered_at TIMESTAMP NOT NULL DEFAULT NOW(),
  received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_received TINYINT NOT NULL DEFAULT 0,
  FOREIGN KEY(cart_id) REFERENCES cart(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS review (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  rate INT NOT NULL DEFAULT 0,
  content text NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
