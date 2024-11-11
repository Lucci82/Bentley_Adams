import HomepageLayout from '@/components/landing-layout';
import ClientOpinion from '@/components/landing/home/client-opinion';
import DiscussProject from '@/components/landing/home/discuss-project';
import HomeEngineering from '@/components/landing/home/engineering';
import Footer from '@/components/landing/home/footer';
import Projects from '@/components/landing/home/projects';
import Services from '@/components/landing/home/services';
import React from 'react';

const page = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <HomepageLayout>
        <HomeEngineering />
        <Services />
        <Projects />
        <ClientOpinion />
        <DiscussProject />
        <Footer />
      </HomepageLayout>
    </div>
  );
};

export default page;
