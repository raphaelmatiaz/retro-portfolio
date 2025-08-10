import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-blue)' }}>
          Retro Portfolio
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
            <h2 className="text-xl font-semibold mb-3">Dark Card</h2>
            <p style={{ color: 'var(--color-gray-medium)' }}>This card uses custom black background with white text.</p>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-teal)', color: 'var(--color-white)' }}>
            <h2 className="text-xl font-semibold mb-3">Teal Card</h2>
            <p>This card demonstrates the custom teal color.</p>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-gray-light)', color: 'var(--color-black)' }}>
            <h2 className="text-xl font-semibold mb-3">Gray Card</h2>
            <p>Using custom gray-light background.</p>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-pink)', color: 'var(--color-white)' }}>
            <h2 className="text-xl font-semibold mb-3">Pink Card</h2>
            <p>This card shows the custom pink accent color.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 border-2 rounded-lg" style={{ borderColor: 'var(--color-blue)', color: 'var(--color-blue)' }}>
          <p>
            All colors are defined as CSS custom properties and can be used with CSS variables like 
            <code className="px-2 py-1 rounded mx-1" style={{ backgroundColor: 'var(--color-gray-medium)', color: 'var(--color-black)' }}>
              var(--color-teal)
            </code>
            or 
            <code className="px-2 py-1 rounded mx-1" style={{ backgroundColor: 'var(--color-gray-medium)', color: 'var(--color-black)' }}>
              var(--color-pink)
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
