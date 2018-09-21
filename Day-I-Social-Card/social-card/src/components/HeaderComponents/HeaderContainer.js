import React from 'react';
import './Header.css';
import { ImageThumbnail } from './ImageThumbnail';
import { HeaderContent } from './HeaderContent';

const HeaderContainer = (props) => {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;

// GETTING STARTED:


// When designing with components, start from your smaller div elements, and build up, so that you can simply use what’s being created to input into the larger ones.

// As an overview, we’ll be building HeaderTitle.js, then importing it into HeaderContainer.js, then importing into App.js - you’ll need to go back and build and style the remaining smaller elements.

// First, in HeaderTitle.js, create a const with a div that will contain the needed elements - an h1, and two p elements.

// const HeaderTitle = () => {
// 	return (
// 		<div>
// 			<h1>Lambda School</h1>
// 			<p>@LambdaSchool</p>
// 			<p>-26 Jan</p>
// 		</div>
// 	)
// };

// This component now contains the elements we see in our design file in the Header’s title. We can style those elements in the Header.css file.

// Next, we need to export this component. So underneath the component, write:

// export default HeaderTitle;

// Now our component is ready to export and be imported into HeaderContainer.js. Let’s open HeaderContainer.js.

// At the top, we need to import HeaderTitle, like so:

// import HeaderTitle from ‘./HeaderTitle’;

// Now we’ll write our HeaderTitle component. Remember, this is just a div that’s holding the elements already created in the HeaderTitle (the h1 and p’s).

// const HeaderContainer = () => {
// 	return (
// 		<HeaderTitle />
// 	)
// };

// Now we need to export this component as well, so that we can import it into App.js

// export default HeaderContainer;

// Now let’s open App.js and import our HeaderContainer (remember that it’s tucked away a few folders deep)

// import HeaderContainer from ‘./components/HeaderComponents/HeaderContainer';

// Let’s comment out what already exists because we don’t need it. Everything inside of the <div>’s in the return can be commented out. Instead, we’ll import our HeaderContainer by making the const look like this:

// const App = () => {
// 	return (
// 		<HeaderContainer />
// 	);
// };

// And we’ll export this as well, so that our port browser shows it in real time.

// export default App;

// You should see it now in the browser. You can begin styling and adding the remaining nested child elements using the other components files.