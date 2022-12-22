import { Parallax } from 'react-parallax';
import ImgOne from '../images/imgOne.jpg'

const ImageOne = () => (
    <div id='img-1'>
        <Parallax className='image1' bgImage={ImgOne} strength={300}>
        <div className='content1'>
            <span className='img-text1'>Believe | Build | Dream</span>
        </div>
        </Parallax>
    </div>
);

export default ImageOne;