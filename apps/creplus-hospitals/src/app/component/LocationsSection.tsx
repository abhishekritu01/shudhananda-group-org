import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationsSection = () => (
  <section className="py-20 bg-purple-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-purple-800 mb-10">
        Our Locations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          'Mysuru',
          'Kushalnagar',
          'Chamarajanagara',
          'Mandya',
          'Hassan',
          'Bengaluru',
          'Mangaluru',
          'Udupi',
        ].map((location) => (
          <div
            key={location}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <FaMapMarkerAlt className="text-purple-800 text-4xl mb-4 mx-auto" />
            <p className="font-semibold text-lg text-gray-800">{location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
