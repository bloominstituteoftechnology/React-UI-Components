Setting Up the Calculator Project

Run yarn, like on the cards project


Think about how you’re going to create the reusable component layout on this project. Previously, we were given the component files in a way that guided the "ideal" layout of parent and child elements. 

Today, we need to create some of them. While we’re guided on the display and action button components (via the pre made js files), those are not the entirety of the components that will be needed.

The clear button and 0 button should use the same reusable component.

The numbers should be created with the same reusable component.

The action buttons should have the same reusable component.

The display will be its own single use component.



So, lets setup the number button reusable component for tonight. 



const NumberButton = (props) => {
	return (
	)
}
export default NumberButton;



Import this into the Apps.js file.



import NumberButton from ‘./components/ButtonComponents/NumberButton.js’


Lets create the main app component, defining the two props indicated in the Read Me file (buttonStyle and text). You can give them temporary values or ??? to fill in later


const App = () => {
	return (
		<NumberButton buttonStyle={‘number’} text={‘7’}/>
	)
}



Now lets fill in our NumberButton using the property values created in the Apps.js file



const NumberButton = (props) => {
	return (
		<button className={props.buttonStyle}>
			{props.text}
		</button>
	)
}


Now, let’s return to the Apps.js file and fill in however many of those number buttons we need, setup in the order they'll be seen in the calculator:



const App = () => {
	return (
		<NumberButton buttonStyle={‘number’} text={‘7’}/>
		<NumberButton buttonStyle={‘number’} text={‘8’}/>
		<NumberButton buttonStyle={‘number’} text={‘9’}/>
		<NumberButton buttonStyle={‘number’} text={‘4’}/>
		<NumberButton buttonStyle={‘number’} text={‘5’}/>
		<NumberButton buttonStyle={‘number’} text={‘6’}/>
		<NumberButton buttonStyle={‘number’} text={‘1’}/>
		<NumberButton buttonStyle={‘number’} text={‘2’}/>
		<NumberButton buttonStyle={‘number’} text={‘3’}/>

	)
}


THIS ISN’T HOW YOUR PROJECT SHOULD LOOK IN THE END. This is solely an example of how to set up a reusable component and utilize it when being imported. Apps.js would ideally import a different parent div that holds all of these number buttons.


Try drawing out the calculator to think ahead about your different divs and elements before starting, to properly setup the component files.

