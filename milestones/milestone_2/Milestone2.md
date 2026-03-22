# Milestone 2

- Author:  Chris Peterson
- Date:  March 19, 2026

## Introduction

- The idea for my milestone project is a database of sermons, tagged and organized for download. The sermons would be uploaded at the admin side while the general user can pick and download whatever they want.

## Requirements

- As a visitor, I want to browse sermons by category so that I can find topics that interest me.
- As a user, I want to search sermons by keyword, speaker, or scripture reference so that I can quickly locate relevant content.
- As a user, I want to filter sermons by date, length, or topic so that I can narrow down my choices.
- As a user, I want to download sermons from the website and listen to them offline, or stream them straight from the site.
- As an Admin, I want do upload sermons to the database and add tags that the user finds useful, such as the date, length, and topic.

## Images
### Sitemap

- Below is the Sitemap

![Site](../images/Site%20Diagram.png)

### Wireframes

- Below is the Wireframe for the basic portal of the site

![Wireframe](../images/Wireframe.png)

### Database Design

- The following diagram is the Entity Relationship Diagram (ERD) showing how the databse interacts internally

![ER](../images/Database%20Design%20ER.png)

### Class Diagrams

- The following diagrams are the Class diagrams showing how the site's databse interacts with the frontend

![UML](../images/Updated%20UML%20Diagrams.png)

## Mermaid Diagrams

### Entity-Relationship Diagram

```mermaid
erDiagram
    SERMON {
        int sermon_ID
        string title
        string description
        string speaker
        string _tags
        date date
        float duration
        string audio_URL
    }
    TAGS {
        int tag_ID
        string title
        string description
    }

    SERMON ||--o{ TAGS : "has"
```

### Class Diagram

```mermaid
classDiagram
    class Admin {
        - int admin_ID
        + string Username
        + string PasswordHash
        + manageSermon()
        + manageTag()
        + manageUser()
    }
    class User {
        - int user_ID
        + string Username
        + string PasswordHash
        + downloadSermon()
        + viewTags()
    }
    class Sermon {
        - int sermon_ID
        + string title
        + string description
        + string speaker
        + string _tags
        + datetime date
        + float duration
        + string audio_URL
    }
    class _tags {
        - int _tags_ID
        + string tag
        + string description
    }

    Admin "1" o-- "1..*" Sermon : manages
    Admin "1" o-- "1..*" _tags : manages
    User "1" o-- "0..*" Sermon : downloads
    User "1" o-- "0..*" _tags : views
    Sermon "0..*" o-- "1..*" _tags : tagged_with
```

### Sitemap Flow

```mermaid
graph TD
    Home[Home]
    Browse[Browse Sermons]
    Search[Search]
    Login[Login]
    Upload[Admin Upload]

    Home --> Browse
    Browse --> Search
    Browse --> Login
    Login -->|Admin?| Upload
    Upload --> Browse
``` 

### Wireframe Layout

```mermaid
graph TB
    SermonsSection["Sermons\n(Play)|Sermon Title|Direct Link\n..."]
    AdminSection["Admin\n[Upload]\nTitle\nDescription\nSpeaker\nTags\n[Post]"]

    SermonsSection --> AdminSection
```


## REST Endpoints

- The Endpoints used in this will pull the tracks from the database and manipulate them when needed.

|Method|Endpoint|Description|
|--|--|--|
|GET|sermons|Retrieve a list of all sermons ...|
|GET|sermons/:id|Retrieve sermon ...|
|PUT|sermons/:id|Update sermon ...|
|DELETE|sermons/:id|Delete sermon ...|

## API Example API Requests

```json
  GET /sermons
  Response:
  [
    {
      "id": 01,
      "title": "Getting Started Right",
      "description": "",
      "speaker": "Richard Jordan",
      "date": "2021-05-02",
      "duration": "71.51",
      "audio_URL": "https://messages.shorewoodbiblechurch.org/WEBMedia/H/2021-05-02T12-13-04_2447904379.MP3"
    },
    {
      "id": 02,
      "title": "Why It Matters",
      "description": "",
      "speaker": "Richard Jordan",
      "date": "2021-05-09",
      "duration": "78.42",
      "audio_URL": "https://messages.shorewoodbiblechurch.org/WEBMedia/H/2021-05-09T12-14-20_2080650645.MP3"
    }
  ]
```

## Conclusion

- This is going to be a good way to learn how JavaScript and NodeJs work out. This milestone is also allowing me to lay out what I plan on working on soon.
