import Hero from '@/components/homepage/Hero';
import LibrarySection from '@/components/homepage/LibrarySection';

const HomePage = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
            <Hero />
            <LibrarySection />
        </div>
    );
};

export default HomePage;
