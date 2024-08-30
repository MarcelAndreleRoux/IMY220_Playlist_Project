import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Image1 from "../public/assets/images/album_covers/Bee.jpg";
// import Image2 from "../public/assets/images/album_covers/Chin.jpg";
// import Image3 from "../public/assets/images/album_covers/Coke.jpg";
// import Image4 from "../public/assets/images/album_covers/Milky.jpg";
// import Image5 from "../public/assets/images/album_covers/Blond.jpg";
// import Image6 from "../public/assets/images/album_covers/Blue.jpg";

import { HomePage } from "./pages/HomePage";
import { LibraryPage } from "./pages/LibraryPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SplashLogin } from "./components/SplashLogin";
import { SplashRegister } from "./components/SplashRegister";
import { SplashPage } from "./pages/SplashPage";
import PlaylistPage from "./pages/PlaylistPage";
import { Song } from "./components/Song";
import { ExplorePage } from "./pages/ExplorePage";
import { ProfileEdit } from "./components/ProfileEdit";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "test1", password: "Test1111@", email: "test1@gmail.com" },
        { username: "test2", password: "Test2222@", email: "test2@gmail.com" },
      ],
      isAuthenticated: false,
      currentUser: "test1",
      currentUserEmail: "test1@gmail.com",
      searchTerm: "",
      playlists: [
        {
          id: 1,
          name: "Chill Vibes",
          author: "DJ Cool",
          image: "something.png",
          songs: [
            { id: 1, name: "Song A" },
            { id: 2, name: "Song B" },
            { id: 3, name: "Song C" },
          ],
        },
        {
          id: 2,
          name: "Workout Mix",
          author: "Gym Buddy",
          image: "something.png",
          songs: [
            { id: 4, name: "Song D" },
            { id: 5, name: "Song E" },
            { id: 6, name: "Song F" },
          ],
        },
        {
          id: 3,
          name: "Study Beats",
          author: "Focus Master",
          image: "something.png",
          songs: [
            { id: 7, name: "Song G" },
            { id: 8, name: "Song H" },
            { id: 9, name: "Song I" },
          ],
        },
      ],
      ExplorePlaylists: [
        {
          id: 4,
          name: "Summer Hits",
          author: "DJ Sunshine",
          image: "something.png",
          songs: [
            { id: 10, name: "Song J" },
            { id: 11, name: "Song K" },
            { id: 12, name: "Song L" },
          ],
        },
        {
          id: 5,
          name: "Relaxing Piano",
          author: "Chill Keys",
          image: "something.png",
          songs: [
            { id: 13, name: "Song M" },
            { id: 14, name: "Song N" },
            { id: 15, name: "Song O" },
          ],
        },
        {
          id: 6,
          name: "Rock Classics",
          author: "Rockstar",
          image: "something.png",
          songs: [
            { id: 16, name: "Song P" },
            { id: 17, name: "Song Q" },
            { id: 18, name: "Song R" },
          ],
        },
      ],
    };

    this.setAuthenticatedUser = this.setAuthenticatedUser.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.onSaveProfile = this.onSaveProfile.bind(this);
  }

  setAuthenticatedUser(username, email) {
    this.setState({
      currentUser: username,
      currentUserEmail: email,
      isAuthenticated: true,
    });
  }

  onSaveProfile(updatedProfile) {
    this.setState({
      currentUser: updatedProfile.username,
      currentUserEmail: updatedProfile.email,
    });
  }

  addSongToPlaylist(playlistId, song) {
    this.setState((prevState) => {
      const updatedPlaylists = prevState.playlists.map((playlist) => {
        if (playlist.id === playlistId) {
          return {
            ...playlist,
            songs: [...playlist.songs, song],
          };
        }
        return playlist;
      });

      return { playlists: updatedPlaylists };
    });
  }

  handleSearch(searchTerm) {
    this.setState({ searchTerm });
  }

  addPlaylist(playlist) {
    this.setState((prevState) => ({
      playlists: [...prevState.playlists, playlist],
    }));
  }

  render() {
    const {
      users,
      isAuthenticated,
      currentUser,
      currentUserEmail,
      searchTerm,
      ExplorePlaylists,
      playlists,
    } = this.state;

    const router = createBrowserRouter([
      {
        path: "/",
        element: <SplashPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/home",
        element: (
          <HomePage
            username={currentUser}
            isAuthenticated={isAuthenticated}
            ExplorePlaylists={playlists}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/profile",
        element: (
          <ProfilePage
            username={currentUser}
            email={currentUserEmail}
            isAuthenticated={isAuthenticated}
            playlists={playlists}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/profile/edit",
        element: (
          <ProfileEdit
            username={currentUser}
            email={currentUserEmail}
            onSaveProfile={this.onSaveProfile}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/login",
        element: (
          <SplashLogin
            users={users}
            setAuthenticatedUser={this.setAuthenticatedUser}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/register",
        element: <SplashRegister />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/library",
        element: (
          <LibraryPage
            username={currentUser}
            playlists={playlists}
            addPlaylist={this.addPlaylist}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/explore",
        element: (
          <ExplorePage
            playlists={ExplorePlaylists}
            searchTerm={searchTerm}
            handleSearch={this.handleSearch}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/playlist/:playlistId",
        element: (
          <PlaylistPage
            playlists={playlists}
            addSongToPlaylist={this.addSongToPlaylist}
          />
        ),
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/song/:songId",
        element: <Song />,
        errorElement: <div>404 Not Found</div>,
      },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
