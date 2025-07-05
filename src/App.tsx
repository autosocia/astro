import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import OnboardingPage from './pages/auth/OnboardingPage';

// Main Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

// Feature Pages
import BirthChartPage from './pages/features/BirthChartPage';
import MatchHoroscopePage from './pages/features/MatchHoroscopePage';
import TalkPage from './pages/features/TalkPage';
import DailyPage from './pages/features/DailyPage';

// New Feature Pages
import LifePredictionPage from './pages/LifePredictionPage';
import KundliMatchingPage from './pages/features/KundliMatchingPage';
import AIAstrologerPage from './pages/features/AIAstrologerPage';

// Legacy Pages (keeping for compatibility)
import KundliPage from './pages/KundliPage';
import MatchmakingPage from './pages/MatchmakingPage';
import ChatbotPage from './pages/ChatbotPage';
import ConsultationPage from './pages/ConsultationPage';
import ShopPage from './pages/ShopPage';
import SettingsPage from './pages/SettingsPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/onboarding" element={
              <ProtectedRoute>
                <OnboardingPage />
              </ProtectedRoute>
            } />

            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                  <DashboardPage />
                </div>
              </ProtectedRoute>
            } />

            {/* Protected Feature Routes */}
            <Route path="/birth-chart" element={
              <ProtectedRoute>
                <BirthChartPage />
              </ProtectedRoute>
            } />
            <Route path="/match-horoscope" element={
              <ProtectedRoute>
                <MatchHoroscopePage />
              </ProtectedRoute>
            } />
            <Route path="/talk" element={
              <ProtectedRoute>
                <TalkPage />
              </ProtectedRoute>
            } />
            <Route path="/daily" element={
              <ProtectedRoute>
                <DailyPage />
              </ProtectedRoute>
            } />

            {/* Life Predictions Route */}
            <Route path="/life-predictions" element={<ProtectedRoute><LifePredictionPage /></ProtectedRoute>} />

            {/* New Protected Feature Routes */}
            <Route path="/kundli-matching" element={
              <ProtectedRoute>
                <KundliMatchingPage />
              </ProtectedRoute>
            } />
            <Route path="/ai-astrologer" element={
              <ProtectedRoute>
                <AIAstrologerPage />
              </ProtectedRoute>
            } />

            {/* Stub routes for other features */}
            <Route path="/transit" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Transit Report</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />
            <Route path="/gemstones" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Gemstones Report</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />
            <Route path="/lal-kitab" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Lal Kitab</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />
            <Route path="/mangal-dosha" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Mangal Dosha</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />
            <Route path="/numerology" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Numerology</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />
            <Route path="/nakshatra" element={<ProtectedRoute><div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"><div className="text-white text-center"><h1 className="text-2xl mb-4">Nakshatra</h1><p>Coming soon...</p></div></div></ProtectedRoute>} />

            {/* Public Routes with Navbar/Footer */}
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <HomePage />
                <Footer />
              </div>
            } />

            {/* Legacy Routes (keeping for compatibility) */}
            <Route path="/kundli" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <KundliPage />
                <Footer />
              </div>
            } />
            <Route path="/matchmaking" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <MatchmakingPage />
                <Footer />
              </div>
            } />
            <Route path="/chatbot" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <ChatbotPage />
                <Footer />
              </div>
            } />
            <Route path="/consultation" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <ConsultationPage />
                <Footer />
              </div>
            } />
            <Route path="/shop" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <ShopPage />
                <Footer />
              </div>
            } />

            {/* Settings Route */}
            <Route path="/settings" element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } />

            {/* Redirect to dashboard if logged in, otherwise to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;