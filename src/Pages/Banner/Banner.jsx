

const Banner = () => {

    const handleDownloadResume = () => {
        const resumeUrl = '/Muhammad Amzad Hosen - Resume - MERN dev.pdf';
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'Muhammad Amzad Hosen - Resume - MERN dev.pdf';
        anchor.click();
      };
      
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/smmD8Cn/LMC-29112022-164502-IPhone-12-R4-YUV-PORTRAIT.jpg)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl md:text-3xl uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Hi, I am Amzad.</h1>
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Titillium Web, sans-serif' }}>An MERN Stack Web Developer</h1>
                    <div className="md:text-left md:ml-52 max-w-xs text-[#f6f6f2]">
                        <p className="mb-5 md:text-2xl">Crafting Seamless Web Solutions. <br /> Ignite <br /> Your Web Projects with me.</p>
                    </div>
                    <button className="btn btn-primary mr-5" onClick={handleDownloadResume}>Resume</button>
                    <button className="btn btn-primary">Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;