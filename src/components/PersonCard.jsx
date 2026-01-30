export default function PersonCard({ name, description, image }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center" data-aos="fade-up">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
