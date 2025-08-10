const features = [
    {
      title: '📍 Geo Check-In',
      desc: 'Verify location/time with selfie + QR for proof.',
    },
    {
      title: '🤖 AI Impact Story',
      desc: 'Instant shareable story with photo, stats, caption.',
    },
    {
      title: '🏅 Dashboard + Badges',
      desc: 'Track your history & earn eco-titles.',
    },
  ];
  
  const Features = () => (
    <section id="features" className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Key Features</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-[#1e293b] p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-green-400 mb-2">{f.title}</h4>
            <p className="text-gray-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Features;
  