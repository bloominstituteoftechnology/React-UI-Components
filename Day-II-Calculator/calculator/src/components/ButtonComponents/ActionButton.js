import React from 'react';
import './Button.css';

const ActionButtons = props => {
  return <button className={props.class}>{props.text}</button>;
};

export default ActionButtons;
// const ActionButtons = () => {
//   return (
//     <div className="actionButtons">
//       <DivideButton />
//       <MultiplyButton />
//       <SubtractButton />
//       <AddButton />
//       <EqualsButton />
//     </div>
//   );
// };
//
// const DivideButton = () => {
//   return (
//     <div className="aButtons divide" data-act="/">
//       /
//     </div>
//   );
// };
//
// const MultiplyButton = () => {
//   return (
//     <div className="aButtons multiply" data-act="*">
//       x
//     </div>
//   );
// };
//
// const SubtractButton = () => {
//   return (
//     <div className="aButtons subtract" data-act="-">
//       -
//     </div>
//   );
// };
//
// const AddButton = () => {
//   return (
//     <div className="aButtons add" data-act="+">
//       +
//     </div>
//   );
// };
//
// const EqualsButton = () => {
//   return (
//     <div className="aButtons equals" data-act="=">
//       =
//     </div>
//   );
// };
//
