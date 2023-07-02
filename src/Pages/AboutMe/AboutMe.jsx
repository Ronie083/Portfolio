import myImg from '../../assets/20230415_194618.jpg'

const AboutMe = () => {
    return (
        <div className="text-center max-w-6xl mx-auto my-14">
            <h1 className="text-4xl font-semibold">Know Me More</h1>
            <hr />
            <div className="grid grid-cols-4 gap-3 justify-items-center mt-10">
                <div className="text-left col-span-3">
                    <div className='flex items-center my-5'>
                        <img className='rounded-3xl w-72 mr-3' src={myImg} alt="" />
                        <h2 className="text-2xl font-extrabold">I&apos;m <br /> <span className="font-medium text-[#388087]">Muhammad Amzad Hosen</span>, <br /> an MERN <br /> Stack Web Developer</h2>
                    </div>
                    <p>
                        Junior MERN developer with a passion for developing excellent user experiences. <br /> Experienced with React, Redux, Node.js, and Express. Dedicated to <br /> delivering high-quality code and always looking for new challenges. Let&apos;s <br /> work together to create amazing digital experiences.
                    </p>
                </div>
                <div className="text-left">
                    <p><span className="font-bold">Name:</span> Muhammad Amzad Hosen</p>
                    <hr />
                    <p><span className="font-bold">Email:</span> ahmedronie6@gmail.com</p>
                    <hr />
                    <p><span className="font-bold">Age:</span> 23</p>
                    <hr />
                    <p><span className="font-bold">From:</span> Chittagong, Bangladesh</p>
                    <button className="btn btn-outline border-[#388087] rounded-3xl mt-5">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;