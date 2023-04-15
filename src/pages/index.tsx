// import Faq from '@/components/Faq'
// import HeroSection from '@/components/HeroSection'
// import HomeSwiper from '@/components/HomeSwiper'
// import HowSection from '@/components/HowSection'
// import ReadySection from '@/components/ReadySection'
// import SectionHeader from '@/components/SectionHeader'
// import WhoSection from '@/components/WhoSection'
// import WhySubSection from '@/components/WhySubSection'
import dynamic from 'next/dynamic'
import Head from 'next/head'
// const inter = Inter({ subsets: ['latin'] })
const HeroSection = dynamic(() => import('@/components/HeroSection'))
const SectionHeader = dynamic(() => import('@/components/SectionHeader'))
const HomeSwiper = dynamic(() => import('@/components/HomeSwiper'))
const HowSection = dynamic(() => import('@/components/HowSection'))
const ReadySection = dynamic(() => import('@/components/ReadySection'))
const WhoSection = dynamic(() => import('@/components/WhoSection'))
const WhySubSection = dynamic(() => import('@/components/WhySubSection'))
const Faq = dynamic(() => import('@/components/Faq'))

export default function Home() {
  return (
    <>
      <Head>
        <title>techvestors | Best Automation, CRM Solutions & Website Hosting in India </title>
        <meta name="description" content="Get premium app development, web development, and digital marketing services in India. We offer automation, CRM solutions, social media marketing, and website hosting solutions for businesses in India."/>
      </Head>
      <HeroSection />
      <div id="solutions" className='w-auto md:h-6 h-20'></div>
      <SectionHeader bgText={'what'} foreText={'we invest'} />
      <HomeSwiper />
      <SectionHeader bgText={'why'} foreText={'we invest'} />
      <WhySubSection />
      <SectionHeader bgText={'who'} foreText={'we invest'} />
      <WhoSection />
      <SectionHeader bgText={'how'} foreText={'we work'} />
      <HowSection />
      <ReadySection />
      <SectionHeader bgText={'faq'} foreText={'need help?'} />
      <Faq />
    </>
  )
}
