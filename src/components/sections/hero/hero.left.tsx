import Typewriter from 'typewriter-effect';
import SocialMedia from '@components/sections/social.media';
import { useTranslation } from 'react-i18next';
import './hero.scss';
import ResizeButton from '@components/sections/resize.button';
import { APP_DATA } from '@helpers/data';
import { MdFileDownload } from 'react-icons/md';
import { AiFillFire } from 'react-icons/ai';

const HeroLeft = ({ handleScroll }: { handleScroll: () => void }) => {
    const { t } = useTranslation();

    return (
        <div className='hero-left'>
            <h3>
                {t('heroSection.hello')}!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                {t('heroSection.introPrefix')}&nbsp;
                <strong className='brand-red'>{t('appHeader.brand')}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        'Software Developer',
                        'Freelancer',
                        'MERN Stack Developer',
                        'Open Source Contributor',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: 'brand-green',
                }}
            />
            <div className='mt-md-6 mt-3 mb-md-5 mb-2'>
                <SocialMedia facebook={APP_DATA.FACEBOOK_URL!} />
            </div>
            <div className='d-md-flex d-none gap-4'>
                <ResizeButton
                    btnText={t('heroSection.exp')}
                    btnIcons={<AiFillFire style={{ color: 'orange' }} />}
                    btnStyle={{
                        background: 'unset',
                        border: '1px solid var(--border-hero-right)',
                        color: 'var(--text-white-1)',
                    }}
                    scrollInto={handleScroll}
                />
                <ResizeButton
                    btnText={t('heroSection.cv')}
                    btnIcons={<MdFileDownload />}
                />
            </div>
        </div>
    );
};

export default HeroLeft;
