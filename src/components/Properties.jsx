import { Link, useParams } from "react-router-dom";
export function Properties() {
  const properties = [
    {
      id: 1,
      name: "Luxury Apartment",
      location: "Mumbai",
      price: "₹50,00,000",
    },
    { id: 2, name: "Villa in Pune", location: "Pune", price: "₹80,00,000" },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Properties Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="p-4 shadow-lg bg-white rounded-lg">
            <h3 className="text-xl font-bold">{property.name}</h3>
            <p>{property.location}</p>
            <p className="text-green-600 font-bold">{property.price}</p>
            <Link to={`/property/${property.id}`} className="text-blue-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PropertyDetails() {
  const { id } = useParams();
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
      <div className="p-6 shadow-lg bg-white rounded-lg max-w-md">
        <h2 className="text-2xl font-bold">Property {id} Details</h2>
        <p>More details about the property will be displayed here.</p>
      </div>
    </div>
  );
}
