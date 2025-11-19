/**
 * @file competencies.js
 * @description The source of truth for the Talent Tree Labs Competency Framework.
 * @version 2.0.0
 */

const COMPETENCY_DATA = {
  "The Competition": {
    "Esports Team Operations & Performance": [
        { 
            "title": "Talent Scouting & Player Acquisition",
            "definition": "The ability to identify and secure high-potential competitive talent by scouting, assessing, recruiting, and onboarding individuals to build and maintain a strong player roster thereby ensuring the competitive edge and long-term success of an esports organization.",
            "rubric": {
                "Level 1: Basic": ["Identifies common game roles and player archetypes (e.g., DPS, Support, IGL).", "Recalls basic in-game metrics for player performance (e.g., KDA, win rate).", "Describes different online scouting platforms (e.g., leaderboards, community forums).", "Understands the initial stages of player contact and communication.", "Recognizes ethical considerations in player scouting (e.g., respecting contracts, non-poaching).", "States the general purpose of a player roster for an esports team."],
                "Level 2: Intermediate": ["Applies predefined criteria to screen player profiles for suitability.", "Conducts initial outreach to high-potential players via appropriate channels.", "Processes collected player data into a scouting database.", "Uses communication tools to maintain consistent engagement with prospects.", "Submits structured scouting reports detailing initial assessments.", "Executes preliminary background checks on potential recruits."],
                "Level 3: Advanced": ["Analyzes complex in-game data and VODs to assess player performance and potential.", "Evaluates player compatibility with existing team dynamics and strategic objectives.", "Compares prospective players against competitive talent benchmarks and market trends.", "Diagnoses long-term growth potential and risk factors (e.g., burnout) in individual players.", "Assesses the strategic value and financial implications of potential player acquisitions.", "Recommends targeted recruitment strategies to address specific team needs and competitive gaps."],
                "Level 4: Superior": ["Architects a holistic talent scouting and acquisition framework.", "Designs innovative player evaluation models integrating diverse data (performance, psychological).", "Formulates long-term player development and retention strategies.", "Negotiates and structures complex, multi-faceted player contracts and transfer agreements.", "Establishes partnerships with talent academies for future talent pipelines.", "Pioneers new industry standards for ethical and effective player acquisition."]
            }
        },
        { "title": "Contract Negotiation & Roster Management" },
        { 
            "title": "Performance Coaching & Strategic Analysis",
            "definition": "The ability to develop in-game strategies and improve player execution by analyzing competitive play, providing targeted coaching, and refining tactical approaches to enhance individual and team performance thereby directly impacting competitive outcomes and achieving sustained success.",
            "rubric": {
                "Level 1: Basic": ["Identifies fundamental in-game roles and basic tactical concepts.", "Recalls essential team communication callouts during gameplay.", "Describes core player mechanics and abilities in a specific game.", "Understands the purpose of match replays for review.", "States common strategic objectives (e.g., map control, objective focus).", "Recognizes the importance of discipline in executing strategies."],
                "Level 2: Intermediate": ["Applies predefined in-game strategies and tactical maneuvers during practice and matches.", "Provides specific, actionable feedback to players on their in-game execution.", "Processes match VODs by tagging and clipping key moments for team review.", "Uses designated coaching software to analyze player positioning and decision-making.", "Executes tailored training drills to improve individual player mechanics.", "Communicates tactical adjustments clearly to the team during live play."],
                "Level 3: Advanced": ["Analyzes complex opponent strategies and emerging meta-game trends to identify competitive advantages.", "Evaluates individual and team performance data (e.g., heatmaps, ability usage) to diagnose execution gaps.", "Compares strategic effectiveness across different team compositions and game states.", "Diagnoses the psychological and physical factors impacting player performance in high-pressure situations.", "Assesses the long-term impact of strategic changes on competitive results.", "Proposes innovative in-game strategies and counter-strategies based on deep analysis."],
                "Level 4: Superior": ["Architects a holistic performance coaching framework.", "Designs and implements novel in-game strategies that redefine the competitive meta.", "Formulates comprehensive player development pathways, from amateur to professional level.", "Creates proprietary analytical models and tools for predicting player performance and team synergy.", "Establishes a continuous learning ecosystem for coaches and players.", "Pioneers industry best practices in esports performance optimization and competitive intelligence."]
            }
        },
        { "title": "Team Dynamics & Cohesion Building" }, { "title": "Player Health & Wellness Management" }, { "title": "Performance Psychology" }, { "title": "Player Development & Career Pathing" }, { "title": "Esports Performance Data Analysis" }, { "title": "Opponent & Meta-Game Analysis" }, { "title": "Logistics & Travel Coordination" }, { "title": "Compliance & League Regulation Adherence" }, { "title": "Gaming House & Facility Management" }
    ],
    "League & Tournament Operations": [
      { "title": "Publisher Relations & IP Licensing" },
      { 
          "title": "Tournament Design & Format Development",
          "definition": "The ability to conceptualize, plan, and structure competitive esports events by incorporating game mechanics, balancing competitive integrity, considering participant experience, and defining rule sets and scheduling to produce viable tournament designs and detailed format specifications thereby ensuring fair, engaging, and well-organized competitions that attract participants and viewers.",
          "rubric": {
              "Level 1: Basic": ["Identifies common competitive event formats (e.g., single-elimination, round-robin).", "Recalls fundamental rules and regulations for specific competitive activities.", "Recognizes standard logistical components needed for event setup (e.g., playing areas, basic equipment).", "Describes basic steps for handling participant inquiries or minor disputes.", "Understands basic event schedules and participant lists.", "Explains simple bracketing concepts (e.g., \"seeding,\" \"bye\") to participants."],
              "Level 2: Intermediate": ["Applies established bracketing procedures to generate initial match-ups for participants.", "Enforces fundamental game rules consistently and objectively during competitive play.", "Coordinates on-site logistical arrangements for tournament segments (e.g., equipment distribution, crowd flow).", "Resolves minor rule infractions or participant inquiries promptly and fairly.", "Processes and records match results, scores, and player statistics accurately.", "Communicates event schedules, rule clarifications, and updates clearly to participants and officials."],
              "Level 3: Advanced": ["Analyzes participant data and seeding criteria to optimize bracketing structures for competitive balance.", "Evaluates the efficacy of rules enforcement and proposes refinements based on observed trends.", "Diagnoses and resolves complex logistical challenges during live events, mitigating impact on flow.", "Investigates and mediates significant participant disputes or rule controversies, documenting outcomes.", "Assesses overall tournament performance against established metrics to identify root causes of gaps.", "Critiques existing operational procedures and recommends data-driven enhancements for efficiency and participant experience."],
              "Level 4: Superior": ["Architects comprehensive bracketing policies and guidelines to ensure equitable competition.", "Devises and institutionalizes a robust framework for rules interpretation, updates, and integrity management.", "Pioneers strategic logistical master plans for complex, multi-venue, or international tournaments.", "Innovates and establishes advanced dispute resolution models and training programs for officials.", "Leads the research, development, and integration of cutting-edge technologies for tournament management.", "Defines and influences industry-wide quality standards and performance benchmarks for tournament operations."]
          }
      },
      { "title": "League Governance & Rulebook Management" }, { "title": "Competitive Integrity & Officiating" }, { "title": "Anti-Cheat & Fair Play Enforcement" }
    ]
  },
  "The Community": {
    "Grassroots & Amateur Development": [
        { 
            "title": "Community Program Design & Management",
            "definition": "The ability to create and execute programs that engage the broader player base by conceptualizing interactive events, developing content, managing community platforms, and fostering player interaction to deliver engaging community initiatives and sustainable engagement platforms thereby fostering player loyalty, strengthening brand affinity, and expanding the organization's influence.",
            "rubric": {
                "Level 1: Basic": ["Identifies common online community platforms (e.g., Discord, Reddit, forums).", "Recalls basic engagement tactics (e.g., answering questions, sharing announcements).", "Describes different types of community events (e.g., contests, Q&A sessions).", "Understands the concept of player loyalty and brand affinity.", "States the organization's official community guidelines.", "Recognizes the importance of active listening to player feedback."],
                "Level 2: Intermediate": ["Applies pre-defined templates to organize and execute small-scale community events.", "Conducts regular interactions on community platforms by responding to player inquiries and comments.", "Processes incoming player feedback by categorizing and summarizing common themes.", "Uses community management tools to moderate discussions and enforce guidelines.", "Executes promotional content (e.g., social media posts, newsletters) for community initiatives.", "Communicates event rules, schedules, and participation criteria clearly to the player base."],
                "Level 3: Advanced": ["Analyzes community sentiment trends across multiple platforms to identify engagement opportunities or risks.", "Evaluates the effectiveness of community programs against participation, retention, and loyalty metrics.", "Compares different community engagement strategies to optimize player interaction and brand affinity.", "Diagnoses the root causes of declining community participation or negative sentiment.", "Assesses the long-term impact of community programs on player retention and brand advocacy.", "Proposes novel community program concepts based on analytical insights and player needs."],
                "Level 4: Superior": ["Architects a comprehensive community engagement framework, integrating online platforms and events.", "Designs and implements innovative community programs that cultivate deep loyalty and brand affinity.", "Formulates long-term community growth strategies, including influencer integration and global expansion.", "Creates proprietary engagement metrics and reporting dashboards to measure community health and ROI.", "Establishes a player-driven content co-creation and moderation ecosystem.", "Pioneers new models for community monetization and value co-creation within the esports ecosystem."]
            }
        },
        { "title": "Amateur & Collegiate League Operations" }, { "title": "Path-to-Pro Framework Development" }, { "title": "Volunteer & Community Leader Management" }, { "title": "Educational Partnership Development" }, { "title": "Youth Protection & Safeguarding Policies" }, { "title": "Local Event Management" }, { "title": "Grassroots Sponsorship & Funding" }
    ],
    "Creator & Community Engagement": [
      { "title": "Creator & Influencer Partnership Management" },
      { 
          "title": "Digital Community Moderation",
          "definition": "The ability to cultivate and maintain a positive, inclusive, and safe online environment for an organization's community by enforcing community guidelines, addressing disruptive behavior, mediating conflicts, and promoting constructive engagement to achieve a harmonious and secure community space thereby fostering player retention, enhancing brand loyalty, and contributing to overall organizational reputation.",
          "rubric": {
              "Level 1: Basic": ["Identifies common community guidelines and rules of conduct.", "Recalls standard moderation actions and tools (e.g., warning, temporary ban, content removal).", "Describes various types of disruptive behaviors (e.g., spam, harassment, trolling).", "Recognizes positive engagement behaviors (e.g., helpfulness, constructive feedback, positive discussions).", "States the general escalation paths for severe community incidents.", "Understands the importance of impartiality and fairness in moderation decisions."],
              "Level 2: Intermediate": ["Applies community guidelines to issue warnings or temporary suspensions to users.", "Manages real-time chat and forum discussions by removing inappropriate content.", "Mediates minor disagreements between community members to facilitate resolution.", "Utilizes moderation tools to filter unwanted content automatically and efficiently.", "Communicates moderation actions and their rationale clearly to affected users.", "Executes pre-defined de-escalation techniques in volatile community discussions."],
              "Level 3: Advanced": ["Analyzes patterns of disruptive behavior to identify underlying causes and emerging threats.", "Evaluates the effectiveness of moderation actions in curbing negative trends and promoting positive engagement.", "Assesses community sentiment and discussions to identify emerging issues or risks to the brand.", "Compares different moderation strategies to determine optimal approaches for specific platforms or scenarios.", "Judges the severity of incidents and determines appropriate disciplinary actions beyond standard protocols.", "Interprets complex community conflicts to facilitate resolution and prevent recurrence."],
              "Level 4: Superior": ["Develops comprehensive community guidelines and moderation policies.", "Formulates proactive strategies to promote positive community health and inclusivity.", "Designs automated moderation systems and tools to enhance efficiency and scale.", "Architects long-term community engagement programs focused on well-being and positive interactions.", "Innovates new methods for identifying and addressing toxic behavior and conflicts at scale.", "Constructs training programs and certification pathways for new moderators and community managers."]
          }
      },
      { "title": "Fan Engagement Strategy" }
    ]
  },
  "The Spectacle": {
    "Live Event Production & Management": [
      { "title": "Event Planning & Production" }, { "title": "Venue Sourcing & Logistics Management" }, { "title": "Broadcast & Technical Integration Management" }, { "title": "Participant & Team Relations" }, { "title": "Prize Pool Management & Distribution" }, { "title": "Ticketing & Spectator Experience Management" }
    ],
    "Broadcast & Content Production": [
        { 
            "title": "Live Broadcast Production & Operations",
            "definition": "The ability to execute live video and audio broadcasts by managing livestream platforms, operating broadcasting software (e.g., OBS), integrating multimedia elements, and ensuring technical quality to deliver high-quality, engaging live content thereby enhancing audience reach and real-time engagement.",
            "rubric": {
                "Level 1: Basic": ["Identifies primary livestreaming platforms (e.g., YouTube Live, Twitch) and their basic purposes.", "Understands core technical elements of broadcasting, including software interfaces, input sources, audio levels and key terminology (e.g., OBS controls, camera types, \"scene,\" \"bitrate,\" and \"audio peaking\").", "Recalls the sequence of steps in a basic live broadcast workflow (e.g., setup, go live, end stream).", "Recognizes the importance of testing all components before going live.", "Understands the purpose of pre-broadcast checklists and setup guides.", "Identifies basic legal or ethical considerations for live content (e.g., copyright for background music)."],
                "Level 2: Intermediate": ["Configures basic streaming settings for platforms (e.g., stream key, resolution, server).", "Operates broadcasting software to add and arrange simple video/audio sources and switch between prepared scenes.", "Connects and sets up essential audio and video input devices for a live stream.", "Adjusts multiple audio input levels for a balanced mix and applies basic video transitions.", "Performs pre-broadcast connectivity tests and monitors primary audio/video feeds for basic quality.", "Manages platform chat interactions, including responding to audience comments."],
                "Level 3: Advanced": ["Analyzes real-time platform analytics (e.g., viewer count, bitrate health) to optimize live delivery.", "Evaluates and selects appropriate advanced broadcasting software features (e.g., NDI, virtual cameras) for complex productions.", "Assesses the technical feasibility and integration requirements of complex multimedia elements (e.g., multiple synchronized cameras).", "Diagnoses and resolves critical live broadcast technical failures (e.g., stream drops, encoder errors) by identifying root causes.", "Interprets and evaluates system logs and error messages for troubleshooting and performance assessment.", "Analyzes audience engagement data to recommend real-time adjustments to content delivery."],
                "Level 4: Superior": ["Architects multi-platform broadcasting strategies and audience engagement models.", "Devises and implements custom solutions (e.g., scripting, API integrations) to automate complex broadcast workflows.", "Establishes and governs organizational policies and standards for broadcast technical quality and reliability.", "Pioneers advanced troubleshooting methodologies and comprehensive disaster recovery plans for mission-critical productions.", "Leads the research, evaluation, and strategic adoption of cutting-edge broadcasting technologies.", "Defines the long-term vision and strategic direction for all live broadcast operations, aligning with organizational goals."]
            }
        },
        { "title": "Shoutcasting & On-Air Talent Performance" }, { "title": "Broadcast Talent Development & Coaching" }, { "title": "Content Strategy & Programming" }, { "title": "Video Editing & Post-Production" }, { "title": "Motion Graphics & Broadcast Design" }, { "title": "Streaming Platform Management (e.g., Twitch, YouTube)" }, { "title": "Digital Storytelling & Narrative Crafting" }, { "title": "Media Asset Management" }
    ],
    "Commercial & Revenue Operations": [
        { 
            "title": "Brand Management & Public Relations",
            "definition": "The ability to manage and enhance the public image and reputation of an organization or brand by strategically communicating, engaging with diverse stakeholders, fostering positive media relations, and effectively managing public perception and crises to achieve a cohesive and positive brand identity and controlled public narrative thereby fostering trust, enhancing credibility, and supporting overall organizational objectives.",
            "rubric": {
                "Level 1: Basic": ["Identifies core brand messages and visual identity guidelines.", "Recalls established protocols for basic media interactions.", "Categorizes types of public feedback (e.g., positive, negative, neutral, constructive).", "Explains basic organizational statements or FAQs to answer simple public queries.", "Describes the primary roles of brand management and public relations within an organization.", "Understands the fundamental concept of public perception and its impact on the organization."],
                "Level 2: Intermediate": ["Applies approved brand guidelines in drafting basic communication materials.", "Responds to routine public inquiries and comments on social media platforms.", "Processes simple press releases and public announcements using provided templates.", "Monitors traditional and digital media for brand mentions, identifying straightforward sentiment.", "Coordinates with internal departments to gather accurate information for external messaging.", "Participates in the execution of small-scale public relations activities or events."],
                "Level 3: Advanced": ["Analyzes media coverage and public sentiment reports to assess brand reputation trends and emerging issues.", "Evaluates the effectiveness of public relations campaigns against defined objectives and KPIs.", "Diagnoses complex public perception challenges and proposes strategic communication responses.", "Assesses public reaction to new initiatives to refine communication approaches.", "Interprets complex stakeholder feedback to refine messaging and mitigate risks.", "Critiques existing brand management and PR policies, recommending evidence-based improvements."],
                "Level 4: Superior": ["Formulates comprehensive brand strategies aligned with overall organizational vision.", "Designs and implements a proactive crisis communication framework for potential reputational threats.", "Establishes and champions innovative public engagement programs to build sustained trust.", "Develops and implements targeted communication plans for new initiatives or sensitive issues, anticipating public reactions.", "Leads the development and integration of new communication technologies and methodologies.", "Creates a culture of brand advocacy and consistent messaging across the entire organization."]
            }
        },
        { "title": "Sponsorship & Partnership Sales" }, { "title": "Media Rights Sales & Distribution" }, { "title": "Merchandise & Licensing Management" }, { "title": "Advertising Sales & Operations" }, { "title": "Business Development & Strategic Partnerships" }, { "title": "Market Analysis & Expansion Strategy" }, { "title": "Revenue Diversification & Innovation" }, { "title": "Fan Monetization & CRM Strategy" }, { "title": "Investor Relations & Capital Raising" }
    ]
  },
  "The Core Product": {
    "Game Design & Development": [
      { "title": "Game Concept & High-Level Design" },
      { "title": "Game Mechanics & Systems Design" },
      { "title": "Narrative Design & World-Building" },
      { "title": "Level Design & Environment Crafting" },
      { "title": "Character Design & Articulation" },
      { "title": "Game Engine Proficiency (e.g., Unreal, Unity)" },
      { "title": "Gameplay Programming & Scripting" },
      { "title": "AI Programming & Behavior Design" },
      { "title": "Graphics Programming & Optimization" },
      { "title": "Technical Art & Pipeline Development" },
      { "title": "User Interface (UI) & User Experience (UX) Design" },
      { "title": "Audio Design & Engineering" },
      { "title": "Game Monetization Design" },
      { "title": "Quality Assurance (QA) & Test Planning" },
      { "title": "Game Build & Release Management" },
      { "title": "Live Operations & Post-Launch Content Management" }
    ]
  },
  "The Business Foundations": {
    "Corporate & Shared Services": [
      { "title": "Human Resources Management" }, { "title": "Financial Management & Accounting" }, { "title": "Legal & Regulatory Compliance" }, { "title": "Project & Program Management" }, { "title": "Stakeholder & Partnership Management" }, { "title": "Data Science & Analytics (as a service)" }
    ],
    "Platform & Technology Infrastructure": [
      { "title": "Cloud Infrastructure & Network Architecture" }, { "title": "Live Streaming & CDN Management" }, { "title": "Database Architecture & Management" }, { "title": "Cybersecurity & Threat Mitigation" }, { "title": "Platform Scalability & Performance Engineering" }, { "title": "DevOps & Continuous Integration/Deployment (CI/CD)" }, { "title": "Hardware & Peripherals Integration" }, { "title": "API & SDK Development" }
    ]
  }
};

