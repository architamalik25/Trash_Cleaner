const steps = [
    { title: '1. Sign Up', desc: 'Choose your cleanup location & profile.' },
    { title: '2. Pick an Event', desc: 'Select a drive that suits your schedule.' },
    { title: '3. Upload Proof', desc: 'Selfie + tools = verified eco contribution.' },
  ];
  
  const HowItWorks = () => (
    <section id="how" className="py-20 px-6 text-center bg-[#0f172a]">
      <h3 className="text-3xl font-bold mb-12">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx}>
            <h4 className="text-green-400 text-xl font-bold mb-2">{step.title}</h4>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HowItWorks;
  