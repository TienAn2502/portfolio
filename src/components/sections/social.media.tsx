import { FaFacebook } from 'react-icons/fa6';
interface IProps {
    facebook: string;
}
const SocialMedia = (props: IProps) => {
    const { facebook } = props;

    return (
        <div className='my-4 d-flex items-center gap-3'>
            <a
                href={facebook}
                target='_blank'
                className='highlight'
                title='Facebook Hỏi Dân IT'
            >
                <FaFacebook size={30} />
            </a>
        </div>
    );
};

export default SocialMedia;
