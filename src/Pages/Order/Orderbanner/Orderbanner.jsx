import orderimg from "../../../assets/shop/banner2.jpg";

const Orderbanner = () => {
  return (
    <div
      className="h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${orderimg})`,
      }}
    >
      {/* Overlay card */}
      <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-xl shadow-2xl text-white px-10 py-12 text-center max-w-3xl">
        <h1 className="text-5xl font-bold uppercase mb-4">Order Now</h1>
        <p className="text-lg uppercase">
          Choose your favorite meal and enjoy the taste of perfection!
        </p>
      </div>
    </div>
  );
};

export default Orderbanner;
