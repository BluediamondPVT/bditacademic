import React from 'react'
import AboutBanner from '@/components/about/AboutBanner'
import WhoWeAre from '@/components/about/WhoWeAre'
import OurLegacy from '@/components/about/OurLegacy'
import Statistics from '@/components/about/Statistics'
import CoreValues from '@/components/about/CoreValues'
import ChairmanMessage from '@/components/about/ChairmanMessage'
import StrategicPartnerships from '@/components/about/StrategicPartnerships'
import MissionVision from '@/components/about/MissionVision'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutBanner />
      <WhoWeAre />
      <OurLegacy />
      <Statistics />
      <MissionVision />
      <CoreValues />
      <ChairmanMessage />
      <StrategicPartnerships />
    </div>
  )
}

export default page
