# Sermons API

A RESTful API for managing sermons database with capabilities to browse, search, and manage sermon content.

## Features

- Browse all sermons
- Search sermons by speaker, title, or tags
- Filter sermons by date range
- Create, update, and delete sermons (Admin)
- Manage sermon tags
- Download or stream sermons

## Project Structure

```
SermonsAPI/
├── src/
│   ├── sermons/
│   │   ├── sermons.model.ts       # Sermon interface
│   │   ├── sermons.controller.ts  # Request handlers
│   │   ├── sermons.dao.ts         # Data access layer
│   │   ├── sermons.queries.ts     # SQL queries
│   │   └── sermons.routes.ts      # Express routes
│   ├── tags/
│   │   ├── tags.model.ts
│   │   ├── tags.controller.ts
│   │   ├── tags.dao.ts
│   │   ├── tags.queries.ts
│   │   └── tags.routes.ts
│   ├── services/
│   │   └── mysql.connector.ts     # Database connection
│   ├── middleware/
│   │   └── logger.middleware.ts   # Request logging
│   └── app.ts                     # Express app setup
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Configure the `.env` file with your MySQL database settings:
```
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=root
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=sermons
```

## Running the API

### Development mode with auto-reload:
```bash
npm run start:watch
```

### Production mode:
```bash
npm start
```

The API will start on `http://localhost:5000`

## Database Setup

Create the MySQL database and tables:

```sql
CREATE DATABASE sermons;

CREATE TABLE sermons.sermons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    speaker VARCHAR(255) NOT NULL,
    tags VARCHAR(500),
    date DATE,
    duration FLOAT,
    audio_url VARCHAR(500)
);

CREATE TABLE sermons.tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT
);
```

## API Endpoints

### Sermons Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/sermons` | Get all sermons (or specific sermon by `?sermonId=id`) |
| GET | `/sermons/speaker/:speaker` | Get sermons by speaker name |
| GET | `/sermons/search/speaker/:search` | Search sermons by speaker (wildcard) |
| GET | `/sermons/search/title/:search` | Search sermons by title (wildcard) |
| GET | `/sermons/search/tag/:search` | Search sermons by tags (wildcard) |
| GET | `/sermons/search/date/:startDate/:endDate` | Get sermons within date range |
| POST | `/sermons` | Create a new sermon |
| PUT | `/sermons` | Update a sermon |
| DELETE | `/sermons/:sermonId` | Delete a sermon |

### Tags Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tags` | Get all tags (or specific tag by `?tagId=id`) |
| POST | `/tags` | Create a new tag |
| PUT | `/tags` | Update a tag |
| DELETE | `/tags/:tagId` | Delete a tag |

## API Request/Response Examples

### Get All Sermons
```
GET /sermons

Response:
[
  {
    "sermonId": 1,
    "title": "Getting Started Right",
    "description": "A sermon about starting your faith journey",
    "speaker": "Richard Jordan",
    "tags": "faith,beginning,growth",
    "date": "2021-05-02",
    "duration": 71.51,
    "audioUrl": "https://example.com/sermon1.mp3"
  },
  {
    "sermonId": 2,
    "title": "Why It Matters",
    "description": "Understanding the importance of faith",
    "speaker": "Richard Jordan",
    "tags": "faith,importance",
    "date": "2021-05-09",
    "duration": 78.42,
    "audioUrl": "https://example.com/sermon2.mp3"
  }
]
```

### Search Sermons by Speaker
```
GET /sermons/search/speaker/richard

Response:
[
  {
    "sermonId": 1,
    "title": "Getting Started Right",
    "speaker": "Richard Jordan",
    ...
  }
]
```

### Create a Sermon
```
POST /sermons
Content-Type: application/json

{
  "title": "New Sermon Title",
  "description": "Sermon description",
  "speaker": "Speaker Name",
  "tags": "tag1,tag2,tag3",
  "date": "2023-03-15",
  "duration": 45.30,
  "audioUrl": "https://example.com/sermon.mp3"
}

Response:
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 3,
  "serverStatus": 2,
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0
}
```

### Update a Sermon
```
PUT /sermons
Content-Type: application/json

{
  "sermonId": 1,
  "title": "Updated Title",
  "description": "Updated description",
  "speaker": "Speaker Name",
  "tags": "tag1,tag2",
  "date": "2023-03-15",
  "duration": 50.00,
  "audioUrl": "https://example.com/updated.mp3"
}
```

### Delete a Sermon
```
DELETE /sermons/1

Response:
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "serverStatus": 2,
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0
}
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MySQL** - Database
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Auto-reload for development
- **ts-node** - TypeScript execution

## Security

The API includes:
- CORS enabled for development
- Helmet for HTTP headers security
- Parameterized SQL queries to prevent SQL injection
- Environment variable configuration

## Author

Chris Peterson - Milestone 3 Project
