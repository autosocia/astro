import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import DashboardLayout from './components/DashboardLayout';

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
            <Route path="/onboarding" element={<OnboardingPage />} />

            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* Protected Feature Routes */}
            <Route path="/daily" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DailyPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* Life Predictions Route */}
            <Route path="/life-predictions" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <LifePredictionPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* New Protected Feature Routes */}
            <Route path="/kundli-matching" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <KundliMatchingPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/ai-astrologer" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AIAstrologerPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* Stub routes for other features */}
            <Route path="/transit" element={<ProtectedRoute><DashboardLayout><div className="flex items-center justify-center h-full"><div className="text-white text-center"><h1 className="text-2xl mb-4">Transit Report</h1><p>Coming soon...</p></div></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/lal-kitab" element={<ProtectedRoute><DashboardLayout><div className="flex items-center justify-center h-full"><div className="text-white text-center"><h1 className="text-2xl mb-4">Lal Kitab</h1><p>Coming soon...</p></div></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/mangal-dosha" element={<ProtectedRoute><DashboardLayout><div className="flex items-center justify-center h-full"><div className="text-white text-center"><h1 className="text-2xl mb-4">Mangal Dosha</h1><p>Coming soon...</p></div></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/numerology" element={<ProtectedRoute><DashboardLayout><div className="flex items-center justify-center h-full"><div className="text-white text-center"><h1 className="text-2xl mb-4">Numerology</h1><p>Coming soon...</p></div></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/nakshatra" element={<ProtectedRoute><DashboardLayout><div className="flex items-center justify-center h-full"><div className="text-white text-center"><h1 className="text-2xl mb-4">Nakshatra</h1><p>Coming soon...</p></div></div></DashboardLayout></ProtectedRoute>} />

            {/* Public Routes with Navbar/Footer */}
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
                <Navbar />
                <HomePage />
                <Footer />
              </div>
            } />

            {/* Legacy Routes (keeping for compatibility) - Now public with Navbar/Footer */}
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
                <DashboardLayout>
                  <SettingsPage />
                </DashboardLayout>
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