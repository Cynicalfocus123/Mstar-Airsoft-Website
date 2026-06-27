import logoPath from '../assets/mstar-airsoft-logo.png';
import type { SiteContent } from '../types/siteContent';
import { cancellationRefundLanguageVersions } from './cancellationRefundContent';
import { countryRegions } from './countries';
import { equipmentLanguageVersions } from './equipmentContent';
import { privacyLanguageVersions } from './privacyThaiContent';
import { termsLanguageVersions } from './termsContent';
import { travelLanguageVersions } from './travelThaiContent';

export const siteContent: SiteContent = {
  identity: {
    name: 'Mstar Airsoft',
    logoPath,
    tagline: 'Competitive tactical airsoft events',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Ticket', href: '/ticket' },
    { label: 'Things to Know', href: '/things-to-know' },
    { label: 'Rules', href: '/rules-and-regulation' },
    { label: 'Gallery', href: '/gallery' },
  ],
  heroSlides: [
    {
      id: 'gold-rush',
      imagePath: '/banners/gold-rush.svg',
      posterPath: '/images/home-hero-poster.webp',
      videoMp4Path: '/videos/force-of-conquest-header-compress-video.mp4',
      eyebrow: 'Featured Tournament',
      title: 'Gold Rush Open',
      body: 'Squad-based tournament registration is open now for the next Mstar Airsoft operation.',
      cta: { label: 'Get Ticket Now', href: '/ticket', variant: 'primary' },
    },
  ],
  hero: {
    kicker: 'Tournament Operations',
    title: 'MSTAR AIRSOFT',
    subtitle:
      'Tactical airsoft tournaments and competitive events built for organized teams, clear rules, and mission-focused play.',
    videos: [
      {
        language: 'Thai Language',
        embedUrl: 'https://www.youtube.com/embed/VYv1pw_dM1Y?rel=0&modestbranding=1&playsinline=1',
        title: 'Thai Language Video',
      },
      {
        language: 'English Language',
        embedUrl: 'https://www.youtube.com/embed/c9EP32Ptv2Y?rel=0&modestbranding=1&playsinline=1',
        title: 'English Language Video',
      },
    ],
    buttons: [
      { label: 'View Events', href: '/events', variant: 'secondary' },
    ],
    stats: [
      { value: '5v5', label: 'Squad format' },
      { value: 'CQB', label: 'Scenario rounds' },
      { value: '2026', label: 'Season ready' },
    ],
  },
  about: {
    eyebrow: '',
    title: 'Experience the Largest Airsoft Festival in Southeast Asia - where adrenaline, entertainment, and adventure come together day and night.',
    body:
      "The Mstar Airsoft Tournament delivers an immersive battlefield experience set in Thailand's stunning tropical rainforest, complete with natural creeks and realistic combat environments that replicate real tactical scenarios. Beyond the battlefield, guests can enjoy the vibrant atmosphere of an international music festival featuring global food vendors, carnival attractions, live entertainment, and adventure activities for all ages. Step into a world of nonstop excitement, competition, and unforgettable experiences surrounded by the breathtaking beauty of Thailand.",
    highlights: [
      'LIVE BAND, EDM ZONE, INTERNATIONAL FOOD COURT, CARNIVAL',
      'ATV RIDE, JUNGLE TOUR',
      'FUNS & GAME, CAMPING, BBQ CONTEST',
    ],
    backgroundImagePath: '/images/about-background.webp',
    mobileBackgroundImagePath: '/images/about-background.webp',
  },
  ticketPage: {
    eyebrow: '',
    title: 'Ticket',
    description: '',
    registrationGuide: {
      title: 'How to Register as\nA Player or\nParticipant',
      subtitle: 'Follow these steps before arriving at the event.',
      backgroundImagePath: '/images/airsoft-register-bg.avif',
      steps: [
        {
          id: 'complete-registration',
          eyebrow: 'Step 1',
          title: 'Complete Your Registration',
          body: 'Fill in your personal information and click Buy Ticket Now to proceed.',
          highlight: 'Buy Ticket Now',
          iconLabel: 'Form',
        },
        {
          id: 'sign-waiver',
          eyebrow: 'Step 2',
          title: 'Sign the Waiver Form',
          body: 'Review and sign the Waiver, Terms & Conditions Form. You may also download the form, print it, and bring a signed copy to the event.',
          iconLabel: 'Sign',
        },
        {
          id: 'make-payment',
          eyebrow: 'Step 3',
          title: 'Make Payment',
          body: 'Complete your registration by submitting payment through the available payment methods.',
          iconLabel: 'Pay',
        },
        {
          id: 'receive-confirmation',
          eyebrow: 'Step 4',
          title: 'Receive Confirmation',
          body: 'Once your payment has been verified, a confirmation receipt will be sent to your registered email address.',
          iconLabel: 'Mail',
        },
        {
          id: 'bring-documents',
          eyebrow: 'Step 5',
          title: 'Bring Required Documents',
          body: 'Print your confirmation receipt and signed waiver form, and present them at the registration desk upon arrival at the event.',
          iconLabel: 'Docs',
        },
      ],
      formSections: [
        {
          id: 'registration-forms',
          title: 'Registration Forms',
          description: 'Choose the correct registration form below. Thai and English forms are available.',
          links: [
            {
              label: 'Thai Registration Form',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSco2e7dI8zymqGzfB1xcLm3jejRSn27WplT3FFmxPi7M0I_hg/viewform',
            },
            {
              label: 'English Registration Form',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSeFCydHWUcBifIjLaXED0OOsDmfprUmwt-_k5aHZ-RY1NN1lg/viewform?usp=send_form',
            },
          ],
        },
        {
          id: 'authorization-of-supervising-adult',
          title: 'Authorization of a Supervising Adult',
          description: 'Required for participants who need adult authorization. Please complete the correct Thai or English form before arrival.',
          links: [
            {
              label: 'Thai Authorization Form',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSco2e7dI8zymqGzfB1xcLm3jejRSn27WplT3FFmxPi7M0I_hg/viewform',
            },
            {
              label: 'English Authorization Form',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSdg-_10tmUYcqrOAjxjsqrSIfaahzm_zZ0j16lmmFCb1RiXIA/viewform',
            },
          ],
        },
      ],
    },
    packages: [
      {
        label: 'Pre Sale',
        price: 'EUR 120.00',
        originalPrice: '(Original Price EUR 160.00)',
        expiry: 'Expire November 20, 2026',
        details: ['3 Days / 2 Nights'],
        perks: ['Live Music', 'Food Court'],
        stripeBuyButtonId: 'buy_btn_1TiUFN5Kev5Ia2RiD8wrJaVz',
        stripePublishableKey: 'pk_live_51Ti9OB5Kev5Ia2RiP7lxGp51P9mFeLMplhAUXd1xjLxxNePuGp25jujSGlT6XTiHP2QxHjJLxCgG6n8tVNg6JQfI00wqscszxi',
      },
    ],
    addons: [
      {
        title: 'Camping Package',
        price: 'EUR 69',
        description: 'Includes pillow, blanket, mattress, and 2-person tent.',
        stripeBuyButtonId: 'buy_btn_1TiUMF5Kev5Ia2RiheGKvjgJ',
        stripePublishableKey: 'pk_live_51Ti9OB5Kev5Ia2RiP7lxGp51P9mFeLMplhAUXd1xjLxxNePuGp25jujSGlT6XTiHP2QxHjJLxCgG6n8tVNg6JQfI00wqscszxi',
      },
    ],
  },
  events: [
    {
      id: 'force-of-conquest',
      href: '/events/force-of-conquest',
      title: 'Force of Conquest',
      date: 'Jan 8-10, 2027',
      time: '09:00 AM - 05:30 PM',
      location: 'Saraburi, Thailand',
      entryFee: 'EUR 120 Pre Sale',
      teams: 'Alpha Coalition vs Bravo Unit',
      attendance: '2,000 players',
      status: 'REGISTRATION NOW OPEN!',
      summary: 'An intense, realistic large-scale airsoft combat experience set deep in the jungle.',
      overview:
        'Force of Conquest delivers immersive large-scale jungle warfare with natural cover, demanding terrain, coordinated objectives, and realistic airsoft combat built for organized squads.',
      imagePath: '/images/events/force-of-conquest-card.png',
      detail: {
        heroTitle: 'FORCE OF CONQUEST',
        heroDescription:
          'A large-scale tactical airsoft operation built for international players, teams, and serious milsim competitors.',
        heroCtas: [
          { label: 'Buy Ticket Now', href: '/ticket', variant: 'primary' },
        ],
        overviewTitle: 'Event Overview',
        missionTitle: 'Mission / Operation Brief',
        missionBody:
          'Players will move through jungle terrain, natural cover, and coordinated objective zones designed for organized squad communication, fair play, and sustained tactical decision-making.',
        detailRows: [
          { label: 'Date', value: 'January 8-10, 2027' },
          { label: 'Location', value: 'Saraburi, Thailand' },
          { label: 'Registration', value: 'Open' },
          { label: 'Format', value: 'Large-scale airsoft operation' },
          { label: 'Entry', value: 'Ticket required' },
          {
            label: 'Eligibility',
            value: '18 and older. 17 and younger need to fill out a waiver.',
            linkLabel: 'Click here',
            linkPath: '/ticket',
            linkHash: 'authorization-of-supervising-adult',
          },
          { label: 'Player type', value: 'International players and teams' },
        ],
        timeline: [],
        requirements: [
          'Valid ticket confirmation',
          'Signed waiver form',
          'Required identification or passport',
          'Required safety equipment',
          'Event rule compliance',
        ],
        factions: {
          eyebrow: 'Choose Your Factions',
          title: 'Choose Your Factions',
          description:
            'Choose your side before entering the three-day campaign. Each faction fights for control of the region through strategy, leadership, diplomacy, and combat.',
          items: [
            {
              name: 'Siam Frontier Coalition',
              imagePath: '/images/events/force-of-conquest/team-2.webp',
              description:
                'International stabilization forces fighting to defend, stabilize, and restore control across the Republic of Siam Frontier.',
            },
            {
              name: 'Golden Triangle Syndicate',
              imagePath: '/images/events/force-of-conquest/team-1.webp',
              description:
                'A powerful criminal syndicate operating throughout the Golden Triangle and fighting to control strategic territory, resources, and transportation routes.',
            },
          ],
        },
        eventInfo: {
          backgroundImagePath: '/images/events/force-of-conquest/event-info-banner.jpg',
          href: '/events/force-of-conquest/event-info',
          bannerText: 'See Event Info',
          ctaTitle: 'Ready for Force of Conquest?',
          ctaLabel: 'Buy Ticket Now',
          ctaHref: '/ticket',
          defaultLanguage: 'en',
          languages: [
            {
              code: 'en',
              label: 'English',
              htmlLang: 'en',
              pageTitle: 'Event Info',
              pageSubtitle: 'Force of Conquest 2027 - 3 Days • 2 Nights of Non-Stop Action, Adventure, and Immersion',
              sections: [
                {
                  id: 'event-introduction',
                  subtitle: "Asia's Largest Airsoft MilSim Experience",
                  paragraphs: [
                    'Force of Conquest 2027 is more than just an airsoft event - it is a fully immersive military simulation experience unlike anything else in Asia.',
                    'Set across more than 100 acres of stunning natural rainforest terrain in Thailand, this three-day, two-night adventure combines intense military operations, strategic gameplay, camping, entertainment, and community activities into one unforgettable event.',
                    'By purchasing a Force of Conquest Event Ticket, you secure your place in an epic battlefield where teamwork, strategy, endurance, and leadership will determine the fate of entire factions.',
                    'Beyond the battlefield, participants can enjoy live music performances, festival-style entertainment, BBQ competitions, carnival activities, adventure rides, camping, role-playing experiences, and social gatherings with fellow players from around the world.',
                  ],
                  imagePath: '/images/events/force-of-conquest/event-info-intro-gopro.webp',
                  imageAlt: 'Airsoft player wearing a helmet camera in jungle terrain',
                },
                {
                  id: 'military-simulation',
                  title: 'Experience Realistic Military Simulation',
                  paragraphs: [
                    'Prepare for one of the most challenging and immersive Airsoft MilSim experiences ever created. Developed by experienced airsoft professionals and military strategy consultants, Force of Conquest features dynamic mission-based gameplay inspired by modern military operations and historical guerrilla warfare scenarios.',
                    'Success will depend on your ability to work as a team, develop effective strategies, adapt to changing battlefield conditions, and execute missions under pressure.',
                  ],
                  bullets: [
                    'Counter-insurgency operations',
                    'Guerrilla warfare engagements',
                    'Leadership elimination missions',
                    'Prisoner-of-war rescue and escape operations',
                    'Territorial control and colonization',
                    'Drug cartel interdiction missions inspired by the Golden Triangle region',
                    'Drone reconnaissance and attack missions',
                    'Security stabilization and peacekeeping operations',
                  ],
                  imagePath: '/images/events/force-of-conquest/military-simulation-team.webp',
                  imageAlt: 'Airsoft team advancing through a ruined jungle building',
                },
                {
                  id: 'important-information-before-purchasing',
                  title: 'Important Information Before Purchasing',
                  paragraphs: [
                    'To ensure balanced gameplay and proper faction organization, all players planning to participate in specialized roles, military units, media teams, or support functions must contact event management before purchasing a ticket.',
                    'This helps prevent duplicate assignments and ensures all roles fit within the event storyline and operational structure.',
                  ],
                  email: 'info@mstarairsoft.com',
                  imagePath: '/images/events/force-of-conquest/referee-final-edit.png',
                  imageAlt: 'Referee wearing a high-visibility vest briefing airsoft players',
                },
                {
                  id: 'led-armband',
                  title: 'Complimentary LED Identification Armband Included',
                  paragraphs: [
                    'Every participant will receive an official Force of Conquest LED Armband as part of their event package. These specially designed illuminated armbands play a vital role during both daytime and nighttime operations.',
                    'The LED system has been designed to minimize interference with night vision equipment while maintaining battlefield realism.',
                  ],
                  bullets: [
                    'Player identification',
                    'Hit and casualty indication',
                    'Nighttime visibility and safety',
                    'Administrative and gameplay functions',
                  ],
                  note: 'Armbands will be distributed during registration and check-in.',
                  imagePath: '/images/airsoft-register-bg.avif',
                  imageAlt: 'Airsoft player registration and equipment',
                },
                {
                  id: 'mandatory-dress-code',
                  title: 'Dress Code',
                  paragraphs: [
                    'To maximize immersion and maintain battlefield realism, teams and factions are identified through uniforms and designated dress codes rather than colored armbands.',
                    'We are not strict about every small uniform detail, but we strongly encourage all players to wear the designated faction dress code for better team immersion, battlefield realism, and overall fun factor.',
                    'Following the recommended dress code helps players recognize teams more easily, improves the atmosphere of the event, and makes the Force of Conquest experience feel more authentic for everyone.',
                  ],
                  factionPanels: [
                    {
                      name: 'Siam Frontier Coalition',
                      uniform: 'Woodland camouflage uniform',
                      imagePath: '/images/events/force-of-conquest/siam-frontier-woodland.webp',
                      imageAlt: 'Woodland camouflage pattern for Siam Frontier Coalition',
                      logoPath: '/images/events/force-of-conquest/siam-frontier-logo.webp',
                      logoAlt: 'Siam Frontier Coalition logo',
                    },
                    {
                      name: 'Golden Triangle Syndicate',
                      uniform: 'Tiger stripe camouflage uniform',
                      imagePath: '/images/events/force-of-conquest/golden-triangle-tiger-stripe.webp',
                      imageAlt: 'Tiger stripe camouflage pattern for Golden Triangle Syndicate',
                      logoPath: '/images/events/force-of-conquest/golden-triangle-logo.webp',
                      logoAlt: 'Golden Triangle Syndicate logo',
                    },
                  ],
                },
                {
                  id: 'ticket-inclusions',
                  title: "What's Included With Your Event Ticket",
                  bullets: [
                    'Full access to the event grounds and battlefield throughout the event',
                    'Participation in all official game operations and missions',
                    'Access to campsite facilities',
                    'Access to portable toilets and washing stations',
                    'Official event wristband',
                    'Official LED identification armband',
                    'Arrival and campsite access beginning Thursday before the event',
                    'Access to entertainment activities and social events',
                    'Eligibility to participate in all mission-based gameplay',
                    'Players must bring approved biodegradable airsoft ammunition',
                    'Tickets are valid for one participant',
                    'Family members and non-playing guests are welcome in designated camping and spectator areas',
                  ],
                  imagePath: '/images/events/force-of-conquest-card.png',
                  imageAlt: 'Force of Conquest 2027 event artwork',
                },
                {
                  id: 'event-information',
                  title: 'Event Information',
                  infoRows: [
                    { label: 'Event', value: 'Force of Conquest 2027' },
                    { label: 'Date', value: 'January 8-10, 2027' },
                    { label: 'Location', value: 'Saraburi, Thailand' },
                    { label: 'Event Duration', value: '3 Days / 2 Nights' },
                    { label: 'Battlefield', value: 'Over 100 Acres of Natural Rainforest Terrain' },
                    { label: 'Game Format', value: 'Multi-Faction Military Simulation Campaign' },
                    {
                      label: 'Eligibility',
                      value: '18 Years and Older. 17 and younger need to fill out a waiver.',
                      linkLabel: 'Click here',
                      linkPath: '/ticket',
                      linkHash: 'authorization-of-supervising-adult',
                    },
                  ],
                },
                {
                  id: 'event-map',
                  title: 'Event Map',
                  imagePath: '/images/events/force-of-conquest/force-of-conquest-event-map-updated.png',
                  imageAlt: 'Force of Conquest event map with routes, facilities, camps, and battlefield locations',
                },
                {
                  id: 'facilities',
                  title: 'Facilities',
                  bullets: [
                    'Portable Toilets',
                    'Washing Stations',
                    'Food Vendors',
                    'Camping Areas',
                    'Medical Support',
                    'Event Administration Center',
                    'Camping Information',
                  ],
                  imagePath: '/images/events/force-of-conquest/facilities-food-vendors.webp',
                  imageAlt: 'Food vendors and event guests in a night market setting',
                },
                {
                  id: 'camping-information',
                  title: 'Camping Information',
                  paragraphs: [
                    'Participants will operate from designated Headquarters (HQ) Camps throughout the event. Upon arrival, players receive registration materials and equipment assignments before proceeding to faction headquarters.',
                    'Participants who prefer alternative accommodation may stay at nearby hotels; however, all airsoft equipment, ammunition, and event-related materials must remain within authorized event areas.',
                  ],
                  bullets: [
                    'Secure equipment storage',
                    'Team briefing areas',
                    'Rest zones',
                    'Administrative support',
                    'Safe zones where shooting is strictly prohibited',
                  ],
                  note: 'Players are required to remove magazines and clear all airsoft replicas while inside safe zones.',
                  imagePath: '/images/events/force-of-conquest/camping-tents.webp',
                  imageAlt: 'Force of Conquest player tents in the jungle campground',
                },
                {
                  id: 'camping-rules',
                  title: 'Camping Rules',
                  bullets: [
                    'BBQ cooking is permitted only within designated BBQ zones using approved gas grills.',
                    'Open campfires are prohibited except in officially designated areas.',
                    'Caravans and trailers are welcome in designated parking zones.',
                    'Outside food and beverages are not permitted within event operational areas.',
                    'All airsoft replicas and equipment must comply with event regulations and receive approval from game management when required.',
                  ],
                },
                {
                  id: 'sanitary-facilities',
                  title: 'Sanitary Facilities',
                  paragraphs: [
                    'Player comfort and hygiene are important priorities at Force of Conquest.',
                    'Facilities are strategically located throughout the campsite and support areas to ensure convenience and accessibility throughout the 24-hour operational period.',
                    'Our goal is to provide a clean, comfortable, and enjoyable environment that allows players to focus on the mission while enjoying a world-class Airsoft MilSim experience.',
                  ],
                  bullets: [
                    'Portable toilet facilities',
                    'Handwashing stations',
                    'Hygiene areas',
                    'Waste disposal facilities',
                  ],
                  imagePath: '/images/events/force-of-conquest/sanitary-facilities.webp',
                  imageAlt: 'Portable toilet facilities beside the event staging area',
                },
              ],
            },
            {
              code: 'th',
              label: 'Thai',
              htmlLang: 'th',
              pageTitle: 'ข้อมูลกิจกรรม',
              pageSubtitle: 'Force of Conquest 2027 - 3 วัน • 2 คืน แห่งการต่อสู้ ผจญภัย และประสบการณ์เสมือนจริงแบบไร้ขีดจำกัด',
              sections: [
                {
                  id: 'event-introduction',
                  subtitle: 'ประสบการณ์ Airsoft MilSim ที่ยิ่งใหญ่ที่สุดในเอเชีย',
                  paragraphs: [
                    'Force of Conquest 2027 ไม่ใช่เพียงกิจกรรมแอร์ซอฟต์ธรรมดา แต่คือประสบการณ์การจำลองยุทธการทางทหาร (Military Simulation Experience) แบบเต็มรูปแบบที่ยิ่งใหญ่และสมจริงที่สุดแห่งหนึ่งในเอเชีย',
                    'บนพื้นที่ป่าธรรมชาติอันสวยงามกว่า 267 ไร่ ในจังหวัดสระบุรี ประเทศไทย ผู้เข้าร่วมจะได้สัมผัสการผจญภัยตลอด 3 วัน 2 คืน ที่ผสานการรบทางยุทธวิธี การวางแผนเชิงกลยุทธ์ การตั้งแคมป์ กิจกรรมบันเทิง และการสร้างมิตรภาพจากผู้เล่นทั่วโลกไว้ในงานเดียว',
                    'เมื่อคุณซื้อบัตรเข้าร่วมงาน Force of Conquest 2027 คุณจะได้ก้าวเข้าสู่สนามรบขนาดมหึมา ซึ่งความสามัคคี การวางแผน ความอดทน และภาวะผู้นำ จะเป็นตัวกำหนดชะตากรรมของทั้งกองทัพ',
                    'นอกเหนือจากสนามรบ ผู้เข้าร่วมยังสามารถเพลิดเพลินกับการแสดงดนตรีสด เทศกาลอาหารนานาชาติ การแข่งขัน BBQ โซนกิจกรรมคาร์นิวัลและเครื่องเล่น กิจกรรมผจญภัย การตั้งแคมป์กลางธรรมชาติ กิจกรรมเกมและการแสดงต่าง ๆ รวมถึงงานสังสรรค์กับผู้เล่นจากทั่วโลก',
                  ],
                  imagePath: '/images/events/force-of-conquest/event-info-intro-gopro.webp',
                  imageAlt: 'ผู้เล่นแอร์ซอฟต์ติดกล้องบนหมวกในพื้นที่ป่า',
                },
                {
                  id: 'military-simulation',
                  title: 'สัมผัสประสบการณ์ Military Simulation ที่สมจริง',
                  paragraphs: [
                    'เตรียมตัวให้พร้อมสำหรับหนึ่งในกิจกรรม Airsoft MilSim ที่ท้าทายและสมจริงที่สุดเท่าที่เคยมีมา กิจกรรมนี้ได้รับการออกแบบโดยผู้เชี่ยวชาญด้านแอร์ซอฟต์และที่ปรึกษาด้านยุทธศาสตร์ทางทหาร โดยนำแรงบันดาลใจจากปฏิบัติการทางทหารสมัยใหม่และสงครามกองโจรในประวัติศาสตร์มาพัฒนาเป็นภารกิจที่มีความหลากหลายและเปลี่ยนแปลงตลอดเวลา',
                    'ความสำเร็จขึ้นอยู่กับความสามารถของทีมในการทำงานร่วมกันอย่างมีประสิทธิภาพ วางแผนเชิงยุทธศาสตร์ ปรับตัวต่อสถานการณ์ที่เปลี่ยนแปลง และปฏิบัติภารกิจภายใต้แรงกดดัน',
                  ],
                  bullets: [
                    'ปฏิบัติการปราบปรามกองกำลังก่อความไม่สงบ',
                    'การรบแบบกองโจร',
                    'ภารกิจลอบสังหารผู้นำฝ่ายตรงข้าม',
                    'ภารกิจช่วยเหลือและหลบหนีเชลยศึก',
                    'การยึดครองและขยายอาณาเขต',
                    'ปฏิบัติการสกัดกั้นเครือข่ายค้ายาเสพติดในพื้นที่สามเหลี่ยมทองคำ',
                    'ภารกิจลาดตระเวนและโจมตีด้วยโดรน',
                    'ปฏิบัติการรักษาความมั่นคงและสันติภาพ',
                  ],
                  imagePath: '/images/events/force-of-conquest/military-simulation-team.webp',
                  imageAlt: 'ทีมแอร์ซอฟต์เคลื่อนที่ผ่านอาคารร้างกลางป่า',
                },
                {
                  id: 'important-information-before-purchasing',
                  title: 'ข้อมูลสำคัญก่อนการซื้อบัตร',
                  paragraphs: [
                    'เพื่อให้การจัดกำลังพลและบทบาทภายในกิจกรรมเป็นไปอย่างสมดุล ผู้เล่นที่ต้องการเข้าร่วมในตำแหน่งพิเศษ หน่วยรบเฉพาะกิจ ทีมสื่อมวลชน หรือหน่วยสนับสนุนต่าง ๆ จำเป็นต้องติดต่อทีมงานก่อนทำการซื้อบัตร',
                    'ขั้นตอนนี้ช่วยป้องกันการซ้ำซ้อนของบทบาท และทำให้ทุกตำแหน่งสอดคล้องกับเนื้อเรื่องและโครงสร้างการปฏิบัติการของกิจกรรม',
                  ],
                  email: 'info@mstarairsoft.com',
                  imagePath: '/images/events/force-of-conquest/referee-final-edit.png',
                  imageAlt: 'กรรมการสวมเสื้อกั๊กสะท้อนแสงกำลังชี้แจงข้อมูลแก่ผู้เล่นแอร์ซอฟต์',
                },
                {
                  id: 'led-armband',
                  title: 'สายรัดแขน LED ฟรีสำหรับผู้เข้าร่วมทุกคน',
                  paragraphs: [
                    'ผู้เข้าร่วมทุกคนจะได้รับสายรัดแขน LED Force of Conquest อย่างเป็นทางการ สายรัดแขนนี้ถูกออกแบบเป็นพิเศษเพื่อใช้ในการปฏิบัติภารกิจทั้งกลางวันและกลางคืน',
                    'ระบบ LED ได้รับการออกแบบให้ลดผลกระทบต่ออุปกรณ์มองกลางคืน พร้อมคงความสมจริงของสนามรบไว้สูงสุด',
                  ],
                  bullets: [
                    'การระบุตัวตนผู้เล่น',
                    'แสดงสถานะการถูกยิงหรือบาดเจ็บ',
                    'เพิ่มความปลอดภัยในเวลากลางคืน',
                    'ใช้ในการควบคุมเกมและการจัดการกิจกรรม',
                  ],
                  note: 'สายรัดแขนจะแจกในขั้นตอนลงทะเบียนและเช็กอิน',
                  imagePath: '/images/airsoft-register-bg.avif',
                  imageAlt: 'การลงทะเบียนและอุปกรณ์ผู้เล่น',
                },
                {
                  id: 'mandatory-dress-code',
                  title: 'ระเบียบการแต่งกาย (Dress Code)',
                  paragraphs: [
                    'เพื่อเพิ่มความสมจริงของสงครามและสร้างบรรยากาศการรบอย่างเต็มรูปแบบ การแบ่งฝ่ายจะใช้เครื่องแบบและรูปแบบการแต่งกายเฉพาะของแต่ละฝ่าย แทนการใช้ปลอกแขนสี',
                    'ผู้เข้าร่วมทุกคนต้องปฏิบัติตาม Dress Code ของฝ่ายที่ได้รับมอบหมายอย่างเคร่งครัด',
                    'รายละเอียดเครื่องแบบและตัวอย่างการแต่งกายจะประกาศให้ทราบก่อนวันกิจกรรม',
                  ],
                  factionPanels: [
                    {
                      name: 'Siam Frontier Coalition',
                      uniform: 'เครื่องแบบลายพราง Woodland',
                      imagePath: '/images/events/force-of-conquest/siam-frontier-woodland.webp',
                      imageAlt: 'ลายพราง Woodland สำหรับฝ่าย Siam Frontier Coalition',
                      logoPath: '/images/events/force-of-conquest/siam-frontier-logo.webp',
                      logoAlt: 'ตราสัญลักษณ์ฝ่าย Siam Frontier Coalition',
                    },
                    {
                      name: 'Golden Triangle Syndicate',
                      uniform: 'เครื่องแบบลายพราง Tiger Stripe',
                      imagePath: '/images/events/force-of-conquest/golden-triangle-tiger-stripe.webp',
                      imageAlt: 'ลายพราง Tiger Stripe สำหรับฝ่าย Golden Triangle Syndicate',
                      logoPath: '/images/events/force-of-conquest/golden-triangle-logo.webp',
                      logoAlt: 'ตราสัญลักษณ์ฝ่าย Golden Triangle Syndicate',
                    },
                  ],
                },
                {
                  id: 'ticket-inclusions',
                  title: 'สิ่งที่รวมอยู่ในบัตรเข้าร่วมงาน',
                  bullets: [
                    'สิทธิ์เข้าพื้นที่กิจกรรมตลอดระยะเวลางาน',
                    'เข้าร่วมภารกิจและปฏิบัติการทั้งหมด',
                    'สิทธิ์ใช้พื้นที่ตั้งแคมป์',
                    'ห้องน้ำเคลื่อนที่และจุดล้างทำความสะอาด',
                    'สายรัดข้อมือประจำงาน',
                    'สายรัดแขน LED อย่างเป็นทางการ',
                    'สิทธิ์เข้าพื้นที่ตั้งแต่วันพฤหัสบดีก่อนเริ่มกิจกรรม',
                    'สิทธิ์เข้าร่วมกิจกรรมบันเทิงทั้งหมด',
                    'สิทธิ์เข้าร่วมภารกิจการแข่งขันทุกประเภท',
                    'ผู้เข้าร่วมต้องนำกระสุน BB แบบย่อยสลายได้ทางชีวภาพมาเอง',
                    'บัตร 1 ใบ สำหรับผู้เข้าร่วม 1 ท่าน',
                    'สมาชิกครอบครัวและผู้ติดตามที่ไม่ได้ร่วมเล่นสามารถเข้าพื้นที่ตั้งแคมป์และพื้นที่ชมการแข่งขันที่กำหนดไว้ได้',
                  ],
                  imagePath: '/images/events/force-of-conquest-card.png',
                  imageAlt: 'ภาพกิจกรรม Force of Conquest 2027',
                },
                {
                  id: 'event-information',
                  title: 'ข้อมูลกิจกรรม',
                  infoRows: [
                    { label: 'กิจกรรม', value: 'Force of Conquest 2027' },
                    { label: 'วันที่', value: '8-10 มกราคม 2570' },
                    { label: 'สถานที่', value: 'จังหวัดสระบุรี ประเทศไทย' },
                    { label: 'ระยะเวลา', value: '3 วัน / 2 คืน' },
                    { label: 'สนามแข่งขัน', value: 'พื้นที่ป่าธรรมชาติกว่า 267 ไร่' },
                    { label: 'รูปแบบการแข่งขัน', value: 'สงครามจำลองหลายฝ่าย (Multi-Faction Military Simulation Campaign)' },
                    {
                      label: 'คุณสมบัติผู้เข้าร่วม',
                      value: 'อายุ 18 ปีขึ้นไป ผู้เข้าร่วมอายุ 17 ปีหรือต่ำกว่าต้องกรอกแบบฟอร์มยินยอมจากผู้ปกครอง',
                      linkLabel: 'คลิกที่นี่',
                      linkPath: '/ticket',
                      linkHash: 'authorization-of-supervising-adult',
                    },
                  ],
                },
                {
                  id: 'event-map',
                  title: 'แผนที่กิจกรรม',
                  imagePath: '/images/events/force-of-conquest/force-of-conquest-event-map-updated.png',
                  imageAlt: 'แผนที่กิจกรรม Force of Conquest แสดงเส้นทาง สิ่งอำนวยความสะดวก จุดตั้งแคมป์ และพื้นที่สนามรบ',
                },
                {
                  id: 'facilities',
                  title: 'สิ่งอำนวยความสะดวก',
                  bullets: [
                    'ห้องน้ำเคลื่อนที่',
                    'จุดล้างทำความสะอาด',
                    'ร้านอาหารและเครื่องดื่ม',
                    'พื้นที่ตั้งแคมป์',
                    'หน่วยแพทย์',
                    'ศูนย์อำนวยการกิจกรรม',
                  ],
                  imagePath: '/images/events/force-of-conquest/facilities-food-vendors.webp',
                  imageAlt: 'ร้านอาหารและผู้ร่วมงานในบรรยากาศตลาดกลางคืน',
                },
                {
                  id: 'camping-information',
                  title: 'ข้อมูลการตั้งแคมป์และ HQ',
                  paragraphs: [
                    'ผู้เข้าร่วมจะปฏิบัติการจากค่ายกองบัญชาการ (HQ) ที่กำหนดตลอดระยะเวลากิจกรรม เมื่อเดินทางมาถึง ผู้เล่นจะได้รับเอกสารลงทะเบียนและการมอบหมายอุปกรณ์ ก่อนเดินทางเข้าสู่กองบัญชาการของฝ่าย',
                    'ผู้เข้าร่วมที่ต้องการพักในโรงแรมใกล้เคียงสามารถทำได้ แต่อุปกรณ์แอร์ซอฟต์ กระสุน และวัสดุที่เกี่ยวข้องกับกิจกรรมทั้งหมดต้องอยู่ภายในพื้นที่ที่ได้รับอนุญาต',
                  ],
                  bullets: [
                    'พื้นที่เก็บอุปกรณ์ที่ปลอดภัย',
                    'พื้นที่บรรยายสรุปของทีม',
                    'พื้นที่พักผ่อน',
                    'การสนับสนุนด้านธุรการ',
                    'เขตปลอดภัยที่ห้ามยิงโดยเด็ดขาด',
                  ],
                  note: 'ผู้เล่นต้องถอดแม็กกาซีนและเคลียร์ปืนแอร์ซอฟต์ทุกกระบอกเมื่ออยู่ภายในเขตปลอดภัย',
                  imagePath: '/images/events/force-of-conquest/camping-tents.webp',
                  imageAlt: 'เต็นท์ผู้เล่นในพื้นที่ตั้งแคมป์กลางป่า',
                },
                {
                  id: 'camping-rules',
                  title: 'กฎการตั้งแคมป์',
                  bullets: [
                    'อนุญาตให้ทำอาหาร BBQ เฉพาะในโซน BBQ ที่กำหนด โดยใช้เตาแก๊สที่ได้รับอนุญาต',
                    'ห้ามก่อกองไฟ ยกเว้นในพื้นที่ที่กำหนดอย่างเป็นทางการ',
                    'รถคาราวานและรถพ่วงสามารถจอดในพื้นที่ที่กำหนด',
                    'ไม่อนุญาตให้นำอาหารและเครื่องดื่มจากภายนอกเข้าสู่พื้นที่ปฏิบัติการของกิจกรรม',
                    'ปืนแอร์ซอฟต์และอุปกรณ์ทั้งหมดต้องเป็นไปตามกฎของกิจกรรม และได้รับอนุมัติจากฝ่ายจัดการแข่งขันเมื่อกำหนด',
                  ],
                },
                {
                  id: 'sanitary-facilities',
                  title: 'สิ่งอำนวยความสะดวกด้านสุขอนามัย',
                  paragraphs: [
                    'ความสะดวกสบายและสุขอนามัยของผู้เล่นเป็นสิ่งสำคัญสำหรับ Force of Conquest',
                    'สิ่งอำนวยความสะดวกจะถูกจัดวางทั่วพื้นที่ตั้งแคมป์และพื้นที่สนับสนุน เพื่อให้เข้าถึงได้สะดวกตลอดช่วงปฏิบัติการ 24 ชั่วโมง',
                  ],
                  bullets: [
                    'ห้องน้ำเคลื่อนที่',
                    'จุดล้างมือ',
                    'พื้นที่ดูแลสุขอนามัย',
                    'จุดกำจัดขยะ',
                  ],
                  imagePath: '/images/events/force-of-conquest/sanitary-facilities.webp',
                  imageAlt: 'ห้องน้ำเคลื่อนที่ข้างพื้นที่เตรียมกิจกรรม',
                },
              ],
            },
          ],
        },
        missionScenario: {
          eyebrow: 'Three-Day Campaign Storyline',
          backgroundImagePath: '/images/events/force-of-conquest-mission-scenario.jfif',
          href: '/events/force-of-conquest/mission-scenario',
          bannerText: 'See Mission Scenario',
          bannerSubtext: '',
          defaultLanguage: 'en',
          languages: [
            {
              code: 'en',
              label: 'English',
              htmlLang: 'en',
              heading: 'Force of Conquest 2027',
              subheading: 'Three-Day Campaign Storyline',
              dateLocation: 'January 8-10, 2027 - Saraburi, Thailand',
              backgroundHeading: 'Background',
              backgroundParagraphs: [
                'The Republic of Siam Frontier has descended into chaos.',
                'A powerful criminal syndicate operating throughout the Golden Triangle has seized control of strategic territories, natural resources, transportation routes, and military installations. Local governments have collapsed, and insurgent groups, private military contractors, and international intervention forces are now fighting for control of the region.',
                'Players will choose a faction and participate in a three-day military campaign in which every victory and defeat directly affects the next phase of the war.',
                'The fate of the region will be decided through strategy, leadership, diplomacy, and combat.',
              ],
              scheduleHeading: 'Mission Schedule',
              days: [
                {
                  label: 'Day 1',
                  title: 'Operation: Jungle Storm',
                  subtitle: 'Reconnaissance, Infiltration & Territory Seizure',
                  intro: 'The war begins.',
                  bodyParagraphs: [
                    'All factions enter the conflict with limited intelligence and resources. Commanders must deploy reconnaissance teams deep into hostile territory to locate enemy positions, supply caches, communication towers, and strategic objectives. The primary goal is to establish a foothold in the region and secure critical assets before enemy forces can react.',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'Reconnaissance Patrol & Intelligence Gathering' },
                    { time: '10:00 - 12:00', mission: 'Secure Communication Towers' },
                    { time: '13:00 - 15:00', mission: 'Capture Strategic Villages' },
                    { time: '15:00 - 17:00', mission: 'Defend Supply Convoys' },
                    { time: '19:00 - 21:00', mission: 'Night Infiltration Mission' },
                  ],
                  objectivesTitle: 'Key Objectives',
                  objectives: [
                    'Gather battlefield intelligence',
                    'Capture radio towers',
                    'Establish forward operating bases',
                    'Secure ammunition depots',
                    'Control transportation routes',
                    'Identify enemy leadership',
                  ],
                  victoryTitle: 'Day 1 Victory Conditions',
                  victoryIntro: 'The faction controlling the most territory receives:',
                  victoryItems: [
                    'Additional resources',
                    'Extra vehicles',
                    'Intelligence advantages',
                    'Reinforcements on Day 2',
                  ],
                },
                {
                  label: 'Day 2',
                  title: 'Operation: Golden Triangle',
                  subtitle: 'Counter-Insurgency & Drug Cartel Elimination',
                  intro: 'The conflict escalates.',
                  bodyParagraphs: [
                    'Intelligence gathered during Day 1 reveals the location of major cartel operations controlling the region. Multiple factions now compete to destroy drug manufacturing facilities, disrupt smuggling routes, and capture high-value targets.',
                    'Enemy insurgents launch guerrilla attacks throughout the jungle while factions battle for dominance.',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'Destroy Drug Production Facilities' },
                    { time: '10:00 - 12:00', mission: 'Capture Cartel Leadership' },
                    { time: '13:00 - 15:00', mission: 'Hostage Rescue Operation' },
                    { time: '15:00 - 17:00', mission: 'Convoy Ambush & Counter-Ambush' },
                    { time: '19:00 - 21:00', mission: 'Drone Strike Night Operation' },
                  ],
                  objectivesTitle: 'Key Objectives',
                  objectives: [
                    'Eliminate cartel commanders',
                    'Capture intelligence documents',
                    'Rescue hostages',
                    'Protect supply chains',
                    'Conduct drone reconnaissance',
                    'Destroy enemy infrastructure',
                  ],
                  extraTitle: 'Dynamic Events',
                  extraIntro: 'Throughout the day:',
                  extraItems: [
                    'Surprise helicopter crash scenario',
                    'VIP extraction mission',
                    'Intelligence package recovery',
                    'Guerrilla ambushes',
                  ],
                  victoryTitle: 'Day 2 Victory Conditions',
                  victoryIntro: 'The leading faction gains:',
                  victoryItems: [
                    'Additional funding',
                    'Strategic intelligence',
                    'Advanced mission advantages',
                    'Access to special operations teams',
                  ],
                },
                {
                  label: 'Day 3',
                  title: 'Operation: Final Conquest',
                  subtitle: 'Assault on the Capital',
                  intro: 'The final battle begins.',
                  bodyParagraphs: [
                    'The remaining factions launch a massive offensive against the enemy stronghold known as "The Capital."',
                    'Years of conflict have led to this moment. The faction that successfully captures and controls the capital city, government compound, military headquarters, and strategic command centers will determine the future of the region.',
                    'Every resource earned during the previous two days will now be critical.',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'Assault Enemy Defensive Lines' },
                    { time: '10:00 - 12:00', mission: 'Capture Government Compound' },
                    { time: '13:00 - 15:00', mission: 'Destroy Enemy Command Center' },
                    { time: '15:00 - 17:00', mission: 'Final Battle for Capital City' },
                  ],
                  objectivesTitle: 'Final Objectives',
                  objectives: [
                    'Capture the Presidential Palace',
                    'Eliminate enemy warlords',
                    'Secure military headquarters',
                    'Control all strategic zones',
                    'Raise your faction flag over the capital',
                  ],
                  endGameTitle: 'End Game Scenario',
                  endGameParagraphs: [
                    'The event concludes with a massive final battle involving all factions fighting simultaneously for complete control of the region.',
                    'Every player, squad, and commander will contribute to the outcome.',
                    'Only one faction can claim victory.',
                  ],
                },
              ],
              nightFestival: {
                label: 'Night',
                title: 'Night Festival & Entertainment',
                intro: 'Every evening from 6:00 PM to 2:00 AM, participants can enjoy:',
                groups: [
                  {
                    title: 'International Food Festival',
                    items: ['Thai Cuisine', 'American BBQ', 'European Specialties', 'Asian Street Food'],
                  },
                  {
                    title: 'Live Entertainment',
                    items: ['International Live Bands', 'DJs', 'Cultural Performances'],
                  },
                  {
                    title: 'Carnival Zone',
                    items: ['Shooting Challenges', 'Team Competitions', 'Adventure Activities', 'Lucky Draws'],
                  },
                  {
                    title: 'Vendor Village',
                    items: ['Military Expo', 'Airsoft Manufacturers', 'Tactical Equipment Displays', 'New Product Launches', 'Sponsor Exhibitions'],
                  },
                ],
              },
              closingLine: 'The War Never Stops',
              closingParagraphs: [
                'Every mission completed throughout the campaign affects the overall war effort.',
                'Territories captured, commanders eliminated, resources secured, and alliances formed during the first two days will directly influence the final outcome of Force of Conquest 2027.',
                'No two campaigns will ever be the same.',
              ],
              closingCalls: ['Prepare your team.', 'Choose your faction.', 'Fight for victory.'],
            },
            {
              code: 'th',
              label: 'Thai',
              htmlLang: 'th',
              heading: 'Force of Conquest 2027',
              subheading: 'เนื้อเรื่องภารกิจหลักตลอด 3 วัน',
              dateLocation: '8-10 มกราคม 2570 - จังหวัดสระบุรี ประเทศไทย',
              backgroundHeading: 'ภูมิหลังของสงคราม',
              backgroundParagraphs: [
                'สาธารณรัฐชายแดนสยาม (Republic of Siam Frontier) กำลังเผชิญกับภาวะความวุ่นวายครั้งใหญ่',
                'องค์กรอาชญากรรมข้ามชาติที่มีอิทธิพลครอบคลุมพื้นที่สามเหลี่ยมทองคำ ได้เข้ายึดครองพื้นที่ยุทธศาสตร์ ทรัพยากรธรรมชาติ เส้นทางคมนาคม และฐานปฏิบัติการทางทหาร ส่งผลให้รัฐบาลท้องถิ่นล่มสลาย กองกำลังกบฏ บริษัททหารเอกชน และกองกำลังพันธมิตรนานาชาติ ต่างเข้าร่วมต่อสู้เพื่อแย่งชิงอำนาจและควบคุมภูมิภาคแห่งนี้',
                'ผู้เข้าร่วมจะต้องเลือกฝ่าย (Faction) และเข้าร่วมสงครามจำลองตลอดระยะเวลา 3 วัน โดยทุกชัยชนะและความพ่ายแพ้จะส่งผลโดยตรงต่อสถานการณ์ในวันถัดไป',
                'ชะตากรรมของภูมิภาคแห่งนี้จะถูกกำหนดด้วยกลยุทธ์ การบัญชาการ การทูต และความสามารถในการรบ',
              ],
              scheduleHeading: 'กำหนดภารกิจ',
              days: [
                {
                  label: 'Day 1',
                  title: 'Operation: Jungle Storm',
                  subtitle: 'ปฏิบัติการลาดตระเวน แทรกซึม และยึดครองพื้นที่',
                  intro: 'สงครามได้เริ่มต้นขึ้นแล้ว',
                  bodyParagraphs: [
                    'ทุกฝ่ายเข้าสู่สมรภูมิด้วยข้อมูลข่าวกรองและทรัพยากรที่จำกัด ผู้บัญชาการต้องส่งหน่วยลาดตระเวนเข้าสู่พื้นที่ศัตรูเพื่อค้นหาตำแหน่งกำลังพล คลังเสบียง หอสื่อสาร และเป้าหมายยุทธศาสตร์ที่สำคัญ ภารกิจหลักคือการสร้างฐานอำนาจในพื้นที่และยึดครองทรัพยากรสำคัญก่อนที่ฝ่ายตรงข้ามจะตอบโต้ได้',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'ลาดตระเวนและรวบรวมข่าวกรอง' },
                    { time: '10:00 - 12:00', mission: 'ยึดหอสื่อสาร' },
                    { time: '13:00 - 15:00', mission: 'เข้ายึดหมู่บ้านยุทธศาสตร์' },
                    { time: '15:00 - 17:00', mission: 'ป้องกันขบวนลำเลียงเสบียง' },
                    { time: '19:00 - 21:00', mission: 'ภารกิจแทรกซึมเวลากลางคืน' },
                  ],
                  objectivesTitle: 'เป้าหมายหลัก',
                  objectives: [
                    'รวบรวมข่าวกรองสนามรบ',
                    'ยึดสถานีวิทยุสื่อสาร',
                    'จัดตั้งฐานปฏิบัติการแนวหน้า (FOB)',
                    'เข้ายึดคลังกระสุนและเสบียง',
                    'ควบคุมเส้นทางคมนาคม',
                    'ระบุตัวผู้นำฝ่ายตรงข้าม',
                  ],
                  victoryTitle: 'เงื่อนไขชัยชนะประจำวัน',
                  victoryIntro: 'ฝ่ายที่สามารถควบคุมพื้นที่ได้มากที่สุดจะได้รับ',
                  victoryItems: [
                    'ทรัพยากรเพิ่มเติม',
                    'ยานพาหนะสนับสนุนพิเศษ',
                    'ความได้เปรียบด้านข่าวกรอง',
                    'กำลังเสริมสำหรับวันที่ 2',
                  ],
                },
                {
                  label: 'Day 2',
                  title: 'Operation: Golden Triangle',
                  subtitle: 'ปราบปรามกองกำลังก่อความไม่สงบและทำลายเครือข่ายค้ายาเสพติด',
                  intro: 'สถานการณ์ทวีความรุนแรงขึ้น',
                  bodyParagraphs: [
                    'ข้อมูลข่าวกรองที่ได้จากวันแรกเผยให้เห็นที่ตั้งของเครือข่ายอาชญากรรมและโรงงานผลิตยาเสพติดขนาดใหญ่ หลายฝ่ายต่างแข่งขันกันเพื่อทำลายฐานการผลิต ตัดเส้นทางลำเลียง และจับกุมเป้าหมายระดับสูง',
                    'ในขณะเดียวกัน กองกำลังกบฏได้เปิดฉากโจมตีแบบกองโจรทั่วพื้นที่ป่า ทำให้สมรภูมิยิ่งทวีความดุเดือด',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'ทำลายโรงงานผลิตยาเสพติด' },
                    { time: '10:00 - 12:00', mission: 'จับกุมผู้นำเครือข่ายอาชญากรรม' },
                    { time: '13:00 - 15:00', mission: 'ปฏิบัติการช่วยเหลือตัวประกัน' },
                    { time: '15:00 - 17:00', mission: 'ซุ่มโจมตีและป้องกันขบวนลำเลียง' },
                    { time: '19:00 - 21:00', mission: 'ปฏิบัติการโดรนโจมตีกลางคืน' },
                  ],
                  objectivesTitle: 'เป้าหมายหลัก',
                  objectives: [
                    'กำจัดผู้บัญชาการฝ่ายศัตรู',
                    'ยึดเอกสารข่าวกรองสำคัญ',
                    'ช่วยเหลือตัวประกัน',
                    'ปกป้องเส้นทางลำเลียง',
                    'ลาดตระเวนด้วยโดรน',
                    'ทำลายโครงสร้างพื้นฐานของฝ่ายตรงข้าม',
                  ],
                  extraTitle: 'เหตุการณ์พิเศษแบบ Dynamic',
                  extraIntro: 'ตลอดทั้งวันอาจเกิดเหตุการณ์ไม่คาดคิด เช่น',
                  extraItems: [
                    'เหตุเฮลิคอปเตอร์ตก',
                    'ภารกิจอพยพบุคคลสำคัญ (VIP Extraction)',
                    'ภารกิจกู้คืนเอกสารลับ',
                    'การซุ่มโจมตีโดยกองกำลังกองโจร',
                  ],
                  victoryTitle: 'เงื่อนไขชัยชนะประจำวัน',
                  victoryIntro: 'ฝ่ายที่มีคะแนนนำจะได้รับ',
                  victoryItems: [
                    'งบประมาณสนับสนุนเพิ่มเติม',
                    'ข่าวกรองระดับยุทธศาสตร์',
                    'สิทธิพิเศษในภารกิจขั้นสูง',
                    'การสนับสนุนจากหน่วยปฏิบัติการพิเศษ',
                  ],
                },
                {
                  label: 'Day 3',
                  title: 'Operation: Final Conquest',
                  subtitle: 'ยุทธการบุกยึดเมืองหลวง',
                  intro: 'ศึกตัดสินชะตากรรมได้เริ่มต้นขึ้น',
                  bodyParagraphs: [
                    'ทุกฝ่ายระดมกำลังเปิดฉากโจมตีฐานที่มั่นสุดท้ายของศัตรู ซึ่งเป็นศูนย์กลางการปกครองและการบัญชาการที่รู้จักกันในชื่อ "เมืองหลวง"',
                    'ทรัพยากร กำลังพล และข่าวกรองที่สะสมมาตลอดสองวันที่ผ่านมา จะเป็นปัจจัยสำคัญในการชี้ขาดชัยชนะ',
                  ],
                  schedule: [
                    { time: '08:00 - 10:00', mission: 'โจมตีแนวป้องกันศัตรู' },
                    { time: '10:00 - 12:00', mission: 'ยึดอาคารรัฐบาล' },
                    { time: '13:00 - 15:00', mission: 'ทำลายศูนย์บัญชาการหลัก' },
                    { time: '15:00 - 17:00', mission: 'ศึกชี้ขาดเพื่อยึดเมืองหลวง' },
                  ],
                  objectivesTitle: 'เป้าหมายสุดท้าย',
                  objectives: [
                    'ยึดทำเนียบประธานาธิบดี',
                    'กำจัดผู้นำสงครามฝ่ายศัตรู',
                    'เข้ายึดกองบัญชาการทหาร',
                    'ควบคุมพื้นที่ยุทธศาสตร์ทั้งหมด',
                    'ปักธงแห่งชัยชนะเหนือเมืองหลวง',
                  ],
                  endGameTitle: 'ฉากจบของสงคราม',
                  endGameParagraphs: [
                    'กิจกรรมจะสิ้นสุดลงด้วยการรบครั้งใหญ่ที่สุดของงาน โดยทุกฝ่ายจะเข้าสู่สมรภูมิพร้อมกันเพื่อชิงการควบคุมภูมิภาคอย่างสมบูรณ์',
                    'ผู้เล่นทุกคน ทุกหน่วยรบ และทุกผู้บัญชาการ จะมีส่วนสำคัญต่อผลลัพธ์ของสงคราม',
                    'มีเพียงหนึ่งฝ่ายเท่านั้นที่จะได้รับชัยชนะ',
                  ],
                },
              ],
              nightFestival: {
                label: 'Night',
                title: 'Night Festival & Entertainment',
                intro: 'เทศกาลกลางคืนและกิจกรรมบันเทิง ทุกคืนเวลา 18:00 - 02:00 น.',
                groups: [
                  {
                    title: 'เทศกาลอาหารนานาชาติ',
                    items: ['อาหารไทย', 'American BBQ', 'อาหารยุโรป', 'สตรีทฟู้ดเอเชีย'],
                  },
                  {
                    title: 'การแสดงสด',
                    items: ['วงดนตรีนานาชาติ', 'ดีเจ', 'การแสดงวัฒนธรรม'],
                  },
                  {
                    title: 'โซนกิจกรรม',
                    items: ['Shooting Challenge', 'การแข่งขันระหว่างทีม', 'กิจกรรมผจญภัย', 'Lucky Draw'],
                  },
                  {
                    title: 'Vendor Village & Military Expo',
                    items: ['ผู้ผลิตอุปกรณ์แอร์ซอฟต์', 'แบรนด์ยุทธวิธีและอุปกรณ์ทางทหาร', 'การเปิดตัวสินค้าใหม่', 'อาหารและเครื่องดื่ม', 'พื้นที่จัดแสดงผู้สนับสนุน'],
                  },
                ],
              },
              closingLine: 'The War Never Stops',
              closingParagraphs: [
                'ทุกภารกิจที่สำเร็จตลอดทั้งแคมเปญจะส่งผลต่อความคืบหน้าของสงครามโดยรวม',
                'พื้นที่ที่ยึดครองได้ ผู้นำฝ่ายตรงข้ามที่ถูกกำจัด ทรัพยากรที่ได้รับ และพันธมิตรที่สร้างขึ้นในสองวันแรก จะส่งผลโดยตรงต่อบทสรุปของ FORCE OF CONQUEST 2027',
                'ไม่มีสงครามครั้งใดที่จะดำเนินไปเหมือนเดิม',
              ],
              closingCalls: ['เตรียมทีมของคุณ', 'เลือกฝ่ายของคุณ', 'เข้าสู่สมรภูมิ', 'และต่อสู้เพื่อชัยชนะ'],
            },
          ],
        },
        footerTitle: 'Ready for Force of Conquest?',
        footerCta: { label: 'Buy Ticket Now', href: '/ticket', variant: 'primary' },
      },
    },
    {
      id: 'night-grid',
      title: 'TBA',
      date: '2027',
      time: '04:00 PM - 11:30 PM',
      location: 'TBA',
      entryFee: 'TBA',
      teams: 'Night Squad vs Grid Command',
      attendance: '2000+',
      status: 'To Be Announced Soon',
      summary: '',
      overview:
        'Event details will be announced soon.',
      imagePath: '/banners/event-night.svg',
    },
    {
      id: 'final-front',
      title: 'TBA',
      date: '2027',
      time: '08:00 AM - 06:00 PM',
      location: 'TBA',
      entryFee: 'TBA',
      teams: 'Qualified Teams Bracket',
      attendance: '2000+',
      status: 'To Be Announced Soon',
      summary: '',
      overview:
        'Event details will be announced soon.',
      imagePath: '/banners/event-final.svg',
    },
  ],
  eventCountdown: {
    eyebrow: 'Force of Conquest Countdown',
    title: 'Gates open on Friday January 8th, 2027',
    description: 'Live countdown to the next MSTAR Airsoft operation in Thailand.',
    targetIso: '2027-01-08T00:00:00+07:00',
    gateLabel: 'Gates open on Friday January 8th, 2027',
    completeLabel: 'Event Started',
  },
  registrationFields: [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+66 00 000 0000', required: true },
    { id: 'teamName', label: 'Team name', type: 'text', placeholder: 'Team callsign', required: true },
    { id: 'players', label: 'Number of players', type: 'number', placeholder: '5', required: true },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Event, roster, or special notes', required: false },
  ],
  gameTerrain: {
    eyebrow: '',
    title: 'Game Terrain',
    description: 'Explore the battlefield. Real locations, immersive environments, built for tactical gameplay.',
    items: [
      {
        id: 'forest-movement',
        title: 'Forest Movement',
        description: 'Navigate dense woodland paths, natural cover, and tactical movement routes.',
        videoPath: '/videos/game-terrain/forest-movement.webm',
        posterPath: '/images/game-terrain/forest-movement.webp',
      },
      {
        id: 'large-open-area',
        title: 'Large Open Area',
        description: 'Wide engagement zones with long sightlines and strategic positioning.',
        videoPath: '/videos/game-terrain/large-open-area.webm',
        posterPath: '/images/game-terrain/large-open-area.webp',
      },
      {
        id: 'beautiful-scenery',
        title: 'Beautiful Scenery',
        description: 'Immersive landscapes and visually striking environments across the field.',
        videoPath: '/videos/game-terrain/beautiful-scenery.webm',
        posterPath: '/images/game-terrain/beautiful-scenery.webp',
      },
      {
        id: 'fun-combat-terrains',
        title: 'Fun Combat Terrains',
        description: 'Diverse battle zones designed for exciting and dynamic gameplay.',
        videoPath: '/videos/game-terrain/fun-combat-terrains.webm',
        posterPath: '/images/game-terrain/fun-combat-terrains.webp',
      },
    ],
  },
  rules: [
    {
      title: 'Safety rules',
      description:
        'Eye protection stays on inside active areas. Marshals control start, pause, and stop calls.',
    },
    {
      title: 'FPS limits placeholder',
      description:
        'Final FPS limits will be confirmed per venue and published before each event.',
    },
    {
      title: 'Required gear',
      description:
        'Players must bring approved eye protection, team markers, hydration, and event-ready replicas.',
    },
    {
      title: 'Fair play rules',
      description:
        'Call hits clearly, respect marshal decisions, and keep conduct professional on and off field.',
    },
  ],
  contact: {
    email: 'events@mstarairsoft.example',
    social: '@mstarairsoft',
    location: 'Bangkok, Thailand',
  },
  footerSections: [
    {
      title: 'Mstar Airsoft',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Things to Know', href: '/things-to-know' },
        { label: 'Events', href: '/events' },
        { label: 'Become a Vendor', href: '/become-a-vendor' },
        { label: 'Become a Sponsor', href: '/become-a-sponsor' },
      ],
    },
    {
      title: 'Travel Planning',
      links: [
        { label: 'What to Do in Thailand', href: '/what-to-do-in-thailand' },
        { label: 'Travel Preparation', href: '/travel-preparation' },
        { label: 'Immigration Visa', href: '/immigration-visa' },
        { label: 'Ship Your Equipment', href: '/equipment' },
      ],
    },
    {
      title: 'Site Links',
      links: [
        { label: 'Rules', href: '/rules-and-regulation' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
        { label: 'Terms & Conditions', href: '/terms-and-conditions' },
        { label: 'Cancellation and Refund', href: '/cancellation-and-refund' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Complaints', href: '/complaints' },
      ],
    },
  ],
  infoPages: [
    {
      slug: 'products',
      eyebrow: 'Loadout Planning',
      title: 'Products',
      description: 'Placeholder product collections and field-ready recommendations will be organized here.',
      cards: [
        {
          id: 'starter-loadouts',
          title: 'Starter Loadouts',
          summary: 'Placeholder product grouping for entry-level kits, eye protection, and safe field basics.',
          imagePath: '/banners/event-urban.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Product collection box',
        },
        {
          id: 'team-essentials',
          title: 'Team Essentials',
          summary: 'Placeholder product grouping for team support gear, comms, hydration, and match-day add-ons.',
          imagePath: '/banners/event-ridge.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Product collection box',
        },
        {
          id: 'travel-ready-kit',
          title: 'Travel-Ready Kit',
          summary: 'Placeholder product grouping for travel cases, packing systems, and tournament prep items.',
          imagePath: '/banners/event-steel.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Product collection box',
        },
      ],
    },
    {
      slug: 'things-to-know',
      eyebrow: 'Trip Basics',
      title: 'Things to Know',
      description: 'FORCE OF CONQUEST',
      heroAlign: 'center',
      cards: [
        {
          id: 'arrival-basics',
          title: 'How to Get to the Event',
          summary: 'Placeholder guidance box for airport timing, arrival flow, and first-day planning.',
          imagePath: '/images/things-to-know/how-to-get-to-the-event.png',
          href: '/how-to-get-to-the-event',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'field-day-rhythm',
          title: 'Immigration Visa',
          summary: 'Placeholder guidance box for what players should expect before, during, and after match day.',
          imagePath: '/images/things-to-know/immigration-visa.png',
          href: '/immigration-visa',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'support-checklist',
          title: 'How to Ship Your Equipment to Us',
          summary: 'Placeholder guidance box for the practical items teams should line up before travel.',
          imagePath: '/images/things-to-know/equipment.png',
          href: '/equipment',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'rules-and-regulation',
          title: 'Rules & Regulation',
          summary: 'Official event rules covering protective gear, weapon checks, gameplay standards, and player conduct.',
          imagePath: '/images/things-to-know/regulation.png',
          href: '/rules-and-regulation',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'accommodation-and-campground',
          title: 'Accommodation & Campground',
          summary: 'Campground facilities, equipment rental, and festival-style overnight planning for players and teams.',
          imagePath: '/images/things-to-know/campground.png',
          href: '/accommodation-and-campground',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'activity',
          title: 'Activity',
          summary: 'Outdoor adventure, international food, music, nightlife, and festival entertainment around the event.',
          imagePath: '/images/what-to-do-thailand/kayaking-rapids.webp',
          href: '/activity',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
      ],
    },
    {
      slug: 'how-to-get-to-the-event',
      eyebrow: 'Travel Guide',
      title: 'How to Get to the Event',
      description: 'Travel options, transfer timing, and support contacts for getting from Bangkok to the MSTAR Airsoft event in Saraburi.',
      languageVersions: travelLanguageVersions,
      sections: [
        {
          id: 'arrival-overview',
          title: 'How to Get to the MSTAR Airsoft Event in Saraburi',
          paragraphs: [
            'Upon arriving at Suvarnabhumi Airport, you may purchase a local SIM card at the airport or directly at the event venue for convenient communication during your stay.',
            'There are several transportation options for traveling from Bangkok to the MSTAR Airsoft Event in Saraburi, including private car services, buses, minibuses, and ride-hailing services such as Grab.',
          ],
        },
        {
          id: 'estimated-travel-time',
          title: 'Estimated Travel Time',
          bullets: [
            'Private Car / Taxi: Approximately 1 hour 45 minutes',
            'Bus: Approximately 2 hours 45 minutes',
            'Mini Van: Approximately 3 hours 15 minutes',
          ],
        },
        {
          id: 'budget-friendly-option',
          title: 'Budget-Friendly Transportation Option',
          paragraphs: [
            'For travelers looking to save on transportation costs, the recommended option is to take a local taxi or book a Grab ride to Mo Chit Bus Terminal. Upon arrival at the terminal, you can purchase a bus ticket to Saraburi.',
            'Once you arrive at the Saraburi Bus Terminal, you will find a designated minivan displaying the sign "MSTAR Airsoft Event."',
          ],
          bullets: [
            'Transfer Fee: 500 THB per person',
            'Destination: Direct transfer to the event campground and airsoft field.',
          ],
        },
        {
          id: 'shared-private-transport',
          title: 'Shared Private Transport',
          paragraphs: [
            'Alternatively, attendees may hire a private Grab car, minivan, or local taxi service and share the transportation with other participants for greater convenience and a lower cost per person.',
          ],
        },
        {
          id: 'transport-support',
          title: 'Transport Support',
          paragraphs: [
            'If you require any assistance regarding transportation or travel arrangements, do not hesitate to get in touch with our support team via WhatsApp or hotline:',
          ],
          bullets: [
            'WhatsApp / Tel: +66-97-392-4632',
            'Hotline: +66-81-392-5429',
          ],
        },
      ],
    },
    {
      slug: 'immigration-visa',
      eyebrow: 'Travel Guide',
      title: 'Immigration Visa',
      description: 'Entry guidance and arrival documents for international attendees traveling to Thailand for the MSTAR Airsoft event.',
      sections: [
        {
          id: 'visa-overview',
          title: 'Visa Guidance',
          paragraphs: [
            'Thailand currently offers a 30-day visa exemption for travelers from approved countries. Visitors are advised to check with the Royal Thai Embassy or Thai consulate in their country for the latest visa requirements, regulations, and immigration policies prior to departure.',
          ],
        },
        {
          id: 'immigration-documents',
          title: 'Documents & Information to Prepare for Immigration Inspection',
          paragraphs: [
            'Please ensure you have the following documents and information ready upon arrival in Thailand:',
          ],
          bullets: [
            'Valid passport',
            'Round-trip airline ticket',
            'Hotel or accommodation reservation during your stay',
            'Declaration of the amount of cash or funds brought into Thailand',
            'Event confirmation letter and booking ticket from MSTAR Airsoft Event',
          ],
        },
      ],
    },
    {
      slug: 'equipment',
      eyebrow: 'Security Protocol',
      title: 'Equipment Transportation',
      description: 'Official international airsoft equipment transport, storage, event-use, and re-export procedures for Force of Conquest 2027.',
      languageVersions: equipmentLanguageVersions,
    },
    {
      slug: 'rules-and-regulation',
      eyebrow: 'Event Guide',
      title: 'Rules & Regulation',
      description: '',
      sections: [
        {
          id: 'rules-overview',
          title: 'MSTAR Airsoft Rules & Regulations',
          paragraphs: [
            'MSTAR Airsoft - Force of Conquest is committed to maintaining the highest standards of safety, professionalism, and fair play throughout the event. All participants are required to follow official event regulations, safety procedures, and game rules at all times.',
            'The success of large-scale airsoft operations depends on strict safety enforcement, responsible player conduct, and adherence to the honor system. Every participant must complete weapon chronograph inspections, wear approved protective equipment, and comply with all staging and firing regulations.',
          ],
        },
        {
          id: 'safety-protective-gear',
          title: 'Safety & Protective Gear Requirements',
          bullets: [
            'Eye & Face Protection: Full-seal ANSI-rated eye protection (Z87.1 standard or equivalent) is mandatory for all players. Participants under 18 years old, and in some cases adults depending on event requirements, must wear full-face protection.',
            'Barrel Covers / Safety Socks: All airsoft replicas must have approved barrel blocking devices installed at all times within staging areas, safe zones, parking areas, and non-active zones.',
            'Prohibited Items: Real firearms, live weapons, fixed-blade knives, explosives, and unauthorized pyrotechnics are strictly prohibited within the event premises.',
            'Liability Waiver: All players, spectators, media personnel, and staff members must sign an official liability waiver before entering the Active Operating Area.',
          ],
        },
        {
          id: 'weapon-chronograph-regulations',
          title: 'Weapon & Chronograph Regulations',
          bullets: [
            'FPS / Joule Limits: All airsoft replicas must pass a chronograph inspection using the exact BB weight intended for gameplay. Power limits are regulated in Joules to prevent joule creep and may vary depending on weapon classifications such as assault rifles, DMRs, or sniper platforms.',
            'Minimum Engagement Distance (MED): High-power replicas are subject to minimum engagement distance requirements. Players using designated sniper or high-velocity weapons must maintain safe firing distances and switch to secondary weapons or call a Bang Kill during close encounters.',
            'Semi-Automatic Fire: To reduce the risk of injury during close-quarter combat (CQB), most replicas are restricted to semi-automatic firing mode. Fully automatic fire is only permitted for approved support weapon systems under designated rules.',
          ],
        },
        {
          id: 'gameplay-field-rules',
          title: 'Gameplay & Field Rules',
          bullets: [
            "Honor System: Airsoft operates entirely on the honor system. Any direct BB impact to a player's body, equipment, or weapon is considered a valid hit and elimination.",
            'Dead Rag Requirement: Eliminated players must immediately display a visible red dead rag on their head or gear while returning to respawn or safe zones.',
            'Medic & Respawn Rules: Certain game modes may include medic or revive systems, allowing teammates to revive eliminated players a limited number of times before respawn is required.',
            'Emergency Blind Man Call: The phrase Blind Man is reserved exclusively for real-world emergencies, injuries, or safety hazards. Upon hearing this call, all players must immediately stop gameplay, unload magazines if instructed, and await directions from event staff.',
          ],
        },
        {
          id: 'player-conduct-event-policies',
          title: 'Player Conduct & Event Policies',
          bullets: [
            'Authority of Referees & Staff: Event referees, marshals, and organizers hold full authority throughout the event. Disrespectful behavior, excessive profanity, cheating, unsafe conduct, or arguing with staff may result in immediate removal from the event without refund.',
            'Safe Zones & Staging Areas: No firing, dry firing, or loaded magazines are permitted within designated safe zones and staging areas.',
            'Environmental Responsibility: To protect the environment and maintain field sustainability, biodegradable BBs are strongly encouraged and may be mandatory at designated outdoor locations.',
          ],
        },
        {
          id: 'rules-acknowledgement',
          title: 'Participant Acknowledgement',
          paragraphs: [
            'By participating in the MSTAR Airsoft - Force of Conquest event, all attendees acknowledge and agree to comply with these rules and regulations to ensure a safe, fair, and enjoyable experience for everyone involved.',
          ],
        },
      ],
    },
    {
      slug: 'accommodation-and-campground',
      eyebrow: 'Event Guide',
      title: 'Accommodation & Campground Experience',
      description: 'Campground atmosphere, facilities, and rental gear for players staying on site during the MSTAR Airsoft festival.',
      sections: [
        {
          id: 'campground-overview',
          title: 'Accommodation & Campground Experience',
          paragraphs: [
            'Experience the ultimate outdoor airsoft lifestyle at the official MSTAR Airsoft Event Campground - a massive recreational camping area spanning more than 80,000 square meters, designed to deliver an immersive festival atmosphere for players and visitors from around the world.',
            'The campground combines tactical gameplay with entertainment, community activities, and outdoor relaxation, creating a complete international airsoft festival experience.',
          ],
        },
        {
          id: 'campground-features',
          title: 'Campground Features & Facilities',
          bullets: [
            'Large-scale camping environment surrounded by live entertainment zones',
            'Dedicated BBQ and social gathering areas for players and teams',
            'Clean restroom and hot shower facilities',
            '24-hour CCTV security monitoring throughout the campground and airsoft field for participant safety',
            'On-site convenience stores, pubs, and coffee shops within the camping area',
            'Comfortable atmosphere for both casual campers and competitive teams',
          ],
        },
        {
          id: 'camping-rental',
          title: 'Camping 69€',
          paragraphs: [
            'Camping set includes pillow, blanket, mattress, and 2-person tent.',
          ],
          links: [
            { label: 'Reserve Camping on the Ticket Page', href: '/ticket#camping' },
          ],
        },
        {
          id: 'camping-rental-note',
          title: 'Availability Note',
          paragraphs: [
            'Additional camping equipment and supplies may also be available upon request, subject to availability.',
          ],
        },
      ],
    },
    {
      slug: 'activity',
      eyebrow: 'Event Guide',
      title: 'Activities & Entertainment Experience',
      description: 'Outdoor adventure, food, music, nightlife, and festival entertainment built around the MSTAR Airsoft experience.',
      sections: [
        {
          id: 'activity-overview',
          title: 'Activities & Entertainment Experience',
          paragraphs: [
            'Prepare for a nonstop adrenaline-filled adventure at the MSTAR Airsoft Festival, where tactical combat meets outdoor exploration, music, nightlife, and world-class entertainment.',
            'Surrounded by breathtaking natural scenery, waterfalls, and tropical forest landscapes, attendees will experience far more than just an airsoft tournament - this is a full-scale international adventure festival designed for thrill-seekers, travelers, and outdoor enthusiasts from around the world.',
          ],
        },
        {
          id: 'outdoor-adventure-activities',
          title: 'Outdoor Adventure Activities',
          paragraphs: [
            'Participants can enjoy a wide range of exciting outdoor experiences, including:',
          ],
          images: [
            {
              src: '/images/activities/jungle-trip.png',
              alt: 'Jungle trip activity at the MSTAR event',
              title: 'Jungle Trip',
            },
            {
              src: '/images/activities/atv-ride-live.png',
              alt: 'ATV ride activity at the MSTAR event',
              title: 'ATV Ride',
            },
            {
              src: '/images/what-to-do-thailand/narong-waterfall.webp',
              alt: 'Waterfall destination activity at the MSTAR event',
              title: 'Waterfall',
            },
          ],
          bullets: [
            'Jungle and nature tours through scenic forest trails',
            'ATV off-road adventures',
            'Mountain climbing and exploration activities',
            'Team games, challenges, and interactive festival activities',
          ],
        },
        {
          id: 'international-food-festival',
          title: 'International Food Festival',
          paragraphs: [
            'Explore an incredible international food marketplace featuring more than 50 food vendors serving flavors and cuisines from around the world. From authentic Asian street food to Western BBQ, grilled specialties, desserts, beverages, and local Thai favorites - the festival delivers a true global culinary experience.',
          ],
        },
        {
          id: 'nightlife-music-entertainment',
          title: 'Nightlife, Music & Entertainment',
          paragraphs: [
            'As the sun sets, the festival transforms into an unforgettable entertainment destination featuring:',
          ],
          bullets: [
            'Live international bands and music performances',
            'EDM party zones with DJs and festival lighting',
            'Mini carnival attractions and games',
            'BBQ party areas and social gathering spaces',
            'Nighttime entertainment and interactive activities',
          ],
        },
        {
          id: 'festival-experience',
          title: 'A Festival Experience You Will Never Forget',
          paragraphs: [
            'Spend your days battling through intense airsoft missions and outdoor adventures, then celebrate your nights with music, food, entertainment, and an international community of players and travelers.',
            'From sunrise to late night, the energy never stops.',
            'MSTAR Airsoft Festival is more than an event - it is a once-in-a-lifetime experience filled with excitement, friendship, adventure, and memories that will bring you back year after year.',
          ],
        },
      ],
    },
    {
      slug: 'what-to-do-in-thailand',
      eyebrow: 'Travel Guide',
      title: 'What to Do in Thailand',
      description: 'Discover scenic attractions and memorable side trips to enjoy before or after the MSTAR Airsoft event.',
      sections: [
        {
          id: 'what-to-do-overview',
          title: 'Explore More of Thailand',
          paragraphs: [
            'Make the most of your trip with nearby nature, culture, and landmark destinations that add even more adventure to your MSTAR Airsoft experience.',
          ],
          bullets: [
            'Narong Waterfall',
            'Haew Narok Waterfall',
            'Khun Dan Prakarn Chon Dam',
            'Wat Maneewong',
            'Pak Chong',
            'Kaeng Khoi',
            'Wang Takrai National Park',
            'Khao Yai National Park',
            'Kayaking',
            'Food & Entertainment',
          ],
        },
        {
          id: 'narong-waterfall',
          title: 'Narong Waterfall',
          images: [
            {
              src: '/images/what-to-do-thailand/narong-waterfall.webp',
              alt: 'Narong Waterfall surrounded by tropical forest',
              title: 'Narong Waterfall',
            },
          ],
        },
        {
          id: 'haew-narok-waterfall',
          title: 'Haew Narok Waterfall',
          paragraphs: [
            "A dramatic waterfall destination for travelers who want to experience more of Thailand's lush forest scenery during their trip.",
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/haew-narok-waterfall.jpg',
              alt: 'Haew Narok Waterfall dropping through a steep rock face',
              title: 'Haew Narok Waterfall',
            },
          ],
        },
        {
          id: 'khun-dan-prakarn-chon-dam',
          title: 'Khun Dan Prakarn Chon Dam',
          paragraphs: [
            'A landmark stop known for wide scenic views and a memorable atmosphere that adds a different pace to your event journey.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/khun-dan-prakarn-chon-dam.webp',
              alt: 'Khun Dan Prakarn Chon Dam with surrounding hills and reservoir',
              title: 'Khun Dan Prakarn Chon Dam',
            },
          ],
        },
        {
          id: 'wat-maneewong',
          title: 'Wat Maneewong',
          paragraphs: [
            'A striking temple destination that offers a unique cultural stop alongside the natural and adventure experiences around the event.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/wat-maneewong.webp',
              alt: 'Wat Maneewong cave temple interior with ornate statues',
              title: 'Wat Maneewong',
            },
          ],
        },
        {
          id: 'pak-chong',
          title: 'Pak Chong',
          paragraphs: [
            "Pak Chong is a popular getaway area for travelers who want sweeping viewpoints, cool mountain scenery, local food stops, and easy access to some of the region's best outdoor experiences.",
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/pak-chong.avif',
              alt: 'Scenic mountain and forest view representing Pak Chong',
              title: 'Pak Chong',
            },
          ],
        },
        {
          id: 'kaeng-khoi',
          title: 'Kaeng Khoi',
          paragraphs: [
            'Kaeng Khoi offers a relaxed nature-focused stop with river scenery, waterfalls, and a quieter atmosphere for visitors looking to add a refreshing break to their event trip.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/kaeng-khoi.webp',
              alt: 'Waterfall destination representing Kaeng Khoi',
              title: 'Kaeng Khoi',
            },
          ],
        },
        {
          id: 'wang-takrai-national-park',
          title: 'Wang Takrai National Park',
          paragraphs: [
            'Wang Takrai National Park is a favorite for family-friendly outdoor fun, natural streams, green surroundings, and all-day adventure activities in a lush tropical setting.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/wang-takrai-national-park.jpg',
              alt: 'Outdoor park scenery representing Wang Takrai National Park',
              title: 'Wang Takrai National Park',
            },
          ],
        },
        {
          id: 'khao-yai-national-park',
          title: 'Khao Yai National Park',
          paragraphs: [
            "Khao Yai National Park is one of Thailand's most iconic natural destinations, known for dramatic landscapes, forest roads, wildlife encounters, and unforgettable day trips into the mountains.",
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/khao-yai-national-park.jpg',
              alt: 'Adventure landscape representing Khao Yai National Park',
              title: 'Khao Yai National Park',
            },
          ],
        },
        {
          id: 'kayaking',
          title: 'Kayaking',
          paragraphs: [
            'Kayaking adds another high-energy outdoor option for visitors who want moving water, fresh scenery, and a fun group activity between tournament days and nightlife.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/kayaking-rapids.webp',
              alt: 'Outdoor adventure scene representing kayaking near the event area',
              title: 'Kayaking',
            },
          ],
        },
        {
          id: 'food-and-entertainment',
          title: 'Food & Entertainment',
          paragraphs: [
            'After a full day of action, visitors can explore more local dining and nightlife experiences around the area.',
          ],
          images: [
            {
              src: '/images/what-to-do-thailand/nayhua-cafe.avif',
              alt: 'Nay Hua cafe destination image',
              title: 'Nay Hua cafe',
            },
            {
              src: '/images/what-to-do-thailand/cafe-laura-bar-and-restaurant.jpg',
              alt: 'Cafe Laura Bar and Restaurant destination image',
              title: 'Cafe Laura Bar and Restaurant',
            },
            {
              src: '/images/what-to-do-thailand/kin-do-funk.jpg',
              alt: 'Kin Do Funk destination image',
              title: 'Kin Do Funk',
            },
            {
              src: '/images/what-to-do-thailand/jasmine-restaurant.jpg',
              alt: 'Jasmine Restaurant destination image',
              title: 'Jasmine Restaurant',
            },
            {
              src: '/images/what-to-do-thailand/montreux-cafe-and-farm.webp',
              alt: 'Montreux Cafe and Farm destination image',
              title: 'Montreux Cafe and Farm',
            },
          ],
          bullets: [
            'Nay Hua cafe',
            'Cafe Laura Bar and Restaurant',
            'Kin Do Funk',
            'Jasmine Restaurant',
            'Montreux Cafe and Farm',
          ],
        },
      ],
    },
    {
      slug: 'immigration',
      eyebrow: 'Travel Guide',
      title: 'Immigration',
      description: 'Placeholder overview boxes for entry process, checkpoints, and travel document readiness.',
      cards: [
        {
          id: 'entry-flow',
          title: 'Entry Flow',
          summary: 'Placeholder box for airport entry steps and queue expectations.',
          imagePath: '/banners/event-steel.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Immigration box',
        },
        {
          id: 'documents-check',
          title: 'Documents Check',
          summary: 'Placeholder box for document review, copies, and arrival readiness.',
          imagePath: '/banners/event-black.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Immigration box',
        },
      ],
    },
    {
      slug: 'how-to-pack',
      eyebrow: 'Travel Guide',
      title: 'How to Pack',
      description: 'Placeholder packing boxes for gear separation, clothing planning, and travel-safe storage.',
      cards: [
        {
          id: 'gear-separation',
          title: 'Gear Separation',
          summary: 'Placeholder box for dividing field equipment, clothing, and travel documents.',
          imagePath: '/banners/event-night.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Packing box',
        },
        {
          id: 'bag-setup',
          title: 'Bag Setup',
          summary: 'Placeholder box for carry-on planning, checked baggage, and quick-access items.',
          imagePath: '/banners/event-urban.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Packing box',
        },
      ],
    },
    {
      slug: 'thailand-laws-and-regulations',
      eyebrow: 'Travel Guide',
      title: 'Thailand Laws and Regulations',
      description: 'Placeholder compliance boxes for local rules, conduct expectations, and event-related awareness.',
      cards: [
        {
          id: 'local-rules',
          title: 'Local Rules',
          summary: 'Placeholder box for general conduct, public behavior, and trip-awareness notes.',
          imagePath: '/banners/event-final.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Compliance box',
        },
        {
          id: 'equipment-awareness',
          title: 'Equipment Awareness',
          summary: 'Placeholder box for transport, storage, and field-related compliance reminders.',
          imagePath: '/banners/event-ridge.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Compliance box',
        },
      ],
    },
    {
      slug: 'faq',
      eyebrow: 'Support',
      title: 'FAQ',
      description: 'Placeholder FAQ sections are set up here for the most common travel, event, and registration questions.',
      cards: [
        {
          id: 'faq-registration',
          title: 'Registration Questions',
          summary: 'Placeholder question group for sign-up flow, slots, team setup, and booking status.',
          imagePath: '/banners/event-black.svg',
          badge: 'FAQ',
          placeholderLabel: 'FAQ answer box',
        },
        {
          id: 'faq-travel',
          title: 'Travel Questions',
          summary: 'Placeholder question group for arriving in Thailand, moving gear, and preparing for the trip.',
          imagePath: '/banners/event-urban.svg',
          badge: 'FAQ',
          placeholderLabel: 'FAQ answer box',
        },
        {
          id: 'faq-matchday',
          title: 'Match-Day Questions',
          summary: 'Placeholder question group for schedule flow, safety expectations, and field-day readiness.',
          imagePath: '/banners/event-night.svg',
          badge: 'FAQ',
          placeholderLabel: 'FAQ answer box',
        },
      ],
    },
    {
      slug: 'contact',
      eyebrow: 'Contact',
      title: 'Contact',
      description: 'For general inquiry, please send us an email and we will get back to you as soon as possible.',
      sections: [
        {
          id: 'contact-email',
          title: 'Contact Information',
          links: [
            { label: 'General Inquiry: info@mstarairsoft.com', href: 'mailto:info@mstarairsoft.com' },
            { label: 'Support and Issues: support@mstarairsoft.com', href: 'mailto:support@mstarairsoft.com' },
            { label: 'Media and Press: press@mstarairsoft.com', href: 'mailto:press@mstarairsoft.com' },
          ],
        },
      ],
    },
    {
      slug: 'terms-and-conditions',
      eyebrow: 'Legal',
      title: 'Terms & Conditions',
      description: '',
      sections: termsLanguageVersions[0].sections,
      languageVersions: termsLanguageVersions,
    },
    {
      slug: 'cancellation-and-refund',
      eyebrow: 'Legal',
      title: 'Cancellation and Refund',
      description: '',
      sections: cancellationRefundLanguageVersions[0].sections,
      languageVersions: cancellationRefundLanguageVersions,
    },
    {
      slug: 'privacy',
      eyebrow: 'Legal',
      title: 'Privacy',
      description: 'How MSTAR Airsoft (Force of Conquest) collects, uses, stores, and protects personal information.',
      languageVersions: privacyLanguageVersions,
      sections: [
        {
          id: 'privacy-intro',
          title: 'MSTAR Airsoft (Force of Conquest) Privacy Policy',
          paragraphs: [
            'Effective Date: May 20, 2026',
            'Operated By: Mstar (Asia) Co., Ltd.',
            'Mstar (Asia) Co., Ltd. ("MSTAR," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, store, disclose, and safeguard information obtained through the MSTAR Airsoft (Force of Conquest) website, mobile application, event registration systems, ticketing platforms, campground services, and related event operations.',
            'By accessing or using our website, mobile application, services, or participating in MSTAR Airsoft events, you acknowledge and agree to the terms of this Privacy Policy.',
          ],
        },
        {
          id: 'privacy-information-collected',
          title: '1. Information We Collect',
          paragraphs: [
            'We may collect personal information directly from users, automatically through our systems, or from third-party partners and service providers.',
          ],
          bullets: [
            '1.1 Personal Information may include full name, nationality, passport or identification details, date of birth, phone number, email address, residential address, emergency contact information, billing and payment information, event registration details, campground booking information, equipment shipment details, travel and transportation information, and social media account information when voluntarily connected.',
            '1.2 Technical & Device Information may include IP address, browser type, device identifiers, operating system, mobile device information, app usage statistics, website activity and interaction data, cookies and tracking technologies, and GPS or location data when enabled.',
            '1.3 Media & User Content may include photographs, video recordings, livestream footage, user-generated content, gameplay footage, comments, messages, reviews, media submissions, and uploaded content.',
          ],
        },
        {
          id: 'privacy-how-we-use',
          title: '2. How We Use Your Information',
          paragraphs: [
            'We use collected information for legitimate business and operational purposes, including:',
          ],
          bullets: [
            'Event registration and participant verification',
            'Ticket processing and campground reservations',
            'Customer support and communication',
            'Event safety and security monitoring',
            'Identity verification and fraud prevention',
            'Equipment shipment coordination',
            'Payment processing',
            'Mobile app functionality and account management',
            'Personalized user experience',
            'Marketing, advertising, and promotional campaigns',
            'Event photography, livestreaming, and media production',
            'Statistical analysis and service improvement',
            'Legal compliance and enforcement of policies',
          ],
        },
        {
          id: 'privacy-location-gps',
          title: '3. Location & GPS Data',
          paragraphs: [
            'When permitted by users, the mobile application may collect location data to assist with navigation and event mapping, improve user safety and emergency response, provide event notifications and activity updates, and enable location-based features and services.',
            'Users may disable location access through their device settings; however, certain app features may become limited.',
          ],
        },
        {
          id: 'privacy-cookies',
          title: '4. Cookies & Tracking Technologies',
          paragraphs: [
            'Our website and mobile application may use cookies, analytics tools, pixels, and similar technologies to:',
          ],
          bullets: [
            'Improve website performance',
            'Remember user preferences',
            'Analyze traffic and engagement',
            'Personalize content and advertisements',
            'Enhance platform functionality',
          ],
        },
        {
          id: 'privacy-cookies-note',
          title: 'Cookie Controls',
          paragraphs: [
            'Users may modify browser settings to disable cookies, though some services may not function properly.',
          ],
        },
        {
          id: 'privacy-sharing',
          title: '5. Sharing of Information',
          paragraphs: [
            'We may share information with event partners and service providers, payment processors, security personnel and emergency responders, government authorities when legally required, logistics and transportation providers, marketing and advertising partners, IT and cloud service providers, sponsors, and authorized affiliates.',
            'We do not sell personal information to unauthorized third parties.',
          ],
        },
        {
          id: 'privacy-transfers',
          title: '6. International Data Transfers',
          paragraphs: [
            'As MSTAR Airsoft operates internationally, user information may be transferred, processed, or stored in multiple countries where our service providers, partners, or operational systems are located.',
            'By using our services, users consent to such international data transfers where permitted by law.',
          ],
        },
        {
          id: 'privacy-security',
          title: '7. Data Security',
          paragraphs: [
            'We implement commercially reasonable technical, administrative, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, misuse, or destruction.',
            'Security measures may include:',
          ],
          bullets: [
            'Encrypted data transmission',
            'Secure payment processing',
            'Access controls and authentication systems',
            'CCTV monitoring and operational security',
            'Internal data protection procedures',
          ],
        },
        {
          id: 'privacy-security-note',
          title: 'Security Limitations',
          paragraphs: [
            'However, no electronic transmission or storage system can be guaranteed to be completely secure.',
          ],
        },
        {
          id: 'privacy-user-accounts',
          title: '8. User Accounts & Mobile Application',
          paragraphs: [
            'Users may create accounts through the MSTAR website or mobile application.',
            'Users are responsible for maintaining account confidentiality, protecting login credentials, restricting unauthorized access to their account, and providing accurate information.',
            'MSTAR reserves the right to suspend or terminate accounts involved in fraud, abuse, illegal activity, or policy violations.',
          ],
        },
        {
          id: 'privacy-media-consent',
          title: '9. Media Consent & Event Recording',
          paragraphs: [
            'By attending MSTAR Airsoft (Force of Conquest), participants acknowledge and agree that event areas may be photographed or video recorded, gameplay footage may be livestreamed globally, and participant images, voice, likeness, and appearance may appear in promotional materials, documentaries, social media, advertising campaigns, and future event marketing.',
            'Mstar (Asia) Co., Ltd. retains the unrestricted right to use such content without additional compensation unless prohibited by applicable law.',
          ],
        },
        {
          id: 'privacy-third-party',
          title: '10. Third-Party Services & Links',
          paragraphs: [
            'Our website and mobile application may contain links to third-party websites, payment systems, social media platforms, booking systems, sponsors, or partner services.',
            'MSTAR is not responsible for the privacy practices, content, or security of third-party platforms.',
            'Users are encouraged to review the privacy policies of external services before providing information.',
          ],
        },
        {
          id: 'privacy-children',
          title: "11. Children's Privacy",
          paragraphs: [
            'MSTAR does not knowingly collect personal information from children without appropriate parental or guardian consent where required by law.',
            'Participants under legal age may require parental authorization to register or participate in event activities.',
          ],
        },
        {
          id: 'privacy-retention',
          title: '12. Data Retention',
          paragraphs: [
            'We retain personal information for as long as necessary to operate and manage event services, comply with legal obligations, resolve disputes, enforce agreements, and maintain business and operational records.',
            'Retention periods may vary depending on applicable laws and operational requirements.',
          ],
        },
        {
          id: 'privacy-user-rights',
          title: '13. User Rights',
          paragraphs: [
            'Subject to applicable laws, users may have the right to access personal information, request corrections or updates, request deletion of personal information, withdraw consent where applicable, object to certain processing activities, and request data portability where legally applicable.',
            'Requests may be subject to identity verification and legal limitations.',
          ],
        },
        {
          id: 'privacy-surveillance',
          title: '14. Security Cameras & Surveillance',
          paragraphs: [
            'For participant safety and operational security, MSTAR event grounds, campgrounds, staging zones, parking areas, and operational facilities may utilize CCTV monitoring and security surveillance systems.',
            'Recorded footage may be used for safety enforcement, incident investigations, security operations, legal compliance, and event management.',
          ],
        },
        {
          id: 'privacy-changes',
          title: '15. Changes to This Privacy Policy',
          paragraphs: [
            'Mstar (Asia) Co., Ltd. reserves the right to modify or update this Privacy Policy at any time without prior notice.',
            'Updated versions will be published through the official website and/or mobile application.',
            'Continued use of our services following updates constitutes acceptance of the revised policy.',
          ],
        },
        {
          id: 'privacy-governing-law',
          title: '16. Governing Law',
          paragraphs: [
            'This Privacy Policy shall be governed and interpreted in accordance with the laws of the Kingdom of Thailand.',
            'Any disputes relating to this Privacy Policy shall fall under the jurisdiction of the courts of Thailand.',
          ],
        },
        {
          id: 'privacy-contact',
          title: '17. Contact Information',
          paragraphs: [
            'Mstar (Asia) Co., Ltd.',
            'Official Event: MSTAR Airsoft (Force of Conquest)',
            'For questions regarding this Privacy Policy, data protection matters, event registration, or account support, please contact the official MSTAR support team through the authorized website, mobile application, or customer support channels.',
          ],
        },
      ],
    },
    {
      slug: 'complaints',
      eyebrow: 'Support',
      title: 'Complaints',
      description: 'How to raise event, service, booking, conduct, or operational complaints with the MSTAR support team.',
      sections: [
        {
          id: 'complaints-overview',
          title: 'Complaints Procedure',
          paragraphs: [
            'MSTAR Airsoft (Force of Conquest) aims to handle complaints fairly, respectfully, and as quickly as possible. This page explains how participants, guests, vendors, media, and partners can report concerns relating to registration, event operations, campground services, conduct, safety, media, logistics, or customer support.',
          ],
        },
        {
          id: 'complaints-submit',
          title: 'How to Submit a Complaint',
          paragraphs: [
            'Please contact the official MSTAR support team through the website or other authorized communication channels and include as much detail as possible so the issue can be reviewed quickly.',
          ],
          bullets: [
            'Your full name and contact details',
            'Registration or booking reference when available',
            'The date, time, and location of the issue',
            'A clear summary of the complaint',
            'Names of any staff, teams, or participants involved if known',
            'Photos, screenshots, or supporting documents where relevant',
          ],
        },
        {
          id: 'complaints-review',
          title: 'Review & Response',
          paragraphs: [
            'After a complaint is received, the MSTAR team may review event records, registration details, staff reports, footage, or other relevant information. Response time may vary depending on the seriousness and complexity of the issue, but operational and safety complaints will be prioritized.',
          ],
        },
        {
          id: 'complaints-conduct',
          title: 'Conduct, Safety, and On-Site Incidents',
          paragraphs: [
            'If your complaint involves player conduct, staff conduct, harassment, unsafe gameplay, medical concerns, or immediate safety risks, report it to marshals, security personnel, or event staff on site as soon as possible so action can be taken without delay.',
          ],
        },
        {
          id: 'complaints-resolution',
          title: 'Resolution Options',
          paragraphs: [
            'Depending on the issue, MSTAR may provide clarification, operational follow-up, corrective action, access review, policy enforcement, or another appropriate resolution. Outcomes are determined based on the available information, applicable policies, safety considerations, and legal obligations.',
          ],
        },
        {
          id: 'complaints-contact',
          title: 'Contact Information',
          paragraphs: [
            'Mstar (Asia) Co., Ltd.',
            'Official Event: MSTAR Airsoft (Force of Conquest)',
            'For complaint support, please contact the official MSTAR support team through the event website or authorized communication channels.',
          ],
          links: [
            { label: 'support@mstarairsoft.com', href: 'mailto:support@mstarairsoft.com' },
          ],
        },
      ],
    },
  ],
  vendorPage: {
    eyebrow: 'Force of Conquest 2027',
    title: 'Become a Vendor',
    sectionTitle: 'Stallholder Application Form',
    paragraphs: [
      'If you would like to run a stall or exhibit at Force of Conquest 2027, please fill out the application form below.',
      'Once submitted, your application will be reviewed by a member of our team and you will receive an email with further instructions.',
      'Completing this form does not guarantee entry to the event. Please wait to hear from us.',
    ],
    buttonLabel: 'Open Vendor Application Form',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScIAKOLoJzT32QE8tl61qmdrfBoKZ3gmKlLgZ0_pW-XBboaSw/viewform',
  },
  sponsorPage: {
    scopeSection: {
      heading: 'Unparalleled Scope & Scale',
      pillText: 'EVENT OVERVIEW',
      leftTitle: 'Event Highlights',
      bullets: [
        '160 Rai Arena: Expansive 256,000 sq.m. professional game zone.',
        'International Competition: Top-tier global tactical teams competing.',
        'Massive Vendor Village: Dedicated tactical and F&B marketplace areas.',
        'Brand Exhibition Zones: Leading regional & international weapon makers.',
      ],
      rightTitle: 'Target Audience Profile',
      cards: [
        {
          title: 'Tactical Community',
          body: 'Active players, collectors, & gear enthusiasts.',
          iconLabel: 'TC',
        },
        {
          title: 'Outdoor Enthusiasts',
          body: 'Military simulation collectors & survival lifestyle fans.',
          iconLabel: 'OE',
        },
        {
          title: 'General Public',
          body: 'Local families, regional spectators, and visitors.',
          iconLabel: 'GP',
        },
        {
          title: 'Global Media',
          body: 'Content creators, specialized sports media & international press.',
          iconLabel: 'GM',
        },
      ],
    },
    vendorSection: {
      heading: 'Vendor & Commercial Zones',
      pillText: 'VENDOR PROGRAM',
      contentTitle: 'Diverse Commercial Spaces',
      body: 'Position your brand directly at the heart of user excitement. Multiple designated areas cater to diverse vendor types to keep the traffic flow constantly high.',
      bullets: [
        'Premium Retail Hubs: Gun stores, tactical apparel, gear shops.',
        'F&B Concessions: Major food trucks, beverage booths, quick service.',
        'Technical Services: Custom repair garages, parts stations, upgrades.',
      ],
      imagePath: '/images/events/force-of-conquest/facilities-food-vendors.webp',
      imageAlt: 'Night market food and vendor area with event guests',
    },
    foodSection: {
      heading: 'Food & Beverage Zone',
      pillText: 'VENDOR PROGRAM',
      cards: [
        {
          title: 'Who is this for?',
          bullets: [
            'Food Booths',
            'Beverage Stands',
            'Mobile Coffee Bar',
            'Desert & Sweets',
            'Ice Cream Carts',
            'Convenience Corner',
          ],
        },
        {
          title: 'F&B Benefits & Projections',
          bullets: [
            'Constant Foot Traffic: Continuous flow of active hungry/thirsty gamers.',
            'Repeat Purchases: Multi-day event requires continuous hydration & nutrition.',
            'Longer Stay Times: Chill lounge zones next to the stage drive food sales.',
          ],
        },
      ],
    },
    retailSection: {
      heading: 'Retail & Airsoft Marketplace',
      pillText: 'VENDOR PROGRAM',
      imagePath: '/images/events/force-of-conquest/c7ddb663-e7b8-47e9-8063-e4e8730a1ffb.jfif',
      imageAlt: 'Airsoft player aiming a tactical replica with mounted optics',
      contentTitle: 'Prime Tactical Market',
      body: 'Meet the largest gathering of highly passionate, high-budget airsoft weapon collectors and gear buyers in the ASEAN region.',
      cards: [
        {
          title: 'Launchpad',
          body: 'Unveil new weapon variants & accessories directly to core fans.',
          iconLabel: 'LP',
        },
        {
          title: 'Direct Sales',
          body: 'High ticket purchase conversion rate on unique gears.',
          iconLabel: 'DS',
        },
      ],
    },
  },
  signIn: {
    title: 'SIGN IN',
    fields: [
      { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', required: true },
    ],
    benefits: [
      'Faster tournament registration',
      'Save team and contact details',
      'Track event status and roster updates',
    ],
  },
  createAccount: {
    title: 'CREATE ACCOUNT',
    fields: [
      { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Create password', required: true },
      { id: 'firstName', label: 'First name', type: 'text', placeholder: 'First name', required: true },
      { id: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name', required: true },
      { id: 'address1', label: 'Address 1', type: 'text', placeholder: 'Street address', required: true },
      { id: 'companyName', label: 'Company name optional', type: 'text', placeholder: 'Company name', required: false },
      { id: 'city', label: 'Suburb/City', type: 'text', placeholder: 'City', required: true },
      { id: 'stateProvince', label: 'State/Province', type: 'text', placeholder: 'State or province', required: true },
      { id: 'zip', label: 'Zip/Postcode', type: 'text', placeholder: 'Zip or postcode', required: true },
      { id: 'country', label: 'Country', type: 'text', placeholder: 'Country', required: true },
      { id: 'phone', label: 'Phone number', type: 'tel', placeholder: '+66 00 000 0000', required: true },
    ],
  },
  countryRegions,
};



