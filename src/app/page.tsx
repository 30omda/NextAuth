

export default function Home() {
  return (
    <>
      <header>
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
          <p className="text-lg text-gray-600">This is a simple Next.js application.</p>
          <a href="/about" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Learn More
          </a>
        </section>
      </header>
      <main className="p-8">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Easy to use</li>
            <li>Responsive design</li>
            <li>Built with Next.js and Tailwind CSS</li>
          </ul>
        </section>
      </main>
    </>
  );
}
