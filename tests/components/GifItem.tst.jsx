import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('test on <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('match with snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('show image with ALT and URL', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });


    test('Show title on the component', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

    
});