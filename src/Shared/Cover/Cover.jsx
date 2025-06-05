import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitile }) => {
    return (
        <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={img}
            bgImageAlt="cover image"
            strength={300}
        >
            <div className="hero h-[700px]">
                {/* Semi-transparent overlay just once */}
                <div className="w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white space-y-6 px-52 py-20 bg-black bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl max-w-6xl">
                        <h1 className="mb-4 text-5xl font-extrabold uppercase">{title}</h1>
                        <p className="text-lg uppercasec">{subtitile}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
