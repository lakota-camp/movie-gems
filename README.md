# 💎 MovieGems

## 🎬 Movie Watchlist App

<!-- ### [Live Demo](https://www.example.com) -->

Welcome to **MovieGems**! A interactive movie watch list web app built to streamline your movie selection process. You can search for movies, add them to your movie watch list, and mark movies as watched once you watch them!

## ⭐︎ Features

- **Search & Discover**: Powered by the OMDB API, this app allows you to search through an extensive database of movies. From classics and indie films, to the latest blockbusters.
- **Personal Watch list**: If you find a movie the intrigues you, add it to your watch list! Your movies are safely stored in MongoDB, ready to be viewed anytime.
- **Watched Movies**: Once you finish a movie, mark it as watched and it’ll move to a separate list, so you can keep track of your movie-watching goals.
- **Dynamic Error Handling**: Errors are handled gracefully, whether it’s a missing movie poster or a network error, the app keeps running smoothly.
- **CRUD Operations**: Create, Read, Update, and Delete—manage your watch list with ease. Add new movies, update their status to watched, or remove them entirely.

## 🛠️ Tech Stack

This app is built using the **MERN** stack, bringing together some of the most powerful web technologies:

- **MongoDB**: The database where your watch list lives.
- **Express.js**: Handles the server-side logic and routes.
- **React**: The frontend - Fast, responsive, and interactive.
- **Node.js**: The foundation of the server, running everything smoothly in JavaScript.

## ↗️ Getting Started

Follow these steps to get the app running on your local machine:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (You can use MongoDB Atlas for a cloud solution)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lakota-camp/movie-gems.git
   cd movie-watchlist-app
   ```
2. **cd server dependencies**:
   ```bash
   cd ../client
   npm install
   ```
3. **Install client dependencies**:
   ```bash
   cd ../client
   npm install
   ```
4. **Set up your environment variables**:

   ```bash
   OMDB_API_KEY=your-omdb-api-key
   MONGODB_URI=your-mongodb-uri
   ```

5. **Run the app**:

   Start the backend server:

   ```bash
   cd server
   npm start
   ```

   Start the frontend server:

   ```bash
   cd ../client
   npm start
   ```

6. Enjoy the app:
   Open your browser and go to http://localhost:3000.

7. **Enjoy the app**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## 🧩 Future Improvements

Here’s where the app could grow in the future:

- **User Authentication**: [Clerk](https://clerk.com/) integration - Allow users to create accounts and save personalized watch lists.
- **Movie Reviews**: Integrate a feature where users can rate and review movies.
- **AI-Powered Semantic Search**: Enable users to perform advanced searches using AI-driven semantic search capabilities. By leveraging vector embeddings, users can find movies that align closely with their interests and search intent, making the search experience more intuitive and accurate.
- **Advanced Analytics & User Dashboard**: Introduce a comprehensive user dashboard, similar to Spotify Wrapped, where users can explore detailed analytics of their movie-watching habits. The dashboard will provide insights into viewing trends, favorite genres, and personalized summaries of movie preferences. Additionally, AI-powered recommendations and predictive analytics will suggest future movies based on individual watching behavior and tastes, creating a personalized movie discovery experience.

- **Social Sharing**: Let users share their watch lists or favorite movies with friends.

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

### Summary:

- **Permissions**: You are free to use, modify, and distribute this project for both personal and commercial purposes, as long as you include the original copyright and license notice in any copies or substantial portions of the project.
- **Limitations**: The project is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the project or the use or other dealings in the project.

For more detailed legal language, refer to the full license text in the [LICENSE](LICENSE) file.
