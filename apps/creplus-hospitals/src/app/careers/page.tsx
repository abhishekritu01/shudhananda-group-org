const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Careers at CurePlus
        </h1>
        <p className="text-lg text-gray-600">
          Join our mission to revolutionize healthcare across rural India. Be part of a passionate team dedicated to
          making a difference.
        </p>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">🚀 Coming Soon!</h2>
        <p className="text-xl text-gray-700">
          We&apos;re working on some exciting career opportunities. Check back soon to explore our job openings and become a part of our growing team!
        </p>
      </div>

      {/* CTA Section */}
      {/* <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Not finding your ideal role?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Don’t worry, we’re always looking for passionate people. Share your resume with us!
        </p>
        <Link href="/careers/submit-resume">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition">
            Submit Your Resume <FaRegSmile className="w-5 h-5" />
          </p>
        </Link>
        
      </div> */}
    </div>
  );
};

export default CareersPage;

