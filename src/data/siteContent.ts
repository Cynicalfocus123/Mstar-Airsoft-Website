import logoPath from '../assets/mstar-airsoft-logo.png';
import type { SiteContent } from '../types/siteContent';
import { countryRegions } from './countries';

export const siteContent: SiteContent = {
  identity: {
    name: 'Mstar Airsoft',
    logoPath,
    tagline: 'Competitive tactical airsoft events',
  },
  navLinks: [
    { label: 'Home', href: '#/home' },
    { label: 'About', href: '#/about' },
    { label: 'Events', href: '#/events' },
    { label: 'Ticket', href: '#/ticket' },
    { label: 'Things to Know', href: '#/things-to-know' },
    { label: 'Rules', href: '#/rules-and-regulation' },
    { label: 'Gallery', href: '#/gallery' },
  ],
  authLinks: [
    { label: 'Login', href: '#/signin' },
    { label: 'Sign Up', href: '#/signup' },
  ],
  heroSlides: [
    {
      id: 'gold-rush',
      imagePath: '/banners/gold-rush.svg',
      posterPath: '/images/home-hero-poster.webp',
      videoMp4Path: 'https://pub-f5e1fd2c513f432b9abc4e51398be430.r2.dev/Largest%20Airsoft%20Game%20in%20Southeast%20Asia%20-%20youtube.mp4',
      mobileVideoMp4Path: 'https://pub-f6fca3f41b8943aaac45cf128d4740d7.r2.dev/mobile%20video%20test%201.mp4',
      eyebrow: 'Featured Tournament',
      title: 'Gold Rush Open',
      body: 'Squad-based tournament registration is open now for the next Mstar Airsoft operation.',
      cta: { label: 'Sign Up Now', href: '#/signup', variant: 'primary' },
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
      { label: 'View Events', href: '#/events', variant: 'secondary' },
    ],
    stats: [
      { value: '5v5', label: 'Squad format' },
      { value: 'CQB', label: 'Scenario rounds' },
      { value: '2026', label: 'Season ready' },
    ],
  },
  about: {
    eyebrow: 'Built For Teams',
    title: 'Experience the Largest Airsoft Festival in Southeast Asia — where adrenaline, entertainment, and adventure come together day and night.',
    body:
      'The Mstar Airsoft Tournament delivers an immersive battlefield experience set in Thailand’s stunning tropical rainforest, complete with natural creeks and realistic combat environments that replicate real tactical scenarios. Beyond the battlefield, guests can enjoy the vibrant atmosphere of an international music festival featuring global food vendors, carnival attractions, live entertainment, and adventure activities for all ages. Step into a world of nonstop excitement, competition, and unforgettable experiences surrounded by the breathtaking beauty of Thailand.',
    highlights: [
      'LIVE BAND, EDM ZONE, INTERNATIONAL FOOD COURT, CARNIVAL',
      'ZIP-LINE, ATV RIDE, JUNGLE TOUR',
      'FUNS & GAME, CAMPING, BBQ CONTEST',
    ],
    backgroundImagePath: '/images/about-background.webp',
    mobileBackgroundImagePath: '/images/about-background.webp',
  },
  packageOffer: {
    eyebrow: 'Stay and Play',
    title: 'Package Offer',
    offers: [
      {
        label: 'Early Bird',
        price: 'Ticket Price - $120.00',
        details: ['Early Bird Ends - November 20, 2026'],
        perks: [
          'Live Music',
          'Food Court',
          '2 Person Tent',
          'Camping Equipment',
        ],
      },
      {
        label: 'Regular Package',
        price: 'Ticket Price - $160.00',
        details: ['3 Days / 2 Nights'],
        perks: [
          'Live Music',
          'Food Court',
          '2 Person Tent',
          'Camping Equipment',
        ],
      },
    ],
  },
  ticketPage: {
    eyebrow: 'Stay and Play',
    title: 'Ticket',
    description: 'Choose your event package and reserve the camping extras you need for the full operation.',
    packages: [
      {
        label: 'Early Bird',
        price: '$120.00 USD',
        details: ['2027', 'To Be Announced Soon', '3 Days / 2 Nights'],
        perks: ['Live Music', 'Food Court', '2 Person Tent', 'Camping Equipment'],
      },
      {
        label: 'Normal Ticket',
        price: '$160.00 USD',
        details: ['Jan 8-10, 2027', '3 Days / 2 Nights'],
        perks: ['Live Music', 'Food Court', '2 Person Tent', 'Camping Equipment'],
      },
    ],
    addons: [
      { title: '2 Person Tent', price: '$15 USD Per Day' },
      { title: 'Pillow / Blanket', price: '$5 USD' },
      { title: 'Matress', price: '$5 USD' },
    ],
  },
  events: [
    {
      id: 'urban-rush',
      title: 'Force of Conquest',
      date: 'Jan 8-10, 2027',
      time: '09:00 AM - 05:30 PM',
      location: 'Bangkok Tactical Field',
      entryFee: '$160.00 USD',
      teams: 'Alpha Coalition vs Bravo Unit',
      attendance: '2,000 players',
      status: 'Registration Open',
      summary: 'A fast-paced qualifier built around urban lanes, short rotations, and clean team scoring.',
      overview:
        'Urban Rush Qualifier is a controlled tournament day for squads that want fast objective cycles, clear marshal calls, and structured scoring. Teams rotate through urban lanes, capture points, and timed pressure rounds before final bracket placement.',
      imagePath: '/banners/event-urban.svg',
    },
    {
      id: 'night-grid',
      title: 'Night Grid Invitational',
      date: '2027',
      time: '04:00 PM - 11:30 PM',
      location: 'Eastern Training Zone',
      entryFee: '$120.00 USD',
      teams: 'Night Squad vs Grid Command',
      attendance: '1,200 players',
      status: 'To Be Announced Soon',
      summary: 'Low-light missions with tight objective windows and strict safety control.',
      overview:
        'Night Grid Invitational uses low-light lanes, visible team markings, and marshal-held pause points. The format rewards communication, disciplined movement, and clean hit calling across timed mission sets.',
      imagePath: '/banners/event-night.svg',
    },
    {
      id: 'final-front',
      title: 'Final Front Championship',
      date: '2027',
      time: '08:00 AM - 06:00 PM',
      location: 'Mstar Event Arena',
      entryFee: '$120.00 USD',
      teams: 'Qualified Teams Bracket',
      attendance: '2,500 players',
      status: 'To Be Announced Soon',
      summary: 'Season-end championship bracket for qualified teams and invited squads.',
      overview:
        'Final Front Championship closes the season with seeded brackets, staged finals, field briefings, and objective-based scoring. Qualified teams should arrive roster-ready with approved gear and captain check-in complete.',
      imagePath: '/banners/event-final.svg',
    },
    {
      id: 'ridge-line',
      title: 'Ridge Line Assault',
      date: 'September 19, 2026',
      time: '10:00 AM - 05:00 PM',
      location: 'Northern Ridge Field',
      entryFee: 'THB 1,800 / player',
      teams: 'Ridge Command vs Valley Response',
      attendance: '1,600 players',
      status: 'Roster Preview',
      summary: 'Outdoor objective play with longer lanes, hold points, and rotating command roles.',
      overview:
        'Ridge Line Assault expands the field with outdoor control points, longer rotations, and command role swaps. The event favors patient movement, reliable squad spacing, and objective timing.',
      imagePath: '/banners/event-ridge.svg',
    },
    {
      id: 'steel-yard',
      title: 'Steel Yard Clash',
      date: 'October 10, 2026',
      time: '09:30 AM - 04:30 PM',
      location: 'Industrial Yard Arena',
      entryFee: 'THB 1,600 / player',
      teams: 'Steel Team vs Yard Team',
      attendance: '900 players',
      status: 'Coming Soon',
      summary: 'Compact arena tournament designed for quick pushes and precise communication.',
      overview:
        'Steel Yard Clash is a compact arena operation with short resets, fast flanks, and tight objective windows. Captains should prepare for rapid match turnaround and close-range discipline.',
      imagePath: '/banners/event-steel.svg',
    },
    {
      id: 'black-zone',
      title: 'Black Zone Finals',
      date: 'November 15, 2026',
      time: '08:30 AM - 07:00 PM',
      location: 'Mstar Main Field',
      entryFee: 'THB 12,000 / team',
      teams: 'Finalists Red vs Finalists Gold',
      attendance: '3,000 players',
      status: 'Invite Watch',
      summary: 'Final high-pressure tournament with ranked seeds, finals staging, and broadcast-ready timing.',
      overview:
        'Black Zone Finals brings the highest-ranked squads into a finals format with staged entrances, controlled briefings, and pressure-tested mission rules. Expect strict timing and no loose equipment checks.',
      imagePath: '/banners/event-black.svg',
    },
  ],
  registrationFields: [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+66 00 000 0000', required: true },
    { id: 'teamName', label: 'Team name', type: 'text', placeholder: 'Team callsign', required: true },
    { id: 'players', label: 'Number of players', type: 'number', placeholder: '5', required: true },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Event, roster, or special notes', required: false },
  ],
  gameTerrain: {
    eyebrow: 'Game Terrain',
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
        { label: 'Home', href: '#/home' },
        { label: 'About', href: '#/about' },
        { label: 'Things to Know', href: '#/things-to-know' },
        { label: 'Events', href: '#/events' },
        { label: 'FAQ', href: '#/faq' },
      ],
    },
    {
      title: 'Travel Planning',
      links: [
        { label: 'What to Do in Thailand', href: '#/what-to-do-in-thailand' },
        { label: 'Travel Preparation', href: '#/travel-preparation' },
        { label: 'Immigration Visa', href: '#/immigration-visa' },
        { label: 'Ship Your Equipment', href: '#/equipment' },
      ],
    },
    {
      title: 'Site Links',
      links: [
        { label: 'Rules', href: '#/rules-and-regulation' },
        { label: 'Gallery', href: '#/gallery' },
        { label: 'Contact', href: '#/contact' },
        { label: 'Terms & Conditions', href: '#/terms-and-conditions' },
        { label: 'Privacy', href: '#/privacy' },
        { label: 'Complaints', href: '#/complaints' },
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
          href: '#/how-to-get-to-the-event',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'field-day-rhythm',
          title: 'Immigration Visa',
          summary: 'Placeholder guidance box for what players should expect before, during, and after match day.',
          imagePath: '/images/things-to-know/immigration-visa.png',
          href: '#/immigration-visa',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'support-checklist',
          title: 'How to Ship Your Equipment to Us',
          summary: 'Placeholder guidance box for the practical items teams should line up before travel.',
          imagePath: '/images/things-to-know/equipment.png',
          href: '#/equipment',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'rules-and-regulation',
          title: 'Rules & Regulation',
          summary: 'Official event rules covering protective gear, weapon checks, gameplay standards, and player conduct.',
          imagePath: '/images/things-to-know/regulation.png',
          href: '#/rules-and-regulation',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'accommodation-and-campground',
          title: 'Accommodation & Campground',
          summary: 'Campground facilities, equipment rental, and festival-style overnight planning for players and teams.',
          imagePath: '/images/things-to-know/campground.png',
          href: '#/accommodation-and-campground',
          badge: 'Guide',
          placeholderLabel: 'Open guide',
        },
        {
          id: 'activity',
          title: 'Activity',
          summary: 'Outdoor adventure, international food, music, nightlife, and festival entertainment around the event.',
          imagePath: '/images/what-to-do-thailand/kayaking-rapids.jpg',
          href: '#/activity',
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
            'Once you arrive at the Saraburi Bus Terminal, you will find a designated minivan displaying the sign “MSTAR Airsoft Event.”',
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
      eyebrow: 'Travel Guide',
      title: 'Equipment',
      description: 'Shipping rules, customs prep, and airport handling steps for bringing tournament equipment to Thailand.',
      sections: [
        {
          id: 'equipment-overview',
          title: 'How to Ship Your Equipment for the Airsoft Tournament',
          paragraphs: [
            'All participants are required to ship their airsoft equipment to our office in Thailand at least 3 weeks prior to the tournament date to allow sufficient time for customs clearance, inspection, and transportation arrangements.',
          ],
        },
        {
          id: 'equipment-required-items',
          title: 'Equipment Required to Be Shipped in Advance',
          paragraphs: [
            'The following items must be shipped prior to arrival:',
          ],
          bullets: [
            'All types of airsoft guns with orange/red safety markings and user manuals',
            'All ammunition, including biodegradable plastic BBs',
            'Air tanks must be completely empty with caps removed',
            'Tactical gear, including helmets, body armor, gloves, knee pads, and military uniforms',
          ],
        },
        {
          id: 'packing-shipping-instructions',
          title: 'Packing & Shipping Instructions',
          paragraphs: [
            'To ensure smooth customs processing and safe delivery, please follow the instructions below:',
          ],
          bullets: [
            'Use high-quality protective packaging materials to secure your equipment during transit',
            'Clearly declare all items being imported into Thailand',
            'Attach the official MSTAR Airsoft approval letter to the outside of the shipping box',
            'The Bill of Lading or shipping invoice must clearly specify the type of airsoft gun, model number, total quantity of units, ammunition details, and a list of all additional equipment included in the shipment',
            'For multiple boxes, clearly label each package as Box 1 of 3, Box 2 of 3, and Box 3 of 3',
          ],
        },
        {
          id: 'emergency-shipment-procedures',
          title: 'Emergency Shipment Procedures',
          paragraphs: [
            'If you are unable to ship your equipment 3 weeks in advance and plan to travel with your airsoft equipment by air, you must notify the MSTAR team at least 5 days before departure.',
            'Before boarding your flight:',
          ],
          bullets: [
            'Inform your airline security department in your home country that you are traveling with airsoft tournament equipment for Thailand',
            'Present the official MSTAR approval letter to airline security personnel',
            'Your airline security team may transport the equipment separately according to airline and airport regulations',
          ],
        },
        {
          id: 'arrival-thailand-equipment',
          title: 'Upon Arrival in Thailand',
          bullets: [
            'Proceed to airport security and present your MSTAR approval letter',
            'Inform airport authorities that your equipment was transported separately',
            'Airport security officials will inspect and verify the shipment documentation',
            'Your equipment will be secured and safely stored until collected by MSTAR staff',
            'MSTAR personnel will transport your equipment directly to the designated airsoft field',
          ],
        },
        {
          id: 'equipment-important-notice',
          title: 'Important Notice',
          paragraphs: [
            'For safety and legal compliance, participants are not permitted to handle or transport airsoft equipment outside of the official event premises.',
          ],
          bullets: [
            'All airsoft equipment may only be handled within the designated airsoft field and event area',
            'After the tournament concludes, MSTAR staff will transport your equipment back to the airport for your departing flight',
            'You will receive a WhatsApp notification once your equipment arrives at the airport',
            'Participants must check in with airport security to verify and confirm the collection of their equipment before departure',
          ],
        },
      ],
    },
    {
      slug: 'rules-and-regulation',
      eyebrow: 'Event Guide',
      title: 'Rules & Regulation',
      description: 'Official gameplay, safety, chronograph, and conduct requirements for MSTAR Airsoft - Force of Conquest.',
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
          title: 'Camping Equipment Rental',
          paragraphs: [
            'For the convenience of international travelers and participants, rental equipment is available directly at the campground:',
          ],
          bullets: [
            '2-Person Tent - 20 EUR per night',
            '4-Person Tent - 30 EUR per night',
            'BBQ Stove - 20 EUR per night',
            'Lantern - 10 EUR per night',
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
              src: '/images/what-to-do-thailand/khao-yai-national-park.jpg',
              alt: 'ATV ride activity at the MSTAR event',
              title: 'ATV Ride',
            },
            {
              src: '/images/activities/zip-line.png',
              alt: 'Zip line activity at the MSTAR event',
              title: 'Zip Line',
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
            'Zipline attractions across natural landscapes',
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
            'A dramatic waterfall destination for travelers who want to experience more of Thailand’s lush forest scenery during their trip.',
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
            'Pak Chong is a popular getaway area for travelers who want sweeping viewpoints, cool mountain scenery, local food stops, and easy access to some of the region’s best outdoor experiences.',
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
              src: '/images/what-to-do-thailand/kaeng-khoi.jpg',
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
            'Khao Yai National Park is one of Thailand’s most iconic natural destinations, known for dramatic landscapes, forest roads, wildlife encounters, and unforgettable day trips into the mountains.',
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
              src: '/images/what-to-do-thailand/kayaking-rapids.jpg',
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
      slug: 'travel-preparation',
      eyebrow: 'Travel Guide',
      title: 'Travel Preparation',
      description: 'Placeholder pre-trip planning boxes for flights, documents, bookings, and event readiness.',
      cards: [
        {
          id: 'documents',
          title: 'Documents',
          summary: 'Placeholder box for passport, booking, and tournament paperwork checks.',
          imagePath: '/banners/event-ridge.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Preparation box',
        },
        {
          id: 'arrival-plan',
          title: 'Arrival Plan',
          summary: 'Placeholder box for airport transfers, check-in timing, and first-night logistics.',
          imagePath: '/banners/event-final.svg',
          badge: 'Placeholder',
          placeholderLabel: 'Preparation box',
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
      slug: 'terms-and-conditions',
      eyebrow: 'Legal',
      title: 'Terms & Conditions',
      description: 'Event participation terms, safety requirements, and legal conditions for MSTAR Airsoft (Force of Conquest).',
      sections: [
        {
          id: 'terms-intro',
          title: 'MSTAR Airsoft (Force of Conquest)',
          paragraphs: [
            'Promoter: Mstar (Asia) Co., Ltd.',
            'These Terms & Conditions govern participation in the MSTAR Airsoft (Force of Conquest) event, including all related activities, campground access, competitions, entertainment zones, vendor areas, and operational facilities. By registering, attending, participating, or entering the event premises, all participants, spectators, vendors, sponsors, media personnel, and guests acknowledge and agree to comply with the following Terms & Conditions.',
          ],
        },
        {
          id: 'terms-general-event-policy',
          title: '1. General Event Policy',
          bullets: [
            '1.1 MSTAR Airsoft (Force of Conquest) is a large-scale international airsoft event organized and promoted by Mstar (Asia) Co., Ltd.',
            '1.2 All participants must comply with all event rules, safety procedures, local laws, Thai regulations, and instructions issued by event organizers, referees, marshals, security personnel, and staff members.',
            '1.3 Mstar (Asia) Co., Ltd. reserves the right to modify, update, suspend, or cancel any part of the event, schedule, activities, gameplay, facilities, or services without prior notice when necessary for safety, operational, legal, environmental, or unforeseen circumstances.',
            '1.4 Participation in the event is entirely voluntary and at the participant’s own risk.',
          ],
        },
        {
          id: 'terms-registration-entry',
          title: '2. Registration & Entry',
          bullets: [
            '2.1 All attendees must complete official registration procedures before entering the event premises.',
            '2.2 Participants may be required to provide valid government-issued identification or passport, proof of registration or ticket purchase, signed liability waiver, emergency contact information, and additional travel or customs documentation when applicable.',
            '2.3 Event tickets, camping reservations, and activity bookings are non-transferable unless approved in writing by the organizer.',
            '2.4 The organizer reserves the right to deny entry or remove any individual who violates event policies, safety rules, local laws, or engages in disruptive behavior.',
          ],
        },
        {
          id: 'terms-age-requirements',
          title: '3. Age Requirements',
          bullets: [
            '3.1 Participants under 18 years of age must have written consent from a parent or legal guardian.',
            '3.2 Certain activities, gameplay zones, equipment usage, or entertainment areas may require minimum age restrictions.',
            '3.3 The organizer reserves the right to request identification for age verification at any time.',
          ],
        },
        {
          id: 'terms-safety-regulations',
          title: '4. Safety Regulations',
          bullets: [
            '4.1 Safety is the highest priority of the event.',
            '4.2 All participants must wear approved full-seal eye protection at all times within active gameplay zones.',
            '4.3 Additional face protection may be mandatory depending on age category, gameplay area, or safety requirements.',
            '4.4 Barrel covers or barrel blocking devices must remain attached to all airsoft replicas in staging areas, parking zones, campground areas, and all non-active zones.',
            '4.5 Real firearms, live ammunition, explosives, illegal weapons, unauthorized pyrotechnics, dangerous materials, narcotics, or prohibited substances are strictly forbidden.',
            '4.6 All airsoft replicas must pass chronograph inspections before use.',
            '4.7 Event organizers reserve the right to inspect, test, restrict, or prohibit any equipment deemed unsafe.',
            '4.8 Participants must immediately follow all emergency instructions, cease gameplay when instructed, and cooperate with safety personnel.',
          ],
        },
        {
          id: 'terms-gameplay-rules',
          title: '5. Gameplay Rules',
          bullets: [
            '5.1 Airsoft gameplay operates under an honor-based system.',
            '5.2 Any direct BB impact to a participant’s body, gear, or replica counts as a valid hit unless otherwise specified under official game rules.',
            '5.3 Cheating, aggressive conduct, blind firing, unsafe engagement, overshooting, physical altercations, harassment, or unsportsmanlike behavior are strictly prohibited.',
            '5.4 The decisions of referees, marshals, and event officials are final.',
            '5.5 Players removed for rule violations may be permanently banned from the event without refund.',
          ],
        },
        {
          id: 'terms-equipment-shipping',
          title: '6. Equipment & Shipping',
          bullets: [
            '6.1 Participants are solely responsible for ensuring compliance with all airline, customs, import/export, and transportation regulations regarding airsoft equipment.',
            '6.2 Participants shipping equipment internationally must provide accurate declarations and required documentation.',
            '6.3 Mstar (Asia) Co., Ltd. may assist participants with event-related documentation; however, the participant remains fully responsible for legal compliance in their home country and Thailand.',
            '6.4 The organizer reserves the right to refuse possession, transport, or use of any equipment deemed unsafe, prohibited, damaged, or non-compliant.',
          ],
        },
        {
          id: 'terms-campground-accommodation',
          title: '7. Campground & Accommodation Policy',
          bullets: [
            '7.1 Campground access is limited to registered participants and authorized guests.',
            '7.2 Campground bookings are subject to availability and must be reserved in advance.',
            '7.3 Participants are responsible for maintaining cleanliness, respecting campground property, and disposing of waste properly.',
            '7.4 Excessive noise, dangerous behavior, vandalism, illegal substances, violence, harassment, or disruptive conduct may result in immediate removal from the campground and event premises.',
            '7.5 The organizer is not responsible for lost, stolen, or damaged personal belongings.',
          ],
        },
        {
          id: 'terms-food-alcohol',
          title: '8. Food, Alcohol & Controlled Substances',
          bullets: [
            '8.1 Participants must comply with all Thai laws regarding alcohol consumption and prohibited substances.',
            '8.2 Illegal drugs, narcotics, or controlled substances are strictly prohibited.',
            '8.3 Intoxicated participants may be denied gameplay access or removed from the event for safety reasons.',
            '8.4 The organizer reserves the right to conduct security inspections where permitted by law.',
          ],
        },
        {
          id: 'terms-media-publicity',
          title: '9. Media, Photography & Publicity',
          bullets: [
            '9.1 By attending the event, participants grant Mstar (Asia) Co., Ltd. and its partners the unrestricted right to photograph, video record, livestream, reproduce, publish, and use their image, likeness, voice, gameplay footage, or appearance for marketing, promotional, advertising, documentary, commercial, and media purposes worldwide without compensation.',
            '9.2 Participants may not commercially reproduce or distribute official event content without written approval from the organizer.',
            '9.3 Media personnel and content creators may require separate accreditation approval.',
          ],
        },
        {
          id: 'terms-liability-disclaimer',
          title: '10. Liability Disclaimer',
          paragraphs: [
            '10.1 Participation in airsoft activities and outdoor adventure events involves inherent risks including, but not limited to:',
          ],
          bullets: [
            'Physical injury',
            'Accidents',
            'Falls',
            'Equipment malfunction',
            'Weather-related hazards',
            'Terrain hazards',
            'Heat exhaustion',
            'Property damage',
            'Transportation risks',
            '10.2 By participating, attendees voluntarily assume all risks associated with the event.',
            '10.3 Mstar (Asia) Co., Ltd., event staff, sponsors, venue owners, affiliates, contractors, volunteers, and partners shall not be liable for any injury, loss, death, theft, property damage, delay, accident, cancellation, or consequential damages arising from participation in the event.',
            '10.4 Participants are encouraged to obtain personal travel, medical, accident, and property insurance coverage.',
          ],
        },
        {
          id: 'terms-force-majeure',
          title: '11. Force Majeure',
          paragraphs: [
            '11.1 The organizer shall not be held responsible for delays, cancellations, interruptions, or modifications caused by circumstances beyond reasonable control including:',
          ],
          bullets: [
            'Natural disasters',
            'Floods',
            'Storms',
            'Government actions',
            'Pandemic restrictions',
            'Civil unrest',
            'Power outages',
            'Venue restrictions',
            'Transportation disruption',
            'Security threats',
            'Acts of God',
            '11.2 In such cases, refunds, rescheduling, or credits shall be determined solely at the discretion of the organizer.',
          ],
        },
        {
          id: 'terms-refunds-cancellations',
          title: '12. Refund & Cancellation Policy',
          bullets: [
            '12.1 All ticket sales, campground reservations, rental equipment fees, and event registrations are non-refundable unless otherwise specified by the organizer.',
            '12.2 The organizer reserves the right to cancel or modify event activities, schedules, locations, or services.',
            '12.3 Participants removed from the event for misconduct, safety violations, illegal activity, or breach of these Terms & Conditions shall not be eligible for refunds.',
          ],
        },
        {
          id: 'terms-environmental-policy',
          title: '13. Environmental Policy',
          bullets: [
            '13.1 Participants must respect the natural environment, wildlife, campground facilities, and event property.',
            '13.2 Littering, property destruction, environmental damage, or unauthorized disposal of waste is prohibited.',
            '13.3 Biodegradable BBs may be mandatory in designated outdoor gameplay areas.',
          ],
        },
        {
          id: 'terms-governing-law',
          title: '14. Governing Law',
          bullets: [
            '14.1 These Terms & Conditions shall be governed and interpreted in accordance with the laws and regulations of the Kingdom of Thailand.',
            '14.2 Any disputes arising from participation in the event shall be subject to the jurisdiction of Thai courts.',
          ],
        },
        {
          id: 'terms-acceptance',
          title: '15. Acceptance of Terms',
          paragraphs: [
            'By registering for, attending, or participating in MSTAR Airsoft (Force of Conquest), all attendees confirm that they:',
          ],
          bullets: [
            'Have read and understood these Terms & Conditions',
            'Agree to comply with all event rules and safety requirements',
            'Accept all risks associated with participation',
            'Release Mstar (Asia) Co., Ltd. and associated parties from liability to the maximum extent permitted by law',
          ],
        },
        {
          id: 'terms-contact-information',
          title: 'Contact Information',
          paragraphs: [
            'Mstar (Asia) Co., Ltd.',
            'Official Event: MSTAR Airsoft (Force of Conquest)',
            'For customer support, registration assistance, sponsorship inquiries, media accreditation, or travel assistance, please contact the official MSTAR support team through the event website or authorized communication channels.',
          ],
        },
      ],
    },
    {
      slug: 'privacy',
      eyebrow: 'Legal',
      title: 'Privacy',
      description: 'How MSTAR Airsoft (Force of Conquest) collects, uses, stores, and protects personal information.',
      sections: [
        {
          id: 'privacy-intro',
          title: 'MSTAR Airsoft (Force of Conquest) Privacy Policy',
          paragraphs: [
            'Effective Date: May 20, 2026',
            'Operated By: Mstar (Asia) Co., Ltd.',
            'Mstar (Asia) Co., Ltd. (“MSTAR,” “we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, store, disclose, and safeguard information obtained through the MSTAR Airsoft (Force of Conquest) website, mobile application, event registration systems, ticketing platforms, campground services, and related event operations.',
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
          title: '11. Children’s Privacy',
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
        },
      ],
    },
  ],
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



