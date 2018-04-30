const socData = [
    {
        logo: "",
        name: "Lambda School",
        handle: "@LambdaSchool",
        date: "26 jan",
        text: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
        well: {
            img: "https://ibin.co/3wnC6SgIOJud.png",
            header: "Get started with React",
            text: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
            url: "reactjs.org",
        },
    }
];

const CardLogo = () => {
    return <img className="img-fluid" src="https://ibin.co/3whrpKSBbZ81.png" alt="Logo" />;
};

const BodyHeader = () => {
    return (
        <div class="body-header">
            <h6>{socData[0].name}</h6>
            <span>{socData[0].handle}</span>
            <span>{socData[0].date}</span>
        </div>
    );
};

const Well = () => {
    return (
        <div>
            <img className="img-fluid rounded-top" src={socData[0].well.img} alt="Well Image" />
            <div className="rounded-bottom well-bottom">
                <h6>{socData[0].well.header}</h6>
                <p>{socData[0].well.text}</p>
                <p>{socData[0].well.url}</p>
            </div>
        </div>
    );
}

const CardBody = () => {
    return (
        <div>
            <BodyHeader />
            <p>{socData[0].text}</p>
            <Well />
        </div>
    );
}

const SocialCard = () => {
    return (
        <div className="container socialCard">
            <div className="row">
                <div className="col-2">
                    <CardLogo />
                </div>
                <div className="col-10">
                    <CardBody />
                </div>
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <h1>Test</h1>
            <SocialCard />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('target'));