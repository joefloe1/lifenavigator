// Enhanced career database with 60 careers and images
const careerDatabase = [
    // Technology (15 careers)
    { 
        id: 1, 
        title: "Software Developer", 
        category: "technology", 
        match: 95, 
        salary: "$85,000 - $150,000", 
        growth: "22%", 
        description: "Design, develop, and test software applications for various platforms and industries.", 
        skills: ["Programming", "Problem Solving", "Algorithms", "Software Design"], 
        advice: "Your analytical thinking and problem-solving skills make you a great fit for software development. Focus on building practical projects to showcase your skills.", 
        icon: "fa-laptop-code",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 2, 
        title: "Data Scientist", 
        category: "technology", 
        match: 88, 
        salary: "$120,000 - $180,000", 
        growth: "31%", 
        description: "Analyze and interpret complex data to help organizations make better decisions.", 
        skills: ["Statistics", "Machine Learning", "Python", "Data Visualization"], 
        advice: "Your analytical mindset and attention to detail align well with data science. Consider building a portfolio with real-world data analysis projects.", 
        icon: "fa-database",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 3, 
        title: "Cybersecurity Analyst", 
        category: "technology", 
        match: 82, 
        salary: "$95,000 - $140,000", 
        growth: "33%", 
        description: "Protect computer systems and networks from cyber threats and security breaches.", 
        skills: ["Network Security", "Risk Assessment", "Incident Response", "Ethical Hacking"], 
        advice: "Your methodical approach and problem-solving skills are valuable in cybersecurity. Start with foundational certifications like Security+.", 
        icon: "fa-shield-alt",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 4, 
        title: "UX/UI Designer", 
        category: "technology", 
        match: 78, 
        salary: "$75,000 - $130,000", 
        growth: "13%", 
        description: "Create user-friendly interfaces and enhance user experiences for digital products.", 
        skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"], 
        advice: "Your empathy and creative problem-solving align well with UX/UI design. Build a portfolio with case studies that showcase your design process.", 
        icon: "fa-palette",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 5, 
        title: "DevOps Engineer", 
        category: "technology", 
        match: 85, 
        salary: "$100,000 - $160,000", 
        growth: "21%", 
        description: "Streamline software development and deployment processes through automation.", 
        skills: ["CI/CD", "Cloud Platforms", "Containerization", "Scripting"], 
        advice: "Your systematic approach and technical skills make DevOps engineering a strong match. Focus on learning cloud platforms and automation tools.", 
        icon: "fa-server",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    { 
        id: 6, 
        title: "AI/ML Engineer", 
        category: "technology", 
        match: 90, 
        salary: "$110,000 - $180,000", 
        growth: "40%", 
        description: "Design and implement artificial intelligence and machine learning solutions.", 
        skills: ["Machine Learning", "Python", "Deep Learning", "Neural Networks"], 
        advice: "Your analytical thinking and interest in cutting-edge technology make AI/ML engineering a great fit. Focus on building projects with popular ML frameworks.", 
        icon: "fa-brain",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 7, 
        title: "Cloud Architect", 
        category: "technology", 
        match: 83, 
        salary: "$120,000 - $190,000", 
        growth: "25%", 
        description: "Design and manage cloud computing strategies and infrastructure.", 
        skills: ["Cloud Platforms", "System Design", "Networking", "Security"], 
        advice: "Your big-picture thinking and technical expertise align well with cloud architecture. Consider getting certified in major cloud platforms.", 
        icon: "fa-cloud",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 8, 
        title: "Mobile App Developer", 
        category: "technology", 
        match: 79, 
        salary: "$80,000 - $140,000", 
        growth: "19%", 
        description: "Create applications for mobile devices across different platforms.", 
        skills: ["Mobile Development", "UI/UX", "Programming", "API Integration"], 
        advice: "Your attention to detail and user-focused mindset make mobile development a good match. Build a portfolio with apps for different platforms.", 
        icon: "fa-mobile-alt",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 9, 
        title: "Game Developer", 
        category: "technology", 
        match: 76, 
        salary: "$70,000 - $130,000", 
        growth: "15%", 
        description: "Design and develop video games for various platforms and genres.", 
        skills: ["Game Engines", "3D Modeling", "Programming", "Creative Design"], 
        advice: "Your creativity and technical skills align well with game development. Start by building small games to showcase your abilities.", 
        icon: "fa-gamepad",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 10, 
        title: "IT Project Manager", 
        category: "technology", 
        match: 81, 
        salary: "$90,000 - $150,000", 
        growth: "10%", 
        description: "Oversee technology projects from conception to implementation.", 
        skills: ["Project Management", "Agile Methodology", "Communication", "Technical Knowledge"], 
        advice: "Your organizational skills and ability to coordinate teams make IT project management a strong match. Consider getting PMP certified.", 
        icon: "fa-tasks",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    { 
        id: 11, 
        title: "Blockchain Developer", 
        category: "technology", 
        match: 87, 
        salary: "$100,000 - $170,000", 
        growth: "35%", 
        description: "Develop decentralized applications and smart contracts using blockchain technology.", 
        skills: ["Blockchain", "Smart Contracts", "Cryptography", "Decentralized Systems"], 
        advice: "Your interest in emerging technologies and security make blockchain development a great fit. Build projects on popular blockchain platforms.", 
        icon: "fa-link",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
    },
    { 
        id: 12, 
        title: "IoT Engineer", 
        category: "technology", 
        match: 80, 
        salary: "$85,000 - $140,000", 
        growth: "28%", 
        description: "Design and implement connected devices and Internet of Things solutions.", 
        skills: ["Embedded Systems", "Networking", "Sensors", "Data Processing"], 
        advice: "Your interdisciplinary approach and problem-solving skills align well with IoT engineering. Focus on both hardware and software aspects.", 
        icon: "fa-wifi",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    { 
        id: 13, 
        title: "AR/VR Developer", 
        category: "technology", 
        match: 77, 
        salary: "$80,000 - $135,000", 
        growth: "30%", 
        description: "Create immersive experiences using augmented and virtual reality technologies.", 
        skills: ["3D Modeling", "Unity/Unreal", "User Experience", "Spatial Computing"], 
        advice: "Your creativity and technical skills make AR/VR development an exciting match. Build a portfolio with interactive experiences.", 
        icon: "fa-vr-cardboard",
        imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 14, 
        title: "QA Engineer", 
        category: "technology", 
        match: 84, 
        salary: "$70,000 - $120,000", 
        growth: "8%", 
        description: "Ensure software quality through testing and automation.", 
        skills: ["Testing", "Automation", "Bug Tracking", "Quality Assurance"], 
        advice: "Your attention to detail and systematic approach make QA engineering a strong match. Focus on learning automation tools and methodologies.", 
        icon: "fa-bug",
        imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    { 
        id: 15, 
        title: "Site Reliability Engineer", 
        category: "technology", 
        match: 86, 
        salary: "$110,000 - $170,000", 
        growth: "20%", 
        description: "Ensure system reliability, scalability, and performance.", 
        skills: ["Monitoring", "Automation", "Incident Response", "System Architecture"], 
        advice: "Your problem-solving skills and systematic thinking align well with SRE. Focus on both development and operations aspects.", 
        icon: "fa-cogs",
        imageUrl: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    
    // Healthcare (10 careers)
    { 
        id: 16, 
        title: "Registered Nurse", 
        category: "healthcare", 
        match: 92, 
        salary: "$65,000 - $110,000", 
        growth: "9%", 
        description: "Provide and coordinate patient care, educate patients and the public about health conditions.", 
        skills: ["Patient Care", "Medical Knowledge", "Empathy", "Communication"], 
        advice: "Your compassionate nature and strong communication skills make nursing an excellent fit. Consider shadowing healthcare professionals to confirm your interest.", 
        icon: "fa-user-nurse",
        imageUrl: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 17, 
        title: "Physician Assistant", 
        category: "healthcare", 
        match: 88, 
        salary: "$95,000 - $130,000", 
        growth: "31%", 
        description: "Provide healthcare services under the supervision of physicians and surgeons.", 
        skills: ["Medical Diagnosis", "Treatment Planning", "Patient Education", "Clinical Skills"], 
        advice: "Your analytical thinking and desire to help others align well with this role. Focus on gaining healthcare experience before applying to PA programs.", 
        icon: "fa-user-md",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
    },
    { 
        id: 18, 
        title: "Physical Therapist", 
        category: "healthcare", 
        match: 84, 
        salary: "$75,000 - $100,000", 
        growth: "21%", 
        description: "Help patients improve movement and manage pain after injuries or illnesses.", 
        skills: ["Anatomy", "Rehabilitation", "Patient Care", "Therapeutic Exercise"], 
        advice: "Your patience and desire to help people recover align well with physical therapy. Consider volunteering in rehabilitation settings to confirm your interest.", 
        icon: "fa-brain",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 19, 
        title: "Medical Laboratory Scientist", 
        category: "healthcare", 
        match: 79, 
        salary: "$55,000 - $85,000", 
        growth: "11%", 
        description: "Perform complex tests on patient samples to provide data for diagnosis and treatment.", 
        skills: ["Laboratory Techniques", "Attention to Detail", "Analytical Thinking", "Quality Control"], 
        advice: "Your methodical approach and attention to detail are valuable in medical laboratory science. Consider pursuing relevant certifications.", 
        icon: "fa-microscope",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    { 
        id: 20, 
        title: "Pharmacist", 
        category: "healthcare", 
        match: 86, 
        salary: "$120,000 - $150,000", 
        growth: "2%", 
        description: "Dispense prescription medications and provide expertise on their safe use.", 
        skills: ["Medication Knowledge", "Patient Counseling", "Attention to Detail", "Regulatory Compliance"], 
        advice: "Your meticulous nature and desire to help people make pharmacy a strong match. Focus on maintaining strong academic performance for pharmacy school admission.", 
        icon: "fa-pills",
        imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 21, 
        title: "Occupational Therapist", 
        category: "healthcare", 
        match: 83, 
        salary: "$70,000 - $100,000", 
        growth: "16%", 
        description: "Help patients develop, recover, and improve skills needed for daily living and working.", 
        skills: ["Rehabilitation", "Patient Assessment", "Therapeutic Activities", "Adaptive Equipment"], 
        advice: "Your creativity and empathy align well with occupational therapy. Gain experience working with diverse populations to confirm your interest.", 
        icon: "fa-hands-helping",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 22, 
        title: "Speech-Language Pathologist", 
        category: "healthcare", 
        match: 81, 
        salary: "$65,000 - $95,000", 
        growth: "25%", 
        description: "Assess, diagnose, and treat communication and swallowing disorders.", 
        skills: ["Communication", "Patient Evaluation", "Therapeutic Techniques", "Language Development"], 
        advice: "Your patience and communication skills make speech-language pathology a strong match. Consider shadowing professionals in different settings.", 
        icon: "fa-comments",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 23, 
        title: "Medical Sonographer", 
        category: "healthcare", 
        match: 78, 
        salary: "$60,000 - $90,000", 
        growth: "14%", 
        description: "Use imaging equipment to create images of patients' bodies for medical diagnosis.", 
        skills: ["Ultrasound Technology", "Anatomy", "Patient Care", "Image Analysis"], 
        advice: "Your technical skills and attention to detail align well with medical sonography. Consider specializing in a particular area like obstetrics or cardiology.", 
        icon: "fa-wave-square",
        imageUrl: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
    },
    { 
        id: 24, 
        title: "Radiologic Technologist", 
        category: "healthcare", 
        match: 80, 
        salary: "$55,000 - $85,000", 
        growth: "7%", 
        description: "Perform diagnostic imaging examinations on patients.", 
        skills: ["Radiology", "Patient Positioning", "Radiation Safety", "Equipment Operation"], 
        advice: "Your technical aptitude and patient care skills make radiologic technology a good match. Focus on developing strong communication with patients.", 
        icon: "fa-x-ray",
        imageUrl: "https://images.unsplash.com/photo-1516549655669-df6654e447ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 25, 
        title: "Healthcare Administrator", 
        category: "healthcare", 
        match: 82, 
        salary: "$80,000 - $150,000", 
        growth: "20%", 
        description: "Manage healthcare facilities and coordinate medical services.", 
        skills: ["Healthcare Management", "Regulatory Compliance", "Budgeting", "Staff Supervision"], 
        advice: "Your organizational skills and interest in healthcare make administration a strong match. Gain experience in healthcare settings before pursuing management roles.", 
        icon: "fa-clipboard-list",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    
    // Business (10 careers)
    { 
        id: 26, 
        title: "Marketing Manager", 
        category: "business", 
        match: 82, 
        salary: "$70,000 - $150,000", 
        growth: "10%", 
        description: "Plan, direct, and coordinate marketing policies and programs.", 
        skills: ["Market Research", "Strategy Development", "Campaign Management", "Analytics"], 
        advice: "Your creative thinking and analytical skills are perfect for marketing management. Build experience with digital marketing campaigns and analytics.", 
        icon: "fa-bullhorn",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    { 
        id: 27, 
        title: "Financial Analyst", 
        category: "business", 
        match: 85, 
        salary: "$60,000 - $110,000", 
        growth: "9%", 
        description: "Provide guidance to businesses and individuals making investment decisions.", 
        skills: ["Financial Modeling", "Data Analysis", "Excel", "Reporting"], 
        advice: "Your detail-oriented nature and analytical skills make financial analysis a strong match. Consider pursuing relevant certifications like CFA.", 
        icon: "fa-chart-line",
        imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    { 
        id: 28, 
        title: "Human Resources Manager", 
        category: "business", 
        match: 80, 
        salary: "$70,000 - $130,000", 
        growth: "7%", 
        description: "Plan, direct, and coordinate the administrative functions of organizations.", 
        skills: ["Employee Relations", "Recruitment", "Conflict Resolution", "HR Policies"], 
        advice: "Your interpersonal skills and ability to handle sensitive situations align well with HR management. Consider gaining experience in different HR functions.", 
        icon: "fa-users",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    { 
        id: 29, 
        title: "Management Consultant", 
        category: "business", 
        match: 87, 
        salary: "$80,000 - $150,000", 
        growth: "14%", 
        description: "Advise organizations on how to improve efficiency and profitability.", 
        skills: ["Problem Solving", "Strategic Thinking", "Communication", "Data Analysis"], 
        advice: "Your analytical thinking and communication skills make management consulting a strong match. Focus on developing case interview skills.", 
        icon: "fa-chart-pie",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 30, 
        title: "Sales Manager", 
        category: "business", 
        match: 83, 
        salary: "$65,000 - $140,000", 
        growth: "5%", 
        description: "Lead sales teams and develop strategies to improve sales performance.", 
        skills: ["Leadership", "Negotiation", "Customer Relations", "Sales Strategy"], 
        advice: "Your persuasive communication and leadership skills align well with sales management. Build experience in sales roles before moving into management.", 
        icon: "fa-handshake",
        imageUrl: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 31, 
        title: "Operations Manager", 
        category: "business", 
        match: 84, 
        salary: "$70,000 - $130,000", 
        growth: "6%", 
        description: "Oversee organizational processes and ensure efficient operations.", 
        skills: ["Process Improvement", "Team Management", "Budgeting", "Supply Chain"], 
        advice: "Your systematic thinking and leadership skills make operations management a strong match. Focus on developing both technical and people management skills.", 
        icon: "fa-cogs",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    { 
        id: 32, 
        title: "Business Analyst", 
        category: "business", 
        match: 86, 
        salary: "$65,000 - $110,000", 
        growth: "11%", 
        description: "Analyze business processes and recommend solutions to improve efficiency.", 
        skills: ["Requirements Gathering", "Process Mapping", "Data Analysis", "Stakeholder Communication"], 
        advice: "Your analytical thinking and communication skills align well with business analysis. Focus on developing both technical and interpersonal skills.", 
        icon: "fa-chart-bar",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 33, 
        title: "Accountant", 
        category: "business", 
        match: 81, 
        salary: "$55,000 - $95,000", 
        growth: "6%", 
        description: "Prepare and examine financial records, ensuring accuracy and compliance.", 
        skills: ["Accounting Principles", "Financial Reporting", "Attention to Detail", "Tax Regulations"], 
        advice: "Your meticulous nature and numerical aptitude make accounting a strong match. Consider pursuing CPA certification for career advancement.", 
        icon: "fa-calculator",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
    },
    { 
        id: 34, 
        title: "Supply Chain Manager", 
        category: "business", 
        match: 79, 
        salary: "$75,000 - $130,000", 
        growth: "8%", 
        description: "Oversee the flow of goods and services from production to consumption.", 
        skills: ["Logistics", "Inventory Management", "Supplier Relations", "Process Optimization"], 
        advice: "Your organizational skills and systematic thinking align well with supply chain management. Gain experience in different aspects of the supply chain.", 
        icon: "fa-truck",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 35, 
        title: "Entrepreneur", 
        category: "business", 
        match: 88, 
        salary: "Varies widely", 
        growth: "Varies", 
        description: "Start and manage your own business venture.", 
        skills: ["Risk Management", "Innovation", "Leadership", "Financial Planning"], 
        advice: "Your independence and problem-solving skills make entrepreneurship a potential match. Start with a small venture to test your business ideas.", 
        icon: "fa-lightbulb",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    
    // Creative (8 careers)
    { 
        id: 36, 
        title: "Graphic Designer", 
        category: "creative", 
        match: 78, 
        salary: "$45,000 - $85,000", 
        growth: "3%", 
        description: "Create visual concepts to communicate ideas that inspire, inform, and captivate consumers.", 
        skills: ["Creativity", "Design Software", "Visual Communication", "Typography"], 
        advice: "Your creative thinking and visual sensibility make graphic design a good match. Build a strong portfolio showcasing your design skills.", 
        icon: "fa-paint-brush",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 37, 
        title: "Video Producer", 
        category: "creative", 
        match: 76, 
        salary: "$50,000 - $100,000", 
        growth: "12%", 
        description: "Plan and coordinate video production, from concept development to final editing.", 
        skills: ["Storytelling", "Video Editing", "Project Management", "Creative Direction"], 
        advice: "Your storytelling ability and organizational skills align well with video production. Build a portfolio with diverse video projects.", 
        icon: "fa-video",
        imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    { 
        id: 38, 
        title: "Photographer", 
        category: "creative", 
        match: 74, 
        salary: "$35,000 - $75,000", 
        growth: "4%", 
        description: "Capture and process images to tell stories or document events.", 
        skills: ["Composition", "Lighting", "Photo Editing", "Client Relations"], 
        advice: "Your eye for detail and creative vision make photography a potential match. Specialize in a specific photography niche to stand out.", 
        icon: "fa-camera",
        imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    { 
        id: 39, 
        title: "Content Writer", 
        category: "creative", 
        match: 81, 
        salary: "$45,000 - $85,000", 
        growth: "9%", 
        description: "Create written content for various media, including websites, blogs, and marketing materials.", 
        skills: ["Writing", "Research", "SEO", "Content Strategy"], 
        advice: "Your strong writing skills and ability to adapt tone make content writing a good match. Build a portfolio with diverse writing samples.", 
        icon: "fa-pen",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    { 
        id: 40, 
        title: "Art Director", 
        category: "creative", 
        match: 79, 
        salary: "$70,000 - $130,000", 
        growth: "4%", 
        description: "Oversee the visual style and imagery in magazines, newspapers, and product packaging.", 
        skills: ["Creative Direction", "Team Management", "Visual Design", "Branding"], 
        advice: "Your leadership skills and visual sensibility align well with art direction. Gain experience in design roles before moving into leadership.", 
        icon: "fa-palette",
        imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    { 
        id: 41, 
        title: "Architect", 
        category: "creative", 
        match: 83, 
        salary: "$65,000 - $120,000", 
        growth: "5%", 
        description: "Plan and design buildings and other physical structures.", 
        skills: ["Design", "Technical Drawing", "Building Codes", "Project Management"], 
        advice: "Your creativity and technical thinking make architecture a strong match. Build a portfolio showcasing both design and technical skills.", 
        icon: "fa-drafting-compass",
        imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    { 
        id: 42, 
        title: "Industrial Designer", 
        category: "creative", 
        match: 80, 
        salary: "$60,000 - $100,000", 
        growth: "4%", 
        description: "Design products used by people every day, from toys to furniture to cars.", 
        skills: ["Product Design", "3D Modeling", "User Research", "Materials Knowledge"], 
        advice: "Your problem-solving skills and creativity align well with industrial design. Build a portfolio with diverse product concepts.", 
        icon: "fa-cube",
        imageUrl: "https://images.unsplash.com/photo-1581094794322-7c6dce67d36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 43, 
        title: "Fashion Designer", 
        category: "creative", 
        match: 77, 
        salary: "$50,000 - $95,000", 
        growth: "3%", 
        description: "Create clothing, accessories, and footwear.", 
        skills: ["Fashion Design", "Trend Analysis", "Pattern Making", "Textile Knowledge"], 
        advice: "Your creativity and attention to detail make fashion design a potential match. Build a strong portfolio and consider specializing in a niche.", 
        icon: "fa-tshirt",
        imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    
    // Education (7 careers)
    { 
        id: 44, 
        title: "Teacher", 
        category: "education", 
        match: 84, 
        salary: "$45,000 - $85,000", 
        growth: "4%", 
        description: "Educate students and create engaging learning experiences in various subjects.", 
        skills: ["Communication", "Subject Knowledge", "Classroom Management", "Patience"], 
        advice: "Your communication skills and desire to help others learn make teaching a strong match. Consider volunteering in educational settings to confirm your interest.", 
        icon: "fa-chalkboard-teacher",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 45, 
        title: "School Counselor", 
        category: "education", 
        match: 82, 
        salary: "$55,000 - $90,000", 
        growth: "10%", 
        description: "Help students develop academic and social skills and succeed in school.", 
        skills: ["Empathy", "Communication", "Problem Solving", "Student Development"], 
        advice: "Your empathy and problem-solving skills align well with school counseling. Focus on gaining experience working with youth in educational settings.", 
        icon: "fa-user-graduate",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 46, 
        title: "Librarian", 
        category: "education", 
        match: 77, 
        salary: "$50,000 - $80,000", 
        growth: "5%", 
        description: "Help people find information and conduct research for personal and professional use.", 
        skills: ["Research", "Organization", "Information Systems", "Customer Service"], 
        advice: "Your organizational skills and love of information make librarianship a potential match. Consider specializing in a specific type of library.", 
        icon: "fa-book",
        imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 47, 
        title: "Instructional Designer", 
        category: "education", 
        match: 80, 
        salary: "$60,000 - $100,000", 
        growth: "10%", 
        description: "Develop educational materials and experiences in digital and traditional formats.", 
        skills: ["Curriculum Development", "Educational Technology", "Learning Theory", "Project Management"], 
        advice: "Your systematic approach and interest in education align well with instructional design. Build a portfolio with diverse learning materials.", 
        icon: "fa-laptop",
        imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    { 
        id: 48, 
        title: "Education Administrator", 
        category: "education", 
        match: 78, 
        salary: "$75,000 - $120,000", 
        growth: "4%", 
        description: "Manage educational programs and oversee school operations and staff.", 
        skills: ["Leadership", "Administration", "Educational Policy", "Budget Management"], 
        advice: "Your leadership skills and interest in education make administration a potential match. Gain teaching experience before moving into administrative roles.", 
        icon: "fa-user-tie",
        imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    { 
        id: 49, 
        title: "College Professor", 
        category: "education", 
        match: 85, 
        salary: "$70,000 - $150,000", 
        growth: "9%", 
        description: "Teach courses in their field of expertise at colleges and universities.", 
        skills: ["Subject Expertise", "Research", "Public Speaking", "Mentoring"], 
        advice: "Your expertise in a specific field and communication skills make college teaching a strong match. Focus on building a strong research portfolio.", 
        icon: "fa-graduation-cap",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 50, 
        title: "Special Education Teacher", 
        category: "education", 
        match: 86, 
        salary: "$50,000 - $85,000", 
        growth: "8%", 
        description: "Work with students who have a wide range of learning, mental, emotional, and physical disabilities.", 
        skills: ["Patience", "Adaptability", "Individualized Instruction", "Collaboration"], 
        advice: "Your patience and adaptability make special education teaching a strong match. Gain experience working with diverse learning needs.", 
        icon: "fa-heart",
        imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    
    // Trades (5 careers)
    { 
        id: 51, 
        title: "Electrician", 
        category: "trades", 
        match: 82, 
        salary: "$50,000 - $90,000", 
        growth: "8%", 
        description: "Install, maintain, and repair electrical power, communications, lighting, and control systems.", 
        skills: ["Electrical Systems", "Troubleshooting", "Safety Protocols", "Blueprint Reading"], 
        advice: "Your problem-solving skills and attention to detail make electrical work a strong match. Consider apprenticeship programs to start your career.", 
        icon: "fa-bolt",
        imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    { 
        id: 52, 
        title: "Plumber", 
        category: "trades", 
        match: 79, 
        salary: "$45,000 - $85,000", 
        growth: "5%", 
        description: "Install, repair, and maintain pipes and fixtures associated with water distribution and wastewater disposal.", 
        skills: ["Pipe Systems", "Troubleshooting", "Physical Stamina", "Building Codes"], 
        advice: "Your practical problem-solving skills and physical ability align well with plumbing. Consider apprenticeship programs for hands-on training.", 
        icon: "fa-faucet",
        imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    { 
        id: 53, 
        title: "HVAC Technician", 
        category: "trades", 
        match: 81, 
        salary: "$45,000 - $80,000", 
        growth: "13%", 
        description: "Install, maintain, and repair heating, ventilation, air conditioning, and refrigeration systems.", 
        skills: ["HVAC Systems", "Electrical Knowledge", "Troubleshooting", "Customer Service"], 
        advice: "Your technical aptitude and problem-solving skills make HVAC work a good match. Consider certification programs to enhance your skills.", 
        icon: "fa-temperature-low",
        imageUrl: "https://images.unsplash.com/photo-1581094794322-7c6dce67d36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 54, 
        title: "Carpenter", 
        category: "trades", 
        match: 78, 
        salary: "$40,000 - $75,000", 
        growth: "4%", 
        description: "Construct, install, and repair structures and fixtures made from wood and other materials.", 
        skills: ["Woodworking", "Blueprint Reading", "Mathematics", "Physical Stamina"], 
        advice: "Your attention to detail and practical skills align well with carpentry. Consider apprenticeship programs to develop your craft.", 
        icon: "fa-hammer",
        imageUrl: "https://images.unsplash.com/photo-1581094794322-7c6dce67d36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 55, 
        title: "Welder", 
        category: "trades", 
        match: 80, 
        salary: "$40,000 - $70,000", 
        growth: "6%", 
        description: "Use hand-welding or flame-cutting equipment to weld or join metal components.", 
        skills: ["Welding Techniques", "Blueprint Reading", "Safety Protocols", "Metal Properties"], 
        advice: "Your precision and technical skills make welding a good match. Consider certification in specific welding techniques.", 
        icon: "fa-fire",
        imageUrl: "https://images.unsplash.com/photo-1581094794322-7c6dce67d36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    
    // Science (5 careers)
    { 
        id: 56, 
        title: "Environmental Scientist", 
        category: "science", 
        match: 84, 
        salary: "$60,000 - $110,000", 
        growth: "8%", 
        description: "Conduct research to identify, abate, or eliminate sources of pollutants or hazards affecting the environment.", 
        skills: ["Research", "Data Analysis", "Environmental Regulations", "Field Work"], 
        advice: "Your analytical thinking and concern for the environment make environmental science a strong match. Consider specializing in a specific area like conservation or pollution control.", 
        icon: "fa-leaf",
        imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    { 
        id: 57, 
        title: "Biomedical Researcher", 
        category: "science", 
        match: 87, 
        salary: "$70,000 - $120,000", 
        growth: "7%", 
        description: "Conduct research to understand biological processes and develop new treatments for diseases.", 
        skills: ["Laboratory Techniques", "Data Analysis", "Scientific Method", "Research Design"], 
        advice: "Your curiosity and analytical skills make biomedical research a strong match. Focus on developing strong research skills in your area of interest.", 
        icon: "fa-dna",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 58, 
        title: "Geologist", 
        category: "science", 
        match: 79, 
        salary: "$65,000 - $110,000", 
        growth: "5%", 
        description: "Study the materials, processes, and history of the Earth.", 
        skills: ["Field Work", "Data Analysis", "Geological Mapping", "Scientific Reporting"], 
        advice: "Your analytical thinking and interest in the natural world make geology a good match. Consider specializing in areas like petroleum, mining, or environmental geology.", 
        icon: "fa-mountain",
        imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 59, 
        title: "Chemist", 
        category: "science", 
        match: 85, 
        salary: "$60,000 - $110,000", 
        growth: "6%", 
        description: "Study substances at the atomic and molecular levels and analyze the ways they interact.", 
        skills: ["Laboratory Techniques", "Chemical Analysis", "Research", "Safety Protocols"], 
        advice: "Your analytical skills and attention to detail make chemistry a strong match. Consider specializing in areas like analytical, organic, or materials chemistry.", 
        icon: "fa-flask",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
        id: 60, 
        title: "Physicist", 
        category: "science", 
        match: 88, 
        salary: "$90,000 - $160,000", 
        growth: "8%", 
        description: "Explore the fundamental properties and laws that govern space, time, energy, and matter.", 
        skills: ["Mathematical Modeling", "Research", "Data Analysis", "Theoretical Thinking"], 
        advice: "Your analytical thinking and curiosity about how the universe works make physics a strong match. Consider specializing in theoretical or applied physics.", 
        icon: "fa-atom",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const mobileLoginBtn = document.getElementById('mobile-login-btn');
const mobileSignupBtn = document.getElementById('mobile-signup-btn');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');
const startAssessmentBtn = document.getElementById('start-assessment-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionEl = document.getElementById('current-question');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const assessmentSection = document.querySelector('.assessment');
const resultsSection = document.getElementById('results');
const resultsContainer = document.getElementById('results-container');
const retakeAssessment = document.getElementById('retake-assessment');
const viewDashboard = document.getElementById('view-dashboard');
const dashboardSection = document.getElementById('dashboard');
const backToResults = document.getElementById('back-to-results');
const categoryFilter = document.getElementById('category-filter');
const careerSearch = document.getElementById('career-search');
const careerPathsContainer = document.getElementById('career-paths-container');
const loadMoreCareersBtn = document.getElementById('load-more-careers');
const backToTop = document.getElementById('back-to-top');
const userName = document.getElementById('user-name');
const dashboardMatches = document.getElementById('dashboard-matches');
const nextStepsList = document.getElementById('next-steps-list');
const resourcesList = document.getElementById('resources-list');

// State variables
let currentQuestion = 0;
let userAnswers = [];
let isLoggedIn = false;
let currentUser = null;
let userResults = [];
let savedCareers = [];
let displayedCareers = 12; // Number of careers to show initially
const careersPerLoad = 12; // Number of careers to load when clicking "Load More"

// Assessment questions - 5 complete questions
const questions = [
    {
        text: "What type of environment do you thrive in?",
        options: [
            { text: "Structured & Predictable", description: "I prefer clear guidelines, routines, and well-defined processes", value: "structured" },
            { text: "Dynamic & Fast-Paced", description: "I thrive in changing environments with new challenges regularly", value: "dynamic" },
            { text: "Collaborative & Team-Oriented", description: "I enjoy working closely with others and value teamwork", value: "collaborative" },
            { text: "Independent & Self-Directed", description: "I prefer working alone with autonomy over my projects", value: "independent" }
        ]
    },
    {
        text: "Which of these activities do you enjoy most?",
        options: [
            { text: "Solving Complex Problems", description: "I enjoy analyzing information and finding solutions to challenging issues", value: "problem-solving" },
            { text: "Creating & Designing", description: "I love expressing myself through creative projects and design", value: "creative" },
            { text: "Helping & Supporting Others", description: "I find fulfillment in assisting people and making a difference", value: "helping" },
            { text: "Organizing & Planning", description: "I enjoy creating systems, processes, and keeping things orderly", value: "organizing" }
        ]
    },
    {
        text: "What is most important to you in a life path?",
        options: [
            { text: "Security & Stability", description: "Having a predictable path and long-term prospects", value: "security" },
            { text: "Growth & Advancement", description: "Opportunities for progression and significant achievements", value: "growth" },
            { text: "Work-Life Balance", description: "Having time for personal interests, family, and hobbies", value: "balance" },
            { text: "Making an Impact", description: "Contributing to something meaningful and making a difference", value: "impact" }
        ]
    },
    {
        text: "Which skills do you feel are your strongest?",
        options: [
            { text: "Analytical & Technical", description: "Working with data, technology, and complex systems", value: "analytical" },
            { text: "Communication & Interpersonal", description: "Expressing ideas clearly and working well with people", value: "communication" },
            { text: "Leadership & Management", description: "Guiding teams, making decisions, and taking initiative", value: "leadership" },
            { text: "Creative & Artistic", description: "Generating original ideas and artistic expression", value: "creative-skills" }
        ]
    },
    {
        text: "What is your preferred learning style?",
        options: [
            { text: "Hands-On Practice", description: "I learn best by doing and applying knowledge in real situations", value: "hands-on" },
            { text: "Theoretical Study", description: "I prefer understanding concepts and theories before applying them", value: "theoretical" },
            { text: "Visual Demonstration", description: "I learn effectively through diagrams, charts, and visual aids", value: "visual" },
            { text: "Collaborative Learning", description: "I learn best through discussion and working with others", value: "collaborative-learning" }
        ]
    }
];

// Initialize the app
function init() {
    setupEventListeners();
    updateAssessment();
    loadUserData();
    loadSavedCareers();
    checkBackToTop();
    populateCareerPaths();
    updateSaveButtons();
}

// Set up all event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Auth modal
    loginBtn.addEventListener('click', () => openAuthModal('login'));
    signupBtn.addEventListener('click', () => openAuthModal('signup'));
    mobileLoginBtn.addEventListener('click', () => openAuthModal('login'));
    mobileSignupBtn.addEventListener('click', () => openAuthModal('signup'));
    authClose.addEventListener('click', closeAuthModal);
    
    // Auth tabs
    loginTab.addEventListener('click', () => switchAuthTab('login'));
    signupTab.addEventListener('click', () => switchAuthTab('signup'));
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        switchAuthTab('signup');
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        switchAuthTab('login');
    });
    
    // Auth forms
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    
    // Assessment
    startAssessmentBtn.addEventListener('click', startAssessment);
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    retakeAssessment.addEventListener('click', resetQuiz);
    viewDashboard.addEventListener('click', showDashboard);
    backToResults.addEventListener('click', showResultsFromDashboard);
    
    // Career filters and search
    categoryFilter.addEventListener('change', filterCareers);
    careerSearch.addEventListener('input', filterCareers);
    loadMoreCareersBtn.addEventListener('click', loadMoreCareers);
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Back to top button
    window.addEventListener('scroll', checkBackToTop);
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .step, .path-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save theme preference
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Mobile menu functions
function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Auth modal functions
function openAuthModal(type) {
    authModal.classList.add('active');
    switchAuthTab(type);
}

function closeAuthModal() {
    authModal.classList.remove('active');
}

function switchAuthTab(type) {
    if (type === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.style.display = 'flex';
        loginForm.style.display = 'none';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (email && password) {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('lifeNavigatorUsers')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            isLoggedIn = true;
            currentUser = user;
            saveUserData();
            loadSavedCareers();
            closeAuthModal();
            updateAuthUI();
            showNotification('Login successful!', 'success');
            
            // If user has results, show dashboard
            if (user.results && user.results.length > 0) {
                userResults = user.results;
                showDashboard();
            }
        } else {
            showNotification('Invalid email or password.', 'error');
        }
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    // Simple validation
    if (name && email && password && confirm) {
        if (password !== confirm) {
            showNotification('Passwords do not match.', 'error');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('lifeNavigatorUsers')) || [];
        const existingUser = users.find(u => u.email === email);
        
        if (existingUser) {
            showNotification('An account with this email already exists.', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            name,
            email,
            password,
            joined: new Date().toISOString(),
            results: [],
            savedCareers: []
        };
        
        users.push(newUser);
        localStorage.setItem('lifeNavigatorUsers', JSON.stringify(users));
        
        isLoggedIn = true;
        currentUser = newUser;
        savedCareers = [];
        saveUserData();
        closeAuthModal();
        updateAuthUI();
        showNotification('Account created successfully!', 'success');
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
}

function updateAuthUI() {
    if (isLoggedIn && currentUser) {
        loginBtn.textContent = currentUser.name.split(' ')[0];
        signupBtn.style.display = 'none';
        mobileLoginBtn.textContent = currentUser.name.split(' ')[0];
        mobileSignupBtn.style.display = 'none';
    } else {
        loginBtn.textContent = 'Sign In';
        signupBtn.style.display = 'inline-flex';
        mobileLoginBtn.textContent = 'Sign In';
        mobileSignupBtn.style.display = 'inline-flex';
    }
}

// Save user data to localStorage
function saveUserData() {
    if (currentUser) {
        currentUser.results = userResults;
        currentUser.savedCareers = savedCareers;
        
        // Update user in localStorage
        const users = JSON.parse(localStorage.getItem('lifeNavigatorUsers')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('lifeNavigatorUsers', JSON.stringify(users));
        }
        
        localStorage.setItem('lifeNavigatorCurrentUser', JSON.stringify(currentUser));
        localStorage.setItem('lifeNavigatorIsLoggedIn', JSON.stringify(isLoggedIn));
    }
}

// Load user data from localStorage
function loadUserData() {
    const savedUser = localStorage.getItem('lifeNavigatorCurrentUser');
    const savedLoginStatus = localStorage.getItem('lifeNavigatorIsLoggedIn');
    
    if (savedUser && savedLoginStatus) {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = JSON.parse(savedLoginStatus);
        userResults = currentUser.results || [];
        updateAuthUI();
    }
}

// Load saved careers from user data
function loadSavedCareers() {
    if (currentUser && currentUser.savedCareers) {
        savedCareers = currentUser.savedCareers;
    } else {
        savedCareers = [];
    }
}

// Save career function
function saveCareer(careerId) {
    if (!isLoggedIn) {
        openAuthModal('signup');
        return false;
    }
    
    const career = careerDatabase.find(c => c.id === careerId);
    if (!career) return false;
    
    // Check if already saved
    if (savedCareers.some(c => c.id === careerId)) {
        // Remove from saved
        savedCareers = savedCareers.filter(c => c.id !== careerId);
        showNotification('Career removed from saved', 'success');
    } else {
        // Add to saved
        savedCareers.push(career);
        showNotification('Career saved successfully!', 'success');
    }
    
    // Update user data
    if (currentUser) {
        currentUser.savedCareers = savedCareers;
        saveUserData();
    }
    
    // Update UI
    updateSaveButtons();
    renderSavedCareers();
    
    return true;
}

// Update save buttons based on saved state
function updateSaveButtons() {
    // Update save buttons in career paths
    document.querySelectorAll('.path-card').forEach(card => {
        const careerId = parseInt(card.dataset.id);
        const saveBtn = card.querySelector('.save-btn');
        if (saveBtn) {
            const isSaved = savedCareers.some(c => c.id === careerId);
            saveBtn.innerHTML = isSaved ? 
                '<i class="fas fa-bookmark"></i> Saved' : 
                '<i class="far fa-bookmark"></i> Save';
            saveBtn.classList.toggle('saved', isSaved);
        }
    });
    
    // Update save buttons in results
    document.querySelectorAll('.result-card').forEach(card => {
        const careerId = parseInt(card.dataset.id);
        const saveBtn = card.querySelector('.save-path-btn');
        if (saveBtn) {
            const isSaved = savedCareers.some(c => c.id === careerId);
            saveBtn.innerHTML = isSaved ? 
                '<i class="fas fa-bookmark"></i> Saved' : 
                '<i class="far fa-bookmark"></i> Save Path';
            saveBtn.classList.toggle('saved', isSaved);
        }
    });
}

// Render saved careers in dashboard
function renderSavedCareers() {
    const savedContainer = document.getElementById('saved-careers-container');
    if (!savedContainer) return;
    
    if (savedCareers.length === 0) {
        savedContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h4>No Saved Careers Yet</h4>
                <p>Start exploring careers and save your favorites to review later</p>
                <button class="btn btn-primary" onclick="document.querySelector('#career-paths').scrollIntoView({ behavior: 'smooth' })">
                    Explore Careers
                </button>
            </div>
        `;
        return;
    }
    
    savedContainer.innerHTML = savedCareers.map(career => `
        <div class="saved-career-item">
            <div class="saved-career-content">
                <h4>${career.title}</h4>
                <div class="saved-career-meta">
                    <span><i class="fas fa-money-bill-wave"></i> ${career.salary}</span>
                    <span><i class="fas fa-chart-line"></i> ${career.growth}</span>
                </div>
                <p>${career.description}</p>
            </div>
            <div class="saved-career-actions">
                <button class="btn btn-secondary" onclick="viewCareerDetails(${career.id})">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn btn-danger" onclick="removeSavedCareer(${career.id})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `).join('');
}

// Remove saved career
function removeSavedCareer(careerId) {
    savedCareers = savedCareers.filter(c => c.id !== careerId);
    if (currentUser) {
        currentUser.savedCareers = savedCareers;
        saveUserData();
    }
    renderSavedCareers();
    updateSaveButtons();
    showNotification('Career removed from saved', 'success');
}

// View career details
function viewCareerDetails(careerId) {
    // Scroll to career paths and highlight the career
    document.querySelector('#career-paths').scrollIntoView({ behavior: 'smooth' });
    // You could add more detailed view functionality here
}

// Populate career paths from database
function populateCareerPaths() {
    careerPathsContainer.innerHTML = '';
    
    const careersToShow = careerDatabase.slice(0, displayedCareers);
    
    careersToShow.forEach(career => {
        const careerCard = createCareerCard(career);
        careerPathsContainer.appendChild(careerCard);
    });
    
    // Show/hide load more button based on remaining careers
    if (displayedCareers >= careerDatabase.length) {
        loadMoreCareersBtn.style.display = 'none';
    } else {
        loadMoreCareersBtn.style.display = 'inline-flex';
    }
}

// Create individual career card
function createCareerCard(career) {
    const isSaved = savedCareers.some(c => c.id === career.id);
    
    const careerCard = document.createElement('div');
    careerCard.className = 'path-card';
    careerCard.dataset.field = career.category;
    careerCard.dataset.title = career.title.toLowerCase();
    careerCard.dataset.id = career.id;
    
    careerCard.innerHTML = `
        <div class="path-image" style="background-image: url('${career.imageUrl}')">
            <i class="fas ${career.icon}"></i>
        </div>
        <div class="path-content">
            <h3>${career.title}</h3>
            <div class="path-meta">
                <span><i class="fas fa-money-bill-wave"></i> ${career.salary}</span>
                <span><i class="fas fa-chart-line"></i> ${career.growth}</span>
            </div>
            <p>${career.description}</p>
            <div class="path-skills">
                ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="path-actions">
                <button class="btn btn-secondary">Learn More</button>
                <button class="btn btn-primary save-btn ${isSaved ? 'saved' : ''}" onclick="saveCareer(${career.id})">
                    <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
        </div>
    `;
    
    return careerCard;
}

// Filter careers based on category and search
function filterCareers() {
    const category = categoryFilter.value;
    const searchTerm = careerSearch.value.toLowerCase();
    
    const filteredCareers = careerDatabase.filter(career => {
        const matchesCategory = category === 'all' || career.category === category;
        const matchesSearch = career.title.toLowerCase().includes(searchTerm) || 
                             career.description.toLowerCase().includes(searchTerm) ||
                             career.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    // Reset displayed careers count when filtering
    displayedCareers = Math.min(filteredCareers.length, careersPerLoad);
    
    // Clear and repopulate with filtered careers
    careerPathsContainer.innerHTML = '';
    
    const careersToShow = filteredCareers.slice(0, displayedCareers);
    
    if (careersToShow.length === 0) {
        careerPathsContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>No careers found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    } else {
        careersToShow.forEach(career => {
            const careerCard = createCareerCard(career);
            careerPathsContainer.appendChild(careerCard);
        });
    }
    
    // Show/hide load more button
    if (displayedCareers >= filteredCareers.length) {
        loadMoreCareersBtn.style.display = 'none';
    } else {
        loadMoreCareersBtn.style.display = 'inline-flex';
    }
}

// Load more careers
function loadMoreCareers() {
    const category = categoryFilter.value;
    const searchTerm = careerSearch.value.toLowerCase();
    
    const filteredCareers = careerDatabase.filter(career => {
        const matchesCategory = category === 'all' || career.category === category;
        const matchesSearch = career.title.toLowerCase().includes(searchTerm) || 
                             career.description.toLowerCase().includes(searchTerm) ||
                             career.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    displayedCareers = Math.min(displayedCareers + careersPerLoad, filteredCareers.length);
    
    // Clear and repopulate with more careers
    careerPathsContainer.innerHTML = '';
    
    const careersToShow = filteredCareers.slice(0, displayedCareers);
    
    careersToShow.forEach(career => {
        const careerCard = createCareerCard(career);
        careerPathsContainer.appendChild(careerCard);
    });
    
    // Show/hide load more button
    if (displayedCareers >= filteredCareers.length) {
        loadMoreCareersBtn.style.display = 'none';
    } else {
        loadMoreCareersBtn.style.display = 'inline-flex';
    }
}

// Assessment functions
function startAssessment() {
    if (!isLoggedIn) {
        openAuthModal('signup');
        return;
    }
    
    // Scroll to assessment section
    assessmentSection.scrollIntoView({ behavior: 'smooth' });
}

function updateAssessment() {
    const question = questions[currentQuestion];
    questionText.textContent = question.text;
    currentQuestionEl.textContent = currentQuestion + 1;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}% Complete`;
    
    // Add pulse animation to progress bar on question change
    progressBar.classList.add('progress-pulse');
    setTimeout(() => {
        progressBar.classList.remove('progress-pulse');
    }, 2000);
    
    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'assessment-option';
        optionEl.innerHTML = `
            <h4>${option.text}</h4>
            <p>${option.description}</p>
        `;
        optionEl.dataset.value = option.value;
        optionEl.addEventListener('click', function() {
            document.querySelectorAll('.assessment-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            userAnswers[currentQuestion] = index;
        });
        optionsContainer.appendChild(optionEl);
    });
    
    // Update buttons
    prevBtn.disabled = currentQuestion === 0;
    if (currentQuestion === questions.length - 1) {
        nextBtn.innerHTML = 'See Results <i class="fas fa-chart-line"></i>';
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }
}

function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateAssessment();
    }
}

function goToNextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        showNotification('Please select an answer before proceeding.', 'error');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateAssessment();
    } else {
        showResults();
    }
}

function showResults() {
    // Calculate results based on answers
    userResults = calculateResults();
    
    // Save results to user data
    saveUserData();
    
    // Render results
    renderResults(userResults);
    
    // Hide assessment and show results
    assessmentSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showResultsFromDashboard() {
    // Hide dashboard and show results
    dashboardSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showDashboard() {
    // Hide results and show dashboard
    resultsSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    
    // Update dashboard with user data
    updateDashboard();
    
    // Scroll to dashboard
    dashboardSection.scrollIntoView({ behavior: 'smooth' });
}

function updateDashboard() {
    // Update user name
    if (currentUser) {
        userName.textContent = currentUser.name.split(' ')[0];
    }
    
    // Update matches in dashboard
    renderDashboardMatches(userResults);
    
    // Update next steps
    renderNextSteps(userResults);
    
    // Update resources
    renderResources(userResults);
    
    // Update saved careers
    renderSavedCareers();
}

function renderDashboardMatches(results) {
    dashboardMatches.innerHTML = '';
    
    results.forEach((career, index) => {
        const matchEl = document.createElement('div');
        matchEl.className = 'match-analysis';
        matchEl.style.marginBottom = index < results.length - 1 ? '1.5rem' : '0';
        matchEl.style.paddingBottom = index < results.length - 1 ? '1.5rem' : '0';
        matchEl.style.borderBottom = index < results.length - 1 ? '1px solid var(--border)' : 'none';
        
        matchEl.innerHTML = `
            <h4>${career.title} <span style="color: var(--primary); font-size: 0.875rem;">${career.match}% Match</span></h4>
            <p>${career.advice || 'Your skills and preferences align well with this life path. Consider exploring requirements and entry-level positions.'}</p>
            <div class="skill-tags" style="margin-top: 0.75rem;">
                ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        dashboardMatches.appendChild(matchEl);
    });
}

function renderNextSteps(results) {
    nextStepsList.innerHTML = '';
    
    const nextSteps = [
        {
            icon: 'fa-search',
            title: 'Research Path Requirements',
            description: 'Learn about education, certifications, and experience needed for your top matches.'
        },
        {
            icon: 'fa-user-tie',
            title: 'Connect with Professionals',
            description: 'Reach out to people currently working in these fields for informational interviews.'
        },
        {
            icon: 'fa-graduation-cap',
            title: 'Identify Skill Gaps',
            description: 'Compare your current skills with requirements and create a learning plan.'
        },
        {
            icon: 'fa-briefcase',
            title: 'Explore Entry-Level Positions',
            description: 'Look for internships or junior roles to gain practical experience.'
        },
        {
            icon: 'fa-calendar',
            title: 'Create a Timeline',
            description: 'Set realistic goals and deadlines for your life transition or advancement.'
        }
    ];
    
    nextSteps.forEach((step, index) => {
        const stepEl = document.createElement('li');
        stepEl.innerHTML = `
            <div class="step-icon">
                <i class="fas ${step.icon}"></i>
            </div>
            <div class="step-content">
                <h5>${step.title}</h5>
                <p>${step.description}</p>
            </div>
        `;
        nextStepsList.appendChild(stepEl);
    });
}

function renderResources(results) {
    resourcesList.innerHTML = '';
    
    const resources = [
        {
            icon: 'fa-book',
            title: 'Life Development Books',
            description: 'Recommended reading for life planning and skill development'
        },
        {
            icon: 'fa-video',
            title: 'Online Courses',
            description: 'Curated list of courses to build skills for your top path matches'
        },
        {
            icon: 'fa-users',
            title: 'Professional Networks',
            description: 'Industry-specific groups and associations to join'
        },
        {
            icon: 'fa-newspaper',
            title: 'Industry Publications',
            description: 'Stay updated with trends in your fields of interest'
        }
    ];
    
    resources.forEach(resource => {
        const resourceEl = document.createElement('li');
        resourceEl.innerHTML = `
            <div class="resource-icon">
                <i class="fas ${resource.icon}"></i>
            </div>
            <div class="resource-content">
                <h5>${resource.title}</h5>
                <p>${resource.description}</p>
            </div>
        `;
        resourcesList.appendChild(resourceEl);
    });
}

function calculateResults() {
    // Simple algorithm to match careers based on answers
    // In a real app, this would be more sophisticated
    
    // Count occurrences of each value type
    const valueCounts = {};
    userAnswers.forEach((answerIndex, questionIndex) => {
        const value = questions[questionIndex].options[answerIndex].value;
        valueCounts[value] = (valueCounts[value] || 0) + 1;
    });
    
    // Determine user profile based on highest counts
    let maxCount = 0;
    let userProfile = '';
    
    for (const [value, count] of Object.entries(valueCounts)) {
        if (count > maxCount) {
            maxCount = count;
            userProfile = value;
        }
    }
    
    // Map profile to career categories and return top matches
    const profileToCategory = {
        'structured': 'business',
        'dynamic': 'technology',
        'collaborative': 'healthcare',
        'independent': 'creative',
        'problem-solving': 'technology',
        'creative': 'creative',
        'helping': 'healthcare',
        'organizing': 'business',
        'security': 'education',
        'growth': 'technology',
        'balance': 'healthcare',
        'impact': 'healthcare',
        'analytical': 'technology',
        'communication': 'healthcare',
        'leadership': 'business',
        'creative-skills': 'creative',
        'hands-on': 'technology',
        'theoretical': 'education',
        'visual': 'creative',
        'collaborative-learning': 'healthcare'
    };
    
    const primaryCategory = profileToCategory[userProfile] || 'technology';
    
    // Return careers from the primary category, sorted by match score
    return careerDatabase
        .filter(career => career.category === primaryCategory)
        .sort((a, b) => b.match - a.match)
        .slice(0, 3);
}

function renderResults(results) {
    resultsContainer.innerHTML = '';
    
    results.forEach(career => {
        const isSaved = savedCareers.some(c => c.id === career.id);
        const resultEl = document.createElement('div');
        resultEl.className = 'result-card';
        resultEl.dataset.id = career.id;
        
        resultEl.innerHTML = `
            <div class="result-header">
                <div class="result-match">${career.match}%</div>
                <h3 class="result-title">${career.title}</h3>
            </div>
            <div class="result-content">
                <div class="result-meta">
                    <span><i class="fas fa-dollar-sign"></i> Avg. Salary: ${career.salary}</span>
                    <span><i class="fas fa-chart-line"></i> Growth: ${career.growth}</span>
                </div>
                <p class="result-description">${career.description}</p>
                <div class="result-skills">
                    <h4>Key Skills</h4>
                    <div class="path-skills">
                        ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="result-actions">
                    <button class="btn btn-secondary">Learn More</button>
                    <button class="btn btn-primary save-path-btn ${isSaved ? 'saved' : ''}" onclick="saveCareer(${career.id})">
                        <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save Path'}
                    </button>
                </div>
            </div>
        `;
        
        resultsContainer.appendChild(resultEl);
    });
}

function resetQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    updateAssessment();
    assessmentSection.style.display = 'block';
    resultsSection.style.display = 'none';
    assessmentSection.scrollIntoView({ behavior: 'smooth' });
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Back to top button visibility
function checkBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    loadThemePreference();
});
