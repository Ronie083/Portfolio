

const Skills = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold">My Skills</h1>
            <hr />
            <div className="grid md:grid-cols-3 gap-5 justify-items-center mt-5 mb-14">
                <div className="flex items-center">
                    <h1 className="mr-5">HTML</h1>
                    <div className="radial-progress" style={{ "--value": "95", "--size": "5rem", "--thickness": "2px" }}>95%</div>
                </div>
                <div className="flex items-center">
                    <h1 className="mr-10">CSS</h1>
                    <div className="radial-progress" style={{ "--value": "85", "--size": "5rem", "--thickness": "2px" }}>85%</div>
                </div>
                <div className="flex items-center">
                    <h1>Tailwind CSS</h1>
                    <div className="radial-progress" style={{ "--value": "90", "--size": "5rem", "--thickness": "2px" }}>90%</div>
                </div>
                <div className="flex items-center">
                    <h1>Bootstrap</h1>
                    <div className="radial-progress" style={{ "--value": "85", "--size": "5rem", "--thickness": "2px" }}>85%</div>
                </div>
                <div className="flex items-center">
                    <h1>JavaScript</h1>
                    <div className="radial-progress" style={{ "--value": "70", "--size": "5rem", "--thickness": "2px" }}>70%</div>
                </div>
                <div className="flex items-center">
                    <h1>React.js</h1>
                    <div className="radial-progress" style={{ "--value": "65", "--size": "5rem", "--thickness": "2px" }}>65%</div>
                </div>
                <div className="flex items-center">
                    <h1>MongoDB</h1>
                    <div className="radial-progress" style={{ "--value": "60", "--size": "5rem", "--thickness": "2px" }}>60%</div>
                </div>
                <div className="flex items-center">
                    <h1>Node.js</h1>
                    <div className="radial-progress" style={{ "--value": "50", "--size": "5rem", "--thickness": "2px" }}>50%</div>
                </div>
                <div className="flex items-center">
                    <h1>Express.js</h1>
                    <div className="radial-progress" style={{ "--value": "55", "--size": "5rem", "--thickness": "2px" }}>55%</div>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;