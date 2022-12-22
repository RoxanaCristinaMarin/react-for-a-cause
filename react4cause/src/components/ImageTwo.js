import { Parallax } from 'react-parallax';
import ImgTwo from '../images/imgTwo.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={ImgTwo} strength={300}>
        <div className='content'>
            <span className='img-text'>About Us</span>
        </div>
    </Parallax>
);

export default ImageTwo;