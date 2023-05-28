// 30-days-of-react-challenge: Day12: Forms

// Exercises: Level 1
// 1. What is the importance of form?
// Form allows users to input and submit the data directly in the components.

// 2. How many input types do you know?
/*
I know only few input types in forms such as text, number, email, password, checkbox, radio, submit but I've learned there are many, here it follows:

<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
*/

// 3. Mention at least four attributes of an input element
// Here are the 4 attributes of an input element
// type, placeholder, required, name

// 4. What is the importance of htmlFor?
// The htmlFor attribute is used in React to specify the id attribute for a label element. It allows you to associate a label with a specific input element using the for attribute in the label element.

// 5. Write an input type which is not given in the example if there is?
// <input type="time" />
// <input type="search" />
// <input type="reset" />
// <input type="url" />
// <input type="image" />
// <input type="range" />

// 6. What is a controlled input?
// A controlled input is an input element whose value is controlled by the state of a component.
// Or the value of the input is linked to a state variable, and any changes to the input value are reflected in the state, and vice versa.

// 7. What do you need to write a controlled input?
// We need to write controlled input to manage and synchronize the state of form inputs with the component's state.
// it is usually used in form submission, state management, validation and error handling.

// 8. What event type do you use to listen changes on an input field?
// We use onChange event type to listen changes in the input field.
// The onChange event is triggered whenever the value of an input field changes, such as when the user types into the input or selects a value from a dropdown.

// 9. What is the value of a checked checkbox?
// There is no value attribute specified for the checkboxes. Without a value attribute, the default behavior is that the checkbox's value is considered as 'on' when it is checked and no value is sent when it is unchecked.

// For example, if the "HTML" checkbox is checked, the value of this.state.html (assuming handleChange updates the component's state) would be 'on'. If it is unchecked, this.state.html would be undefined or false, depending on how you handle the state in the handleChange function.

// It's important to note that without explicitly setting a value attribute, the checkbox's value is not included in the form data when it is submitted. If you need to associate a specific value with the checkbox, you can set the value attribute to a desired value, and that value will be sent when the checkbox is checked and the form is submitted.

// 10. When do you use onChange, onBlur, onSubmit?
// We use onChange whenever the value of input changes, it triggers. It is useful to capturing user input and updating the values in real-time as the user interacts with the input.
// An onBlur triggers when an input loses focus. it triggers when the user clicks outside of the input or moves away from it.
// We use onSubmit when a user submits a form, it allows you to handle form validation.

// 11. What is the purpose of writing e.preventDefault() inside the submit handler method?
// To prevent the default form submission behavior.
// By default, when a form is submitted, the browser will attempt to refresh the page or navigate to a new page, causing a full page reload. However, in many cases, we want to handle the form submission programmatically using JavaScript, without triggering a page reload.
// Calling e.preventDefault() within the submit handler prevents the default form submission behavior from occurring. It stops the browser from performing the default action and allows us to handle the form submission.

// 12. How do you bind data in React? The first input field example is data binding in React.
// We can bind data in React through state/props and the value is used in the forms by binding in it.

// 13. What is validation?
// We can validate our forms when a user clicks on a submit button, it is used to check whether the data entered by the user meets certain criterias.
// By validating user input, you can ensure that the data entered into forms or other input fields is valid and meets specific requirements.

// 14. What is the event type you use to listen when an input changes?
// onChange attribute event type is used to listen when an input changes.
// In React, you can listen to the "change" event by attaching an event handler function to the "onChange" attribute of the input element. This event handler function will be called whenever the input value changes.

// 15. What are event types do you use to validate an input?
// In React, you can use different event types for input validation, such as "change" for validating after each input change, "blur" for validating when the input loses focus, and "submit" for validating before form submission. These events allow you to check the input value against specific criteria and provide feedback to the user.