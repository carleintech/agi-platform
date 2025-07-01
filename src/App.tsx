import React from 'react';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">AGI</h1>
              <span className="ml-2 text-gray-600">Accès Global à la Justice</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option value="fr">Français</option>
                <option value="ht">Kreyòl</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur AGI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            "Ce n'est pas une faveur, c'est votre droit. AGI – Justice pour tous."
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Client Card */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Besoin d'aide juridique ?
              </h3>
              <p className="text-gray-600 mb-6">
                Trouvez un avocat qualifié pour vous aider avec votre cas.
              </p>
              <button className="btn-primary w-full">
                Trouver un Avocat
              </button>
            </div>

            {/* Lawyer Card */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vous êtes avocat ?
              </h3>
              <p className="text-gray-600 mb-6">
                Rejoignez notre réseau et aidez les citoyens haïtiens.
              </p>
              <button className="btn-secondary w-full">
                S'inscrire comme Avocat
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; 2024 AGI - Accès Global à la Justice. Tous droits réservés.</p>
            <p className="mt-2 text-gray-400">
              Fondé par Casseus Samuel Shadow & Erickharlein Pierre
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;