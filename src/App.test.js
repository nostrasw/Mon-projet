import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import Home from './routes/Home';
import useActive from './hooks/useActive';
import Login from './routes/Login';
import Chicago from "./Components/Chicago"

test('should render', () => {
    const element  =  render(<Chicago />)
    const elementheader = element.getByLabelText("About Little Lemon");
    expect(elementheader).toBeInTheDocument()
 })
// // Tests that the form validation works for an invalid date
// it('should show an error message for an invalid date', () => {
//     const { getByLabelText, getByText } = render(<BookingForm />);
//     const dateInput = getByLabelText('Choose date');
//     babelConfig: { presets: ['@babel/preset-react'] }
//     fireEvent.change(dateInput, { target: { value: 'invalid date' } });
//     fireEvent.blur(dateInput);
//     const errorMessage = getByText('Enter a valid date');
//     expect(errorMessage).toBeInTheDocument();
// });
// // Tests that the form validation works for an invalid number of guests
// it('should show an error message for an invalid number of guests', () => {
//     const { getByLabelText, getByText } = render(<BookingForm />);
//     babelConfig: { presets: ['@babel/preset-react'] }
//     const guestInput = getByLabelText('Number of guests');
//     fireEvent.change(guestInput, { target: { value: '0' } });
//     fireEvent.blur(guestInput);
//     const errorMessage = getByText('Must be more than 1');
//     expect(errorMessage).toBeInTheDocument();
// });

