const Post = () => (
    <div className="Post col-12 container" >
    {/* Hi from 'Post' */}
        <div className="Post row" >
            <div className="col-2">
                <figure className="figure">
                    <img src="https://ibin.co/3whrpKSBbZ81.png" className="figure-img img-fluid rounded" alt="Red Lambda Logo"></img>
                </figure>
            </div>
            <div className="col-10">
                <h3>Lambda School</h3><span className="twiteerLink">@LambdaSchool</span> <span className="date">26 jan</span>
                <p className="post-content">
                    Lambda School best career oportunities.
                    An up commig new brand of tech working force with a fresh and cutting edge skills!
                </p>
            </div>
        </div>
    </div>
);
const LinkedContent = () => (
    <div className="col-12">
        {/* Hi from 'LinkedContent' */}
        <div className="card">
            <img className="card-img-top" src="https://ibin.co/3wnC6SgIOJud.png" alt="Card image cap"></img>
            <div className="card-body">
                <h3>Get started with React</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
);

const SocialIcons = props => (
    <div className="col-2">
        <figure className="figure">
            <i className={props.icon}><span className="badge badge-secondary">{props.count}</span></i>
        </figure>
    </div>
)
SocialIcons.defaultProps = {
    count: ""
}

const SocialAndShare = () => (
    <div className="SocialAndShare col-12 container" >
        {/* Hi from 'SocialAndShare' */}
        <div className="row">
            <SocialIcons icon="far fa-comment" />
            <SocialIcons icon="fas fa-sync" count="6" />
            <SocialIcons icon="far fa-heart" count="4" />
            <SocialIcons icon="far fa-envelope-open" />
        </div>
    </div>
);

const SocialCard = () => (
    <div className="SocialCard container">
    {/* Hello from 'SocialCard' */}
        <div className="row">
            <Post />
        </div>
        <div className="row">
            <LinkedContent />
        </div>
        <div className="row">
            <SocialAndShare />
        </div>
    </div>
);

const App = () => {
    return (
      <div className="container" >
        <div className="row">
            <div className="col-4">
                <SocialCard />
            </div>
        </div>
      </div>
)};
  
ReactDOM.render(<App />, document.getElementById('social-card'));