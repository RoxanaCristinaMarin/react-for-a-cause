import { Parallax } from 'react-parallax';
import ImgThree from '../images/imgThree.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={ImgThree} strength={300}>
        <div className='content'>
            <span className='img-text'>Donate</span>
        </div>
    </Parallax>
);

export default ImageThree;