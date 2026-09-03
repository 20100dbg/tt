
### Install composer
```
sudo apt install composer
```

### Install PHPUnit
```
composer require --dev phpunit/phpunit
```

### Setup autoload
- Create phpunit.xml
- Set test directory
- Set bootstrap=vendor/autoload.php
- Run
```
composer dump-autoload
```

### Run tests
```
# Every tests in directory
php vendor/bin/phpunit tests/

# Every tests in file
php vendor/bin/phpunit tests/CartTest.php 

# Single test
php vendor/bin/phpunit tests/CartTest.php --filter testCorrectNetPriceIsReturned
```


### Misc

Installs symfony/var-dumper
```
composer require symfony/var-dumper
```
