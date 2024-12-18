import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./components/shared/Sidebar";
import Feed from "./components/pages/Feed";


import CreatePost from "./components/pages/CreatePost";
// import UpdatePost from "./components/pages/UpdatePost";
import Navbar from "./components/shared/Navbar";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Setting";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
              <Toaster />
              <Routes>
                {/* Public routes */}
                <Route path="/login" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                {/* Protected routes */}
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Feed />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/create"
                  element={
                    <ProtectedRoute>
                      <CreatePost />
                    </ProtectedRoute>
                  }
                />
                {/* <Route
                  path="/update/:id"
                  element={
                    <ProtectedRoute>
                      <UpdatePost />
                    </ProtectedRoute>
                  }
                /> */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
