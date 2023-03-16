# validate
A javascript module to validate different types of input

## NPM
to install this module visit the npm page of [@spookyhub/validate](https://www.npmjs.com/package/@spookyhub/validate)

## Functions
- `validate.emailList(input)` to validate a list of emails seperated by a coma ,
  - `email@domain.com` true
  - `email@domain.com,` true
  - `email@domain.com, ` true
  - `email@domain.com, email@domain.com, email@domain.com, ` true
  - `email@domain.com ` false
  - `email@domain.com. email@domain.com.,` false
  
- `validate.email(input)` to validate an email
  - `email@domain.com` true
  - `email.test.com` false
  
- `validate.password(input)` to check if a password is bigger than 8, contains at least 1 capital letter and 1 digit
  - `Password123` true
  - `password123` false
  - `pass` false
  - `Pass` false
  - `pass123123` false
