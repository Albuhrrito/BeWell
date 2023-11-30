# BeWell: Wellness Collective

BeWell: Wellness Collective is a health and wellness tracking application designed to help users monitor and improve their daily habits. This project encompasses both a frontend and a backend component, providing features like user registration, meal and exercise logging, community engagement, and more.

## Features

- **User Registration and Authentication**: Secure signup and login system.
- **Health Tracking**: Users can log meals, water intake, and exercise activities.
- **Community Forum**: A platform for users to share experiences and tips.
- **Notifications**: Reminders and notifications for health activities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Please also check out the original [Documentation](Documentation.md)

### Prerequisites

What you need to install the software:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community) or access to a MongoDB database
- [Git](https://git-scm.com/downloads)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/bewell.git
   cd bewell
   ```

2. **Set up the backend:**
   Navigate to the backend directory and install dependencies:
   ```sh
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory and add the necessary environment variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   ```

   Start the backend server:
   ```sh
   npm start
   ```

3. **Set up the frontend:**
   In a new terminal, navigate to the frontend directory and install dependencies:
   ```sh
   cd ../frontend
   npm install
   ```

   Start the frontend development server:
   ```sh
   npm start
   ```

   Your frontend should now be running on `http://localhost:3000`.

## Built With

- [React](https://reactjs.org/) - The web framework used for the frontend
- [Node.js](https://nodejs.org/) - Backend runtime environment
- [Express](https://expressjs.com/) - Web application framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Database

## Contributing

Please read [Contributing](Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

Consider checking out the [[Requirements]] list to get a better understanding of how this software is intended to be built and used.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/albuhrrito/bewell/tags).

## Authors

- **Albert Youssef** - *Initial work* - [Albuhrrito](https://github.com/albuhrrito)

See also the list of [contributors](https://github.com/albuhrrito/bewell/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](License.md) file for details
