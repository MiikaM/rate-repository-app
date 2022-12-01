import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../components/SignInForm';


describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { getByPlaceholderText, getByText, debug } = render(<SignInForm onSubmit={onSubmit} />);

            fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
            fireEvent.changeText(getByPlaceholderText('Password'), 'password');
            fireEvent.press(getByText('Sign In'));
            debug();

            // onSubmit.mock.calls[0][0] contains the first argument of the first call


            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password',
                });
                // expect the onSubmit function to have been called once and with a correct first argument
            });
        });
    });
});