
![[Pasted image 20231129125400.png]]
## Mermaid Code Block
```
sequenceDiagram

    actor User

    participant "User Interface" as UI

    participant "Backend Server" as Server

    participant "Database" as DB

    participant "External API" as API

  

    User->>+UI: Access App

    UI->>+Server: Request Login

    Server->>+DB: Validate Credentials

    DB--)Server: Credentials Valid

    Server--)UI: Login Successful

    UI--)User: Display Home Screen

    User->>+UI: Request Meal Logging

    UI->>+Server: Send Meal Data

    Server->>+DB: Store Meal Data

    DB--)Server: Data Stored

    Server->>+API: Request Nutritional Info

    API--)Server: Send Nutritional Info

    Server--)UI: Display Nutritional Info

    UI--)User: Show Meal Log

    User->>+UI: Request Community Forum

    UI->>+Server: Fetch Forum Data

    Server->>+DB: Retrieve Posts

    DB--)Server: Send Posts

    Server--)UI: Display Posts

    UI--)User: Show Forum

    User->>+UI: Log Out

    UI->>+Server: End Session

    Server->>+DB: Update Session Status

    DB--)Server: Session Ended

    Server--)UI: Confirm Logout

    UI--)User: Display Logout Message
```