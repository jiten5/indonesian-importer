export default function CSSTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          🎨 Tailwind CSS Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Primary Colors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Testing blue and indigo shades
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Success State
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Testing green color variants
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Accent Colors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Testing purple and pink shades
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg">
            Primary Button
          </button>
          <button className="px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium shadow-md hover:shadow-lg">
            Secondary Button
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
            Outline Button
          </button>
        </div>

        {/* Typography */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Typography Test
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            This is a large paragraph to test text rendering. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
            This is a regular paragraph with base font size. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            This is small text for captions or footnotes.
          </p>
        </div>

        {/* Spacing & Layout */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Spacing & Layout
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded">Padding 4</div>
            <div className="p-6 bg-green-100 dark:bg-green-900/30 rounded">Padding 6</div>
            <div className="p-8 bg-purple-100 dark:bg-purple-900/30 rounded">Padding 8</div>
          </div>
        </div>

        {/* Status Message */}
        <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
          <p className="text-green-800 dark:text-green-200 font-medium">
            ✅ If you can see styled content, Tailwind CSS is working correctly!
          </p>
        </div>
      </div>
    </div>
  );
}

