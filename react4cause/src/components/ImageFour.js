import { Parallax } from 'react-parallax';
import ImgFour from '../images/imgFour.jpg'

const ImageFour = () => (
    <Parallax className='image' bgImage={ImgFour} strength={300}>
        <div className='content'>
            <span className='img-text'>Contact</span>
        </div>
    </Parallax>
);

export default ImageFour;