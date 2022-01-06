# Registration-portal API Routes

## Authentication :

#### ROUTE 1 : Registring a user | Doesn't require authentication

- Path : /api/auth/register
- Request Type : POST
- Body

```sh
{
  "name": "String",                   # min length = 3
  "email": "String",                  # should be an email
  "password": "String",               # min length = 6
  "phone" : "Integer",                # min length = 10
  "registrationnumber" : "String",    # length = 15
  "teamname": "String"                # min length = 2
}
```

- Return : Auth-Token will be returned

#### ROUTE 2 : Logging In a user | Doesn't require authentication

- Path : /api/auth/login
- Request Type : POST
- Body

```sh
{
  "email": "String",                  # should be an email
  "password": "String",               # min length = 1
}
```

- Return : Auth-Token will be returned

#### ROUTE 3 : Getting a user | Require's authentication - Auth-token in header

- Path : /api/auth/getuser
- Request Type : POST
- Return : User's detail will be returned

```sh
# Return Example
{
  "_id": "61d4acd03639af21929df1f0",
  "name": "Users Name",
  "email": "aw3423@srmist.edu.in",
  "registrationnumber": "RA2011026010023",
  "phone": 5748789765,
  "teamname": "HackTheBox",
  "__v": 0
}
```

## Team :

#### ROUTE 1 : Getting all the team members | Require's authentication - Auth-token in header

- Path : /api/team/getteam
- Request Type : POST
- Return : Team linked to the admin will be returned

```sh
# Return Example
[
  {
    "_id": "61d4acd03639af21929df1f2",
    "teamname": "HackTheBox",
    "user": "61d4acd03639af21929df1f0",
    "teammembers": [
      {
        "name": "Users Name",
        "registrationnumber": "RA2011026010023",
        "phone": 5748789765,
        "email": "aw3423@srmist.edu.in",
        "admin": true,
        "_id": "61d4acd03639af21929df1f5"
      },
      {
        "name": "User Name 1",
        "registrationnumber": "RA2011026010050",
        "phone": 5748789750,
        "email": "aw6450@srmist.edu.in",
        "admin": false,
        "_id": "61d4b82c6d9f6b51e7c2eefd"
      }
    ],
    "__v": 11
  }
]
```

#### ROUTE 2 : Adding a member | Require's authentication - Auth-token in header

- Path : /api/team/addmember
- Request Type : POST
- Body

```sh
{
  "name": "String",                   # min length = 3
  "registrationnumber" : "String",    # length = 15
  "email": "String",                  # should be an email
  "phone" : "Integer",                # min length = 10
}
```

- Return : Updated team will be returned

```sh
# Return Example
[
  {
    "_id": "61d4acd03639af21929df1f2",
    "teamname": "HackTheBox",
    "user": "61d4acd03639af21929df1f0",
    "teammembers": [
      {
        "name": "Users Name",
        "registrationnumber": "RA2011026010023",
        "phone": 5748789765,
        "email": "aw3423@srmist.edu.in",
        "admin": true,
        "_id": "61d4acd03639af21929df1f5"
      },
      {
        "name": "User Name 1",
        "registrationnumber": "RA2011026010050",
        "phone": 5748789750,
        "email": "aw6450@srmist.edu.in",
        "admin": false,
        "_id": "61d4b82c6d9f6b51e7c2eefd"
      }
    ],
    "__v": 11
  }
]
```

#### ROUTE 3 : Deleting a member | Require's authentication - Auth-token in header | MemberId in parameters

- Path : /api/team/deletemember/:id
- Request Type : DELETE
- Return : Updated team will be returned

```sh
# Return Example
[
  {
    "_id": "61d4acd03639af21929df1f2",
    "teamname": "HackTheBox",
    "user": "61d4acd03639af21929df1f0",
    "teammembers": [
      {
        "name": "Users Name",
        "registrationnumber": "RA2011026010023",
        "phone": 5748789765,
        "email": "aw3423@srmist.edu.in",
        "admin": true,
        "_id": "61d4acd03639af21929df1f5"
      }
    ],
    "__v": 11
  }
]
```

#### ROUTE 4 : Edit a member | Require's authentication - Auth-token in header | MemberId in parameters

- Path : /api/team/editmember/:id
- Request Type : PUT
- Body

```sh
{
  "name": "String",                   # min length = 3
  "registrationnumber" : "String",    # length = 15
  "email": "String",                  # should be an email
  "phone" : "Integer",                # min length = 10
}
```

- Return : Updated team will be returned

```sh
# Return Example
[
  {
    "_id": "61d4acd03639af21929df1f2",
    "teamname": "HackTheBox",
    "user": "61d4acd03639af21929df1f0",
    "teammembers": [
      {
        "name": "Users Name",
        "registrationnumber": "RA2011026010023",
        "phone": 5748789765,
        "email": "aw3423@srmist.edu.in",
        "admin": true,
        "_id": "61d4acd03639af21929df1f5"
      },
      {
        "name": "User Name updated",
        "registrationnumber": "RA2011026010080",
        "phone": 5748789780,
        "email": "aw6480@srmist.edu.in",
        "admin": false,
        "_id": "61d4b82c6d9f6b51e7c2eefd"
      }
    ],
    "__v": 11
  }
]
```
