'use client';

const TestimonialSection = () => {
  return (
    <section className="py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Side - Title & Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="text-5xl font-bold text-gray-900">
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              What Our Partners Say About SBPL&apos;s Impact on Their Businesses.
            </p>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="mt-12 lg:mt-0 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <p className="text-xs text-gray-600 italic">“SBPL transformed our insurance operations with their automated underwriting and claims processing solutions. The efficiency boost helped us process 40% more policies in half the time!”</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">John M.</h3>
                  <p className="text-sm text-gray-500">CEO, US Insurance Firm</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <p className="text-xs text-gray-600 italic">“The SAS Poorna Arogya Program was a game-changer in providing healthcare access to thousands. SBPL’s IT infrastructure made it possible to manage claims seamlessly and provide quality care to underserved communities.”</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-800">Dr. Ramesh K.</h3>
                  <p className="text-sm text-gray-500">Director, Healthcare Institution</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <p className="text-xs text-gray-600 italic">“The predictive analytics model developed by SBPL helped us enhance customer segmentation and improve our lending strategy. The risk assessment model reduced loan defaults by 30%!”</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">CFO, Leading Banking Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
