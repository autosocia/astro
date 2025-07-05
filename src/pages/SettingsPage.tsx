import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  MapPin, 
  Clock,
  Save,
  X
} from 'lucide-react';
import { SavedPerson, UserBirthData } from '../types/astrology';
import { getSavedPersons, savePerson, deletePerson, updatePerson } from '../utils/userDataManager';

const SettingsPage = () => {
  const [savedPersons, setSavedPersons] = useState<SavedPerson[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPerson, setEditingPerson] = useState<SavedPerson | null>(null);
  const [formData, setFormData] = useState<UserBirthData>({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });

  useEffect(() => {
    loadSavedPersons();
  }, []);

  const loadSavedPersons = () => {
    const persons = getSavedPersons();
    setSavedPersons(persons);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPerson) {
      // Update existing person
      updatePerson(editingPerson.id, formData);
    } else {
      // Add new person
      savePerson(formData);
    }
    
    loadSavedPersons();
    resetForm();
  };

  const handleEdit = (person: SavedPerson) => {
    setEditingPerson(person);
    setFormData(person.birthData);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      deletePerson(id);
      loadSavedPersons();
    }
  };

  const resetForm = () => {
    setFormData({ name: '', dateOfBirth: '', timeOfBirth: '', placeOfBirth: '' });
    setEditingPerson(null);
    setShowForm(false);
  };

  const renderForm = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-semibold text-white">
          {editingPerson ? 'Edit Person' : 'Add New Person'}
        </h2>
        <button
          onClick={resetForm}
          className="text-white/60 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter full name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Time of Birth
            </label>
            <input
              type="time"
              value={formData.timeOfBirth}
              onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Place of Birth
          </label>
          <input
            type="text"
            value={formData.placeOfBirth}
            onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter city, state, country"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            <Save className="h-4 w-4" />
            <span>{editingPerson ? 'Update' : 'Save'} Person</span>
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderPersonsList = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-semibold text-white">Saved Persons</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-xl transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Person</span>
        </button>
      </div>

      {savedPersons.length === 0 ? (
        <div className="text-center py-12">
          <User className="h-16 w-16 text-white/40 mx-auto mb-4" />
          <p className="text-white/60 text-lg mb-4">No saved persons yet</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Add Your First Person
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPersons.map((person) => (
            <div
              key={person.id}
              className="bg-white/5 rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{person.name}</h3>
                    <p className="text-white/60 text-sm">{person.birthData.placeOfBirth}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(person)}
                    className="text-white/60 hover:text-blue-400 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(person.id)}
                    className="text-white/60 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-3 w-3" />
                  <span>{person.birthData.dateOfBirth}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{person.birthData.timeOfBirth}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>{person.birthData.placeOfBirth}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  Added on {new Date(person.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Manage Persons
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Add and manage birth details for family members and friends
          </p>
        </div>

        {showForm && renderForm()}
        {renderPersonsList()}
      </div>
    </div>
  );
};

export default SettingsPage;