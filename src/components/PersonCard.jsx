export default function PersonCard({ name, image }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow text-center" data-aos="fade-up">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover"
      />
      <h4 className="font-semibold text-sm mt-2 line-clamp-2">{name}</h4>
    </div>
  );
}