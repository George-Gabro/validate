# validate
A javascript module to validate different types of input

## NPM
to install this module visit the npm page of [@spookyhub/validate](https://www.npmjs.com/package/@spookyhub/validate)

## Functions
- `validate.emailList(input)` to validate a list of emails seperated by a coma ,
  - `email@domain.com` <span style="color:green">true</span>
  - `email@domain.com,` <span style="color:green">true</span>
  - `email@domain.com, ` <span style="color:green">true</span>
  - `email@domain.com, email@domain.com, email@domain.com, ` <span style="color:green">true</span>
  - `email@domain.com ` <span style="color:red">false</span>
  - `email@domain.com. email@domain.com.,` <span style="color:red">false</span>
  
- `validate.email(input)` to validate an email
  - `email@domain.com` <span style="color:green">true</span>
  - `email.test.com` <span style="color:red">false</span>
  
- `validate.password(input)` to check if a password is bigger than 8, contains at least 1 capital letter and 1 digit
  - `Password123` <span style="color:green">true</span>
  - `password123` <span style="color:red">false</span>
  - `pass` <span style="color:red">false</span>
  - `Pass` <span style="color:red">false</span>
  - `pass123123` <span style="color:red">false</span>
- `validate.username(input)` to validate a username, username can contain numbers, letters, points and "-"
  - `username` true
  - `username123` true
  - `username.123_` true
  - `username%*#@^!#*` false
- `validate.youtubeVideoUrl` to validate if a given url is a youtube video link
